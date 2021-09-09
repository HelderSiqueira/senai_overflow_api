const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth");
module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;
    // inserir o usuario no banco
    let user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      return res.status(400).send({ error: "este email ja exiwst" });
    }
    // gerar token
 
    // gerar o hash da senha
    const passwordHashed = bcrypt.hashSync(password);
    user = await User.create({
      name: name,
      email: email,
      password: passwordHashed,
    });
    const token = jwt.sign({ userId: user.id }, auth.secret, {
      expiresIn: "1h",
    });
    res.send({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token
    });
  },
};
