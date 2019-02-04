const express = require('express');
const cors = require('cors');
const controllers = require('./controllers');

const app = express();

app.use(cors());

app.get('/animal-kingdom', controllers.animalKingdom);

app.get('/epcot', controllers.epcot);

app.get('/hollywood-studios', controllers.hollywoodStudios);

app.get('/magic-kingdom', controllers.magicKingdom);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`WDW Wait Time API listening on port ${port}`);
});
