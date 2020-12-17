import Sequelize from 'sequelize';
import mysql from 'mysql2/promise';
import {config} from './config.js';

const { host, port, user, password, database } = config;

  async function intialize () {
  const connection = await mysql.createConnection({ host, port, user, password });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  console.log('Database created')
  
};

 intialize()


const sequelize= new Sequelize(database, user, password, { dialect: 'mysql', operatorsAliases: false, logging: false })

export default  sequelize;
