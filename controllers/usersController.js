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
}

module.exports=usersController;