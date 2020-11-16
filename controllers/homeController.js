const db= require('../database/models');
const posts=db.Post;
const op= db.Sequelize.Op;

let homeController={
    index: function(req, res){
        posts.findAll({
            include: [{association: "users"}, {association: "comentarios"}]
        ,
            
            order: [
                ["published", "DESC"]
            ]
            })

        .then(function(posts){
            res.render("home", {posts: posts})
        })
        .catch(function(error){
            console.log(error)
        })
    },
}

module.exports=homeController;