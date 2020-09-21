let express=require("express");
let router=express.Router();
let resultadoBusquedaController=require('../controllers/resultadoBusquedaController')
router.get("/", resultadoBusquedaController.index)
module.exports=router;