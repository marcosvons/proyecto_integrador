let express=require("express");
let router=express.Router();
let detalleUsuarioController=require('../controllers/detalleUsuarioController');
router.get("/", detalleUsuarioController.index);
module.exports=router;