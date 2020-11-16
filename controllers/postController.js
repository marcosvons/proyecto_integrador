const db= require('../database/models');
const post=db.Post;
const op= db.Sequelize.Op;

let postController={
    detallePost: function(req, res){
        let id = req.params.id;
        dueñoPost=req.session.userLogueado
        post.findByPk(id,
            {include:[
                {association: "users"},
                {association: "comentarios"}
            ]})
    
        .then(function(post){
            res.render("detallePost", {post: post, dueñoPost: dueñoPost})
        })
        .catch(function(error){
            console.log(error)
        })
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
                    url_img: req.body.img,
                    post_descr: req.body.description,
                    
                };      
        
                post.create(newPost)
        
                .then(function(){
                    res.redirect("/home");
                })
                .catch(function(error){
                    console.log(error)
                })
        } else {
                res.redirect("/user/registracion")
            }        
    },
    
    borrarPost: function(req, res){
        
        let idBorrarPost = req.params.id;

        post.destroy({
            where: {
                id: idBorrarPost
            }
        })
        .then(function (){
            return res.redirect('/home');
        })
        .catch(function(error){
            console.log(error)
        })
        
    },
    editarPost: function(req, res){
        if (req.session.userLogueado != null){
            let idPost=req.params.id;
            post.findByPk(idPost)
            .then(function(editpost){
                return res.render("editarPost", {editpost})
            })
            .catch(function(error){
                console.log(error)
            })} else {
                return res.send("Pagina solo accesible para los usuarios")
            }
    },
    actualizarPost: function(req, res){
        let idUpdate=req.params.id
        if(req.body.img != "" && req.body.description == ""){
            var posteoActualizado = {
                post_descr: post.post_descr,
                url_img: req.body.img
            }
            post.update(
                posteoActualizado,
                {where: {id: idUpdate}}
            )
            .then(function(){
                return res.redirect("miPerfil")
            })
            .catch(function(error){
                console.log(error)
            })
        }
        else if(req.body.img == "" && req.body.description != ""){
            var posteoActualizado = {
                post_descr: req.body.description,
                url_img: post.url_img
            }
            post.update(
                posteoActualizado,
                {where: {id: idUpdate}}
            )
            .then(function(){
                return res.redirect("miPerfil")
            })
            .catch(function(error){
                console.log(error)
            })
        } 
        else if(req.body.img == "" && req.body.description == ""){
            return res.send("Por favor complete alguno de los campos")      
        }
        else {
            var posteoActualizado = {
                post_descr: req.body.description,
                url_img: req.body.img
            }
            post.update(
                posteoActualizado,
                {where: {id: idUpdate}}
            )
            .then(function(){
                return res.redirect("miPerfil")
            })    
            .catch(function(error){
                console.log(error)
            })   
        }
        
        return res.redirect('/users/miPerfil')
    },
    buscador: function (req, res){
        let busqueda = req.query.buscadorposts;
        post.findAll({
            include:
                {association: "users"},
            where: [
                { post_descr : {[op.like]: "#%" + busqueda + "%"}   }
            ],
            order: [
                ['published', 'DESC']
            ],
            limit: 20
        })
        .then(function(busquedaPost){
            //console.log(busquedaUsuario);
            //res.send(busquedaUsuario);
        return res.render("buscadorPosts", {busquedaPost: busquedaPost, busqueda: busqueda})
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
}


module.exports=postController;