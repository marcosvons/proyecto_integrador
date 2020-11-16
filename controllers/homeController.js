const db= require('../database/models');
const posts=db.Post;
const op= db.Sequelize.Op;
const comentarios=db.Comment

let homeController={
    index: function(req, res){
        posts.findAll({
            include: [ { association: "users" }, { association: "comentarios" } ]
        ,
            
            order: [
                ["published", "DESC"]
            ]
            })

        .then(function(posts){
            console.log(posts.comentarios)
            res.render("home", {posts: posts})
        })
        .catch(function(error){
            console.log(error)
        })
    },
}

module.exports=homeController;