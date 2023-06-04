import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';
// if (options.dialect === 'mysql') {
//   options.dialectModule = mysql2;
// }
// new Sequelize(options)

const db = new Sequelize('wads_fp','root','',{
    host:'localhost',
    dialect:'mysql'
});

export default db;