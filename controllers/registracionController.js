const db= require('../database/models');
const bcrypt=require('bcryptjs')
const users=db.User;
const op= db.Sequelize.Op;



let registracionController={
    index: function(req, res){
        console.log(users); 
        users.findAll()
        .then(function (resultado){
            console.log(resultado)
        })
        
        /*if(req.session.user != undefined){
        return res.redirect('/home')
        } else {*/
            return res.render('registracion')
        //}  
          
    },    
    store: function(req, res){
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
}

module.exports=registracionController;
