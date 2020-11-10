const db= require('../database/models');
const bcrypt=require('bcryptjs')
const users=db.User;
const op= db.Sequelize.Op;

let loginController={
    index: function(req, res){
        return res.render('login')
    },
    login: function(req, res){
        users.findOne({
            where: [{ nombre_usuario: req.body.email }]
        })
        .then(function(user){
            if(user == null){
                return res.send('Email incorrecto')
            } else if(bcrypt.compareSync(req.body.password, user.password) == false){
                return res.send('Contraseña incorrecta')
            }
            //coinciden contraseñas
            else if(bcrypt.compareSync(req.body.password, user.password)){
                req.session.user=user; //req.session.USUARIOLOGUEADO 

                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, {maxAge: 20*1000})
                }
                return res.redirect('/')
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

module.exports=loginController;