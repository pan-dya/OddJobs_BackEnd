// const Sequelize = require('sequelize')
import { Sequelize } from "sequelize";
// if (options.dialect === 'mysql') {
//   options.dialectModule = mysql2;
// }
// new Sequelize(options)

const db = new Sequelize(process.env.DATABASE, 'root',{
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
});

export default db;