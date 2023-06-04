import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';
// if (options.dialect === 'mysql') {
//   options.dialectModule = mysql2;
// }
// new Sequelize(options)

const db = new Sequelize('wads_fp','root','',{
    host:'https://odd-jobs-back-end.vercel.app/',
    dialect:'mysql'
});

export default db;