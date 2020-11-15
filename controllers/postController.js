const db= require('../database/models');
const bcrypt=require('bcryptjs');
const users=db.User;
const op= db.Sequelize.Op;

let postController={
    detallePost: function(req, res){
        return res.render('detallePost')
    },
    agregarPost: function(req, res){
        if(req.session.userLogueado != null){
        return res.render('agregarPost')
        } else {
            return res.send("Solo los usuarios logueados pueden agregar posteos")
        }
    },
    storePost: function(req, res){
        req.body.img
        req.body.description

        let newPost = {
            id_usuario: req.session.userLogueado.id,
            url_img: req.body.img,
            post_descr: req.body.description,
        }
        db.Post.create(newPost)
        .then(function(){
            res.redirect("/home")
        },
        )
    }
}

module.exports=postController;