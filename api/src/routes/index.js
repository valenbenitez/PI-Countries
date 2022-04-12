const { Router, express } = require("express");
const axios = require("axios");
const { Country } = require("../db");
const { Activities } = require("../db");
const { Op } = require("sequelize");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", async (req, res, next) => {
  // var paisesA = await axios({
  //   method: "GET",
  //   url: "https://restcountries.com/v3/all",
  // });
  try {
    if (req.query.name) {
      var name = req.query.name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      var aux2 = await Country.findAll({ where: { name: name } });
      if (aux2) {
        return res.json(aux2);
      } else {
        var aux3 = await Country.findAll({ where:{name:{[Op.like]: `%${name}`}} });
        return res.json(aux3);
      }
    } else {
      var aux2 = await Country.findAll();
      return res.json(aux2);
    }
  } catch (error) {
    res.send("Country not found");
  }
});

//flag, name, cca3 y continent
//Capital, subregion, area(mostrar en km2), Poblacion, actividades turisticas
router.get("/countries/:idPais", async (req, res, next) => {
  try {
    var id = req.params.idPais.toUpperCase();
    if (id.length === 3 && id.match(/^[A-Z]+$/i)) {
      var pais = await Country.findByPk(id, {
        include: Activities,
      });
      if (!pais) {
        var paisApi = await axios({
          method: "GET",
          url: "https://restcountries.com/v2/alpha/" + id,
        });
        console.log(paisApi);
        return res.json(paisApi);
      } else {
        console.log(pais);
        return res.json(pais);
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
