let express=require("express");
let router=express.Router();
let postController=require('../controllers/postController')

//Para q el usuario complete el form
router.get("/agregarPost", postController.agregarPost);

//Para leer y procesar lo q el user completo en el form
router.get("/detallePost", postController.detallePost);

module.exports=router;