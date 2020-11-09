let express=require("express");
let router=express.Router();
let registracionController=require('../controllers/registracionController')
router.get("/", registracionController.index)
router.post("/", registracionController.store)
module.exports=router;