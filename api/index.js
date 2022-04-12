//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require("axios");
// const { Country } = require("../db");

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  var paisesA = await axios({
    method: "GET",
    url: "https://restcountries.com/v3/all",
  });
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
    const aux = await Country.bulkCreate(paises);
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
