let usersController={
    detalleUsuario: function(req, res){
        return res.render('detalleUsuario')
    },
    miPerfil: function(req, res){
        if(req.session.userLogueado != null){
            return res.render('miPerfil')
            } else {
                return res.send("Solo los usuarios logueados pueden acceder al perfil")
            }
    },
    resultadoBusqueda: function(req, res){
        return res.render('resultadoBusqueda')
    },
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('userId')
        return res.redirect('/login')    
        
    }
}

module.exports=usersController;