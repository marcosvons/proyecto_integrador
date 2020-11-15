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
    }

}

module.exports=postController;