const { Router, express } = require("express");
const axios = require("axios");
const { Country } = require('../db')
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
  var misPaises = await Country.findAll()

  if(misPaises.length === 0){
      var paises = paisesA.data.map((country)=>{
          return {
              id: country.cca3,
              name: country.name.common,
              flag: country.flags[0],
              continent: country.region,
              capital: country.capital,
              subregion: country.subregion,
              area: country.area,
              poblacion: country.population
          }
      })
  }
  try {
      const aux = await Country.bulkCreate(paises)
      res.json(aux)
  } catch (error) {
      next(error)
  }
});

module.exports = router;
