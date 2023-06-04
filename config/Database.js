import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';
// if (options.dialect === 'mysql') {
//   options.dialectModule = mysql2;
// }
// new Sequelize(options)

const db = new Sequelize(process.env.DATABASE,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect:'mysql'
});

export default db;