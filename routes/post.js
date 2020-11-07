let express=require("express");
let router=express.Router();
let postController=require('../controllers/postController')
router.get("/agregarPost", postController.agregarPost);
router.get("/detallePost", postController.detallePost);

module.exports=router;