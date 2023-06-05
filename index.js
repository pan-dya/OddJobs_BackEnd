import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
import router from "./routes/index.js";
import Address from "./models/AddressModel.js";
import { Sequelize } from "sequelize";
import { refreshToken } from "./controller/RefreshToken.js";
dotenv.config();
const app = express();

try {
  await db.authenticate;
  // db.query(`CREATE DATABASE IF NOT EXIST wads_fp`)
  console.log("Database Connected...");
  await db.sync({ alter: true });
} catch (error) {
  console.error(error);
}

app.use((req, res, next) => {
  res.setHeader('Set-Cookie', 'SameSite=None; Secure');
  next();
});

app.use(
  cors({ credentials: true, origin: ["https://odd-jobs-front-n5tztzdim-pan-dya.vercel.app", 'https://odd-jobs-front-end.vercel.app', 'https://odd-jobs-front-7nw1glcrm-pan-dya.vercel.app', 'https://odd-jobs-front-9wa50pnph-pan-dya.vercel.app'] })
);
app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  const refreshToken = req.cookies.refreshToken;
  if (refreshToken) {
    res.locals.refreshToken = refreshToken;
  }
  next();
});

app.use(router);

app.listen(process.env.HOST || HOST, () =>
  console.log("Server Running at Port 5000")
);
