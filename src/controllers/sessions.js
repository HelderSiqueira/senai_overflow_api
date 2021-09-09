const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth");
const bcrypt =require("bcryptjs")

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    // verificar se o usuario existe
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    // se as senhas estão corretas

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(403).send({ error: "Usuario e/ou senha inválidos" });
    }
    // gerar token
    const token = jwt.sign({ userId: user.id }, auth.secret, {
      expiresIn: "1h",
    });
    res.send({
      user: {
        ra: user.ra,
        email: user.email,
        name: user.name,
      },
      token,
    });
    // enviar respostas
  },
};
