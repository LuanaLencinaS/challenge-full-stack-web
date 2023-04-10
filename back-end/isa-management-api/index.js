const express = require("express");
const path = require("path");
require("dotenv").config();

//routes
const loginRouter = require("./routes/login");
const patientRouter = require("./routes/patient");

const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", loginRouter);
app.use("/patient", patientRouter);

app.listen(process.env.API_PORT || 3030, function (err) {
  if (err) console.error(err);
  console.log(`API INICIADA NA PORTA ${process.env.API_PORT}`);
});
