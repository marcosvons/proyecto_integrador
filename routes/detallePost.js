let express=require("express");
let router=express.Router();
let detallePostController=require('../controllers/detallePostController')
router.get("/", detallePostController.index)
module.exports=router;