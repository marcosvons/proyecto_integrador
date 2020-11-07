let postController={
    detallePost: function(req, res){
        return res.render('detallePost')
    },
    agregarPost: function(req, res){
        return res.render('agregarPost')
    }

}

module.exports=postController;