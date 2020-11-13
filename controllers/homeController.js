const db= require('../database/models');
const op= db.Sequelize.Op;

let homeController={
    index: function(req, res){
        db.Post.findAll(
            {
            order: [["published", "DESC"]],  
            },  
        )

        .then(function(posts){
            res.render("home", {posts: posts})
        })
    },
}

module.exports=homeController;