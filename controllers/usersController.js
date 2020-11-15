const db= require('../database/models');
const bcrypt=require('bcryptjs')
const users=db.User;
const op= db.Sequelize.Op;

let usersController={
    detalleUsuario: function(req, res){
        return res.render('detalleUsuario')
    },
    miPerfil: function(req, res){
        if(req.session.userLogueado != null){
            return res.render('miPerfil')
            } else {
                return res.send("Solo los usuarios logueados pueden acceder al perfil")
            }
    },
    resultadoBusqueda: function(req, res){
        let busqueda = req.query.busqueda;
        db.User.findAll(
            {
                where: {
                    [op.or]: [{ nombre_usuario: { [op.like]: "%" + busqueda + "%"} }, { email: { [op.like]: "%" + busqueda + "%"} }
                ],
                order: ["nombre_usuario"]
                }
            }
        )
        .then(function(usuarioResultado){
            res.render("resultadoBusqueda", {usuarioResultado: usuarioResultado, busqueda: busqueda})
        })
    },
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('userId')
        return res.redirect('/login')    
        
    }
}

module.exports=usersController;