const db= require('../database/models/index');
const users = db.User;
const op= db.Sequelize.Op;
const posts=db.Post

let usersController={
    detalleUsuario: function(req, res){
        let idUser = req.params.id;

        users.findByPk(idUser, {
            include: [{ association: 'posts' }]
        })
            .then( function (usuario){
                // return res.send(resultados)
                return res.render('detalleUsuario', { usuario });
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    miPerfil: function(req, res){
        if(req.session.userLogueado != null){
            user=req.session.userLogueado;
            posts.findAll({
                where: {id_usuario: user.id},
                order: [
                    ["published", "DESC"]
                ]
            })
            .then(function(resultados){
                return res.render('miPerfil', {user, resultados})
            })
            .catch(function(error){
                console.log(error)
            })
            
            } else {
                return res.send("Solo los usuarios logueados pueden acceder al perfil")
            }
    },
    resultadoBusqueda: function(req, res){
        let busqueda = req.query.buscador;
        users.findAll({
                where: {[op.or]: [{ nombre_usuario: { [op.like]: "%" + busqueda + "%"} }, { email: { [op.like]: "%" + busqueda + "%"} }]}
            })
        .then(function(busquedaUsuario){
            //console.log(busquedaUsuario);
            //res.send(busquedaUsuario);
        return res.render("resultadoBusqueda", {busquedaUsuario: busquedaUsuario, busqueda: busqueda})
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('userId')
        return res.redirect('/login')    
        
    },
    edit: function(req, res){
        if (req.session.userLogueado != null){
        let idUser=req.params.id;
        users.findByPk(idUser)
        .then(function(usuario){
            return res.render("userEdit", {usuario})
        })
        .catch(function(error){
            console.log(error)
        })} else {
            return res.send("Pagina solo accesible para los usuarios")
        }
    },
    updateUsername:function(req, res){
        let idUpdate=req.params.id

        users.update(
            {nombre_usuario: req.body.nombre_usuario},
            {where: {id: idUpdate}}
        )
        return res.redirect('/users/miPerfil')
    }
}

module.exports=usersController;
