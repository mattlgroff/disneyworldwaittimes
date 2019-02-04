const Themeparks = require("themeparks");

module.exports = {
  animalKingdom: (req, res) => {
    const park = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();
    getWaitTimes(req,res,park);
  },
  epcot: (req, res) => {
    const park = new Themeparks.Parks.WaltDisneyWorldEpcot();
    getWaitTimes(req,res,park);
  },
  hollywoodStudios: (req, res) => {
    const park = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();
    getWaitTimes(req,res,park);
  },
  magicKingdom: (req, res) => {
    const park = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
    getWaitTimes(req,res,park);
  }
}

const getWaitTimes = (req, res, park) => {
  park.GetWaitTimes()
  .then(rides => res.json(rides))
  .catch(err => res.json({error: err}));
}