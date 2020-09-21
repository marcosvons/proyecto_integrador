let express=require("express");
let router=express.Router();
let agregarPostController=require('../controllers/agregarPostController')
router.get("/", agregarPostController.index)

module.exports=router;