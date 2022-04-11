const { Router, express } = require("express");
const axios = require("axios");
const { Country } = require("../db");
const { Activities } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", async (req, res, next) => {
  var paisesA = await axios({
    method: "GET",
    url: "https://restcountries.com/v3/all",
  });
  var misPaises = await Country.findAll();

  if (misPaises.length === 0) {
    var paises = paisesA.data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags ? country.flags[0] : "Flag not available",
        continent: country.region,
        capital: country.capital ? country.capital : "Capital not found",
        subregion: country.subregion
          ? country.subregion
          : "Subregion not avaible",
        area: country.area,
        poblacion: country.population,
      };
    });
  }
  try {
    const aux = await Country.bulkCreate(paises);
    res.json(aux);
  } catch (error) {
    next(error);
  }
});

//flag, name, cca3 y continent
//Capital, subregion, area(mostrar en km2), Poblacion, actividades turisticas
router.get("/countries/:idPais", async (req, res, next) => {
  try {
    var id = req.params.idPais.toUpperCase();
    if (id.length === 3) {
      var pais = await Country.findByPk(id, {
        include: Activities,
      });
      if (!pais) {
        var paisApi = await axios({
            method: "GET",
            url: "https://restcountries.com/v2/alpha/" + id,
          });
          console.log(paisApi)
          return res.json(paisApi);
      } else {
          console.log(pais)
        return res.json(pais)
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
