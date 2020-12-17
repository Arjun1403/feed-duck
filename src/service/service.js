import Sequelize from 'sequelize';
import models from '../model/index.js';

class Service {
    async add(requestObj) {
      await models.Country.findOrCreate({attributes: ['id'], where: {name: requestObj.country}}).then(function(country) {
        var countryID = country[0].id;
        models.Region.findOrCreate({attributes: ['id'], where: {name: requestObj.place, countryID: countryID}}).then(function(region) {
          var regionID = region[0].id;
          models.FoodType.findOrCreate({attributes: ['id'], where: {name: requestObj.foodType}}).then(function(foodType) {
            var foodTypeID = foodType[0].id;
            models.Food.findOrCreate({attributes: ['id'], where: {name: requestObj.food, typeID: foodTypeID, description: requestObj.foodDescription}}).then(function(food) {
              var foodID = food[0].id;
              models.Feed.upsert({nickname: requestObj.nickname, time: requestObj.time, regionID: regionID, foodID: foodID, duckCount: requestObj.duckCount, feedAmount: requestObj.feedAmount, timePeriod: requestObj.timePeriod});
            });
          });
        });
      });
    }

    async getFoodTypes() {
      return models.FoodType.findAll();
    }

    async get() {
      return models.Feed.findAll({include: [{model: models.Region, include: [{model: models.Country}]}, {model: models.Food, include: [{model: models.FoodType}]}]});
    }

    async getUsers(by) {
      switch(by){
        case "timePeriod":
          return models.Feed.findAll({attributes: ['timePeriod', [Sequelize.fn('count', Sequelize.col('nickname')), 'count']], group: ['Feed.timePeriod']});

        case "country":
          return models.Feed.findAll({attributes: ['id', [Sequelize.fn('count', Sequelize.col('nickname')), 'count']], include: [{ model: models.Region, attributes: ['id'], include: [{model: models.Country, required: true}], required: true}], group: ['Region.Country.id']});

          case "region":
            return models.Feed.findAll({attributes: ['id', [Sequelize.fn('count', Sequelize.col('nickname')), 'count']], include: [{ model: models.Region, attributes: ['id', 'name'], required: true}], group: ['Region.id']});
      }
    }

    async getDucks(by) {
      switch(by){
        case "timePeriod":
          return models.Feed.findAll({attributes: ['timePeriod', [Sequelize.fn('sum', Sequelize.col('duckCount')), 'sum']], group: ['timePeriod'], raw: true});

        case "country":
          return models.Feed.findAll({attributes: ['id', [Sequelize.fn('SUM', Sequelize.col('duckCount')), 'sum']], include: [{ model: models.Region, attributes: ['id'], include: [{model: models.Country, required: true}], required: true}], group: ['Region.Country.id']});

          case "region":
            return models.Feed.findAll({attributes: ['id', [Sequelize.fn('SUM', Sequelize.col('duckCount')), 'sum']], include: [{ model: models.Region, attributes: ['id', 'name'], required: true}], group: ['Region.id']});
      }
    }

    getTimePeriod(time) {
      console.log('a')
      console.log(`${time}`);
      
      var hour = time.split(":")[0];
      console.log(`${hour}`)
      if(hour < 12) {
        return "Morning";
      }
      else if(hour >= 12 && hour <= 16) {
        return "Afternoon";
      }
      else if(hour >= 17 && hour <= 19) {
        return "Evening";
      }
      else {
        return "Night";
      }
    }

    getOutputJSON(responseObj) {
      var responseObjJson = [];

      for(var i=0; i<responseObj.length; i++) {
          responseObjJson[i] = {
              nickname: responseObj[i].nickname,
              time: responseObj[i].time,
              timePeriod: responseObj[i].timePeriod,
              place: responseObj[i].Region.name,
              country: responseObj[i].Region.Country.name,
              food: responseObj[i].Food.name,
              foodType: responseObj[i].Food.FoodType.name,
              foodDescription: responseObj[i].Food.description,
              duckCount: responseObj[i].duckCount,
              feedAmount: responseObj[i].feedAmount,
              createdAt: responseObj[i].createdAt,
          }
      }

      return responseObjJson;
    }
}
export default Service
