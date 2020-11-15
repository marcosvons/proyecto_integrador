const db= require('../database/models');
const bcrypt=require('bcryptjs')
const users=db.User;
const op= db.Sequelize.Op;

let loginController={
    index: function(req, res){
        if(req.session.userLogueado != undefined){
            return res.redirect('/home')
            } else {
                return res.render('login')
            }
    },
    login: function(req, res){
        users.findOne({
            where: {[op.or]: [{ nombre_usuario: req.body.email}, {email: req.body.email}]}
        })
        .then(function(user){
            if(user == null){
                return res.send('Usuario incorrecto')
            } else if(bcrypt.compareSync(req.body.password, user.password) == false){
                return res.send('Contraseña incorrecta')
            }
            //coinciden contraseñas
            else if(bcrypt.compareSync(req.body.password, user.password)){
                req.session.userLogueado=user; //req.session.USUARIOLOGUEADO 

                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, {maxAge: 20*1000})
                }
                return res.redirect('/home')
            }
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

module.exports=loginController;