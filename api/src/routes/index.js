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
  // if (req.query.name) {
  //   var name = req.query.name;
  //   name = name.charAt(0).toUpperCase() + name.slice(1);
  //   var aux2 = await Country.findAll({ where: { name: name } });
  //   if (aux2) {
  //     return res.json(aux2);
  //   } else {
  //     var aux3 = await Country.findAll({ where:{name:{[Op.like]: `%${name}`}} });
  //     return res.json(aux3);
  //   }
  // } else {
  //   var aux2 = await Country.findAll();
  //   return res.json(aux2);
  // }
  try {
    if (req.query.name) {
      var name = req.query.name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      var resultado = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: Activities
      });
      if (resultado.length > 0) {
        return res.json(resultado);
      } else {
        return res.status(400).json({ error: 'Country not found :/' })
      }
    } else {
      var aux2 = await Country.findAll({
        include: Activities
      });
      return res.json(aux2);
    }
  } catch (error) {
    next(error);
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

router.post('/act', async (req, res, next) => {
  // var {name, dificultad, duracion, temporada} = req.body

  // if(!req.body.name || !req.body.dificultad || req.body.duracion || req.body.temporada){
  //   next(error)
  // }
  try {
    const newActivities = await Activities.create({
      id: req.body.id,
      name: req.body.name,
      dificultad: req.body.dificultad,
      duracion: req.body.duracion,
      temporada: req.body.temporada
    })
    await newActivities.addCountry(req.body.Country)
    // console.log(req.body.Country)
    res.status(201).json(newActivities)

  } catch (error) {
    next(error)
  }
})

router.get('/activities', async(req, res, next)=>{
  const activities = await Activities.findAll({})
  res.json(activities)
})

module.exports = router;
