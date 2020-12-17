import Sequelize from 'sequelize';
import sequelize from '../connection/connection.js';



const FoodType = sequelize.define("FoodType", {
    id: {
      type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true
});

  const Food = sequelize.define("Food", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      typeID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'FoodType',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.TEXT
      }
    }, {
    freezeTableName: true
});

  const Country = sequelize.define("Country", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    }, {
    freezeTableName: true
});

const Region = sequelize.define("Region", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    countryID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Country',
        key: 'id'
      }
    }
  }, {
    freezeTableName: true
});

  const Feed = sequelize.define("Feed", {
      nickname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      time: {
        type: Sequelize.TIME
      },
      timePeriod: {
        type: Sequelize.STRING
      },
      regionID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Region',
          key: 'id'
        }
      },
      foodID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Food',
          key: 'id'
        }
      },
      duckCount: {
        type: Sequelize.INTEGER
      },
      feedAmount: {
        type: Sequelize.INTEGER
      }
    }, {
    freezeTableName: true
});

Feed.belongsTo(Food, { foreignKey: 'foodID' });
Feed.belongsTo(Region, { foreignKey: 'regionID' });
Food.belongsTo(FoodType, { foreignKey: 'typeID' });
Region.belongsTo(Country, { foreignKey: 'countryID' });

const Models = {Feed, Food, FoodType, Country, Region};

export default Models
