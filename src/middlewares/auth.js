const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

module.exports = (req, res, next) => {
  // pegar o token no cabeçalho
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: "Token nao informado" });
  }
  // separar o prefixo do token
  // verificar se o token é valido
  const [prefixo, token] = authorization.split(" ");

  // verificar se o token chegou
  try {
    const payload = jwt.verify(token, auth.secret);
    req.userId = payload.userId;
    return next();
  
  
  } catch (error) {
    res.status(401).send({ error: "token invalido" });
  }
};
