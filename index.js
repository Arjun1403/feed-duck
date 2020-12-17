import express from 'express'
import routes from './src/route/route.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import models from './src/model/index.js'

const init = async()=>{
  await models.FoodType.sync()
  await models.Country.sync()
  await models.Region.sync()
  await models.Food.sync()
  await models.Feed.sync()
  console.log('Models synced!')
}

init()

dotenv.config()

const app = express()
const SERVER_PORT = process.env.PORT || 8080;

app.listen(SERVER_PORT, () => {
    console.log(`Application started on port ${SERVER_PORT}`)
})

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse requests of content-type: application/json
app.use(bodyParser.json());
routes(app)

app.set('view engine', 'ejs');
