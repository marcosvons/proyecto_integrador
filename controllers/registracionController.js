const db= require('../database/models');
const bcrypt=require('bcryptjs');
const users=db.User;
const op= db.Sequelize.Op;



let registracionController={
    index: function(req, res){
       /* users.findAll()
        .then(function (resultado){
            console.log(resultado)
        })*/
        
        if(req.session.userLogueado != undefined){
        return res.redirect('/home')
        } else {
            return res.render('registracion')
        }  
          
    },    
    store: function(req, res){
        if (req.body.password != req.body.retype_password){
            return res.send("Las contraseñas no coinciden, por favor intentelo otra vez")
        }
        users.findOne({
            where: [{email: req.body.email}]
        })
        .then(function(user){
            if (user != null){
            return res.send("Este email ya pertenece a una cuenta de Memegram")
            }
            else{
                let user={
                    nombre_usuario: req.body.name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    fecha_nac: req.body.fecha_nac,
                    preg_seg: req.body.preg_seg
                }
                users.create(user);
            return res.redirect('/login')
            }
        })
        .catch( e => console.log(e))
    }
}

module.exports=registracionController;
