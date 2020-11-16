var express = require('express');
var router = express.Router();
let usersController=require('../controllers/usersController');

router.get("/detalleUsuario/:id", usersController.detalleUsuario);
router.get("/miPerfil", usersController.miPerfil);
router.get("/resultadoBusqueda", usersController.resultadoBusqueda);
router.get("/edit/:id", usersController.edit)

router.post('/logout', usersController.logout)
router.post("/edit/:id", usersController.updateUsername)

module.exports = router;
