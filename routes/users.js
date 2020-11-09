var express = require('express');
var router = express.Router();
let usersController=require('../controllers/usersController');

router.get("/detalleUsuario", usersController.detalleUsuario);
router.get("/miPerfil", usersController.miPerfil);
router.get("/resultadoBusqueda", usersController.resultadoBusqueda);

module.exports = router;
