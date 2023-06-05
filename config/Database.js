// const Sequelize = require('sequelize')
import { Sequelize } from "sequelize";
// if (options.dialect === 'mysql') {
//   options.dialectModule = mysql2;
// }
// new Sequelize(options)

const db = new Sequelize("wads_fp", process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
});

export default db;