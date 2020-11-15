let express=require("express");
let router=express.Router();
let postController=require('../controllers/postController')

//GET: Para q el usuario complete el form
//POST: Para leer y procesar la info q el user completo en el form

router.get("/detallePost/:id", postController.detallePost);

router.get("/agregarPost", postController.agregarPost);
router.post("/agregarPost", postController.storePost);

router.post("/borrarPost", postController.borrarPost)
//router.get("/editarPost/:id", postController.editarPost)
//router.post("/actualizarPost", postController.actualizarPost)

//router.get("/buscadorPost", postController.buscadorPost);
//router.get("/resultadoPost", postController.resultadoPost);


module.exports=router;