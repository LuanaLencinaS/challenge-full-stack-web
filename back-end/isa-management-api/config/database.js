require("dotenv").config();

module.exports = {
  username: process.env.BD_USERNAME,
  password: process.env.BD_PASS,
  database: process.env.BD_NAME,
  host: process.env.BD_HOST,
  dialect: process.env.BD_DIALECT,
};
