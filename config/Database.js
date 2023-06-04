import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';
// if (options.dialect === 'mysql') {
//   options.dialectModule = mysql2;
// }
// new Sequelize(options)

const db = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME,{
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT
});

export default db;