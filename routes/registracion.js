let express=require("express");
let router=express.Router();
let registracionController=require('../controllers/registracionController')
router.get("/", registracionController.index)
module.exports=router;