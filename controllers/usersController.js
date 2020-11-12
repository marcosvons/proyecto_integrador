let usersController={
    detalleUsuario: function(req, res){
        return res.render('detalleUsuario')
    },
    miPerfil: function(req, res){
        return res.render('miPerfil')
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