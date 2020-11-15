const db= require('../database/models');
const bcrypt=require('bcryptjs');
const users=db.User;
const op= db.Sequelize.Op;

let postController={
    detallePost: function(req, res){
        let id = req.params.id;
        
        db.Post.findByPk(id,
            {include:[
                {association: "users"},
                {association: "comentarios",
                    include: {association: "comments_user"}
                }
            ]},)
    
        .then(function(post){
            res.render("detallePost", {post: post})
        })
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
        if (req.session.userLogueado == undefined) {
            res.redirect("/login")
        }
        if (req.session.userLogueado != undefined) {
                let newPost = {
                    id_usuario: req.session.userLogueado.id,
                    nombre_usuario: req.session.userLogueado.nombre_usuario,
                    url_img: req.body.url_img,
                    post_descr: req.body.post_descr,
                    published: req.body.published,
                };      
        
                db.Post.create(newPost)
        
                .then(function(){
                    res.redirect("/home");
                })
        } else {
                res.redirect("/user/registracion")
            }        
    },
    
    borrarPost: function(req, res){
        
        let idBorrarPost = req.params.id;

        db.Post.destroy({
            where: {
                id: idBorrarPost
            }
        });

        return res.redirect('/home');
    }
}


module.exports=postController;