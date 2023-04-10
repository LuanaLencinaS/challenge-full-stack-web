const jwt = require("jsonwebtoken");
const { User } = require("../models");
const bcrypt = require("bcrypt");

const loginController = {
  login: async (req, res) => {
    let tokenSecret = process.env.TOKEN_SECRET;
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email, type_user: 1 } });
    if (!user) return res.status(400).json({ message: "user not found" });

    if (!bcrypt.compareSync(password, user.password))
      return res.status(400).json({ message: "pass incorrect" });

    let token = jwt.sign({ user }, tokenSecret);

    return res
      .status(200)
      .json({ data: { user, token }, message: "user logged with success" });
  },
  secret: async (req, res) => {
    return res.status(200).json({ message: "Page secret" });
  },
};
module.exports = loginController;
