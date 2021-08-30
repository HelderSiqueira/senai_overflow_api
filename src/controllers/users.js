const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    store(req, res){
        const {name, email, password} = req.body;

        //verificar se o usuário já existe
        user.findOne({
            where: {
                email: email
            }
        })
        
        if(user){
            return res.status(400).send({error: "Este e-mail já está sendo utilizado"})
        }

        //gerar o hash da senha
        const passwordHashed = bcrypt.hashSync(password);

        //inserir o usuário no banco
        user = await User.create({
            name: name,
            email: email, 
            password: password
        });

        //gerar um token usuário


        //retornar o usuário
        res.send({
            user: {
                name: user.name,
                email: user.email
            }
        });
    }
}