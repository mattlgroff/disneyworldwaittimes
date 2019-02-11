const Themeparks = require('themeparks');
const axios = require('axios');

module.exports = {
  animalKingdom: (req, res) => {
    const park = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();
    getWaitTimes(req, res, park);
  },
  epcot: (req, res) => {
    const park = new Themeparks.Parks.WaltDisneyWorldEpcot();
    getWaitTimes(req, res, park);
  },
  hollywoodStudios: (req, res) => {
    const park = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();
    getWaitTimes(req, res, park);
  },
  magicKingdom: (req, res) => {
    const park = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
    getWaitTimes(req, res, park);
  },
  weather: (req, res) => {
    const castleCoords = '28.4183651,-81.5819427';
    const govApi = `https://api.weather.gov/points/${castleCoords}`;

    axios
      .get(govApi)
      .then(({ data }) => {
        const { properties } = data;
        const { forecast } = properties;

        axios
          .get(forecast)
          .then(({ data }) => {
            const { properties } = data;
            res.json({ properties });
          })
          .catch(err => res.json({ error }));
      })
      .catch(error => res.json({ error }));
  },
};

const getWaitTimes = (req, res, park) => {
  park
    .GetWaitTimes()
    .then(rides => res.json(rides))
    .catch(err => res.json({ error: err }));
};
