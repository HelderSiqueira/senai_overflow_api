const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

module.exports = {
    store(req, res){
        const {email, password} = req.body;

        //verificar se o usuario existe
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        //se a senha esta correta
        if(!user || user.password !== password){
            return res.status(403).send({error: "Usuário e/ou senha inválidos"});
        }
        
        //gerar um token
        const token = jwt.sign({userId: user.id, perfil: "abc"}, auth.secret, {
            expiresIn: "1h"
        });

        //enviar resposta
        res.send({
            user: {
                ra: user.ra,
                email: user.email,
                name: user.name
            },
            token
        })
    }
}