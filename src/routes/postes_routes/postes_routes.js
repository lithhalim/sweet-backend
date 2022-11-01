const express = require('express')
const router = express.Router()


// //ALL MEDILWARE FUNCTION ARE USE


//------------------------------------ postes all data ----------------------------------------//
const creat_post=require("../../controllers/postes-controllers/Create-post");
router.post("/createpost",creat_post)

const create_Image=require("../../controllers/postes-controllers/create-image");
router.post("/createImage",create_Image);


//-------------------------------------get section -------------------------------------------//

const Get_all_post=require("../../controllers/postes-controllers/get-allpostes");
router.get("/getpostes/:data",Get_all_post)

const Get_Catagory=require("../../controllers/postes-controllers/get-catagory");
router.get("/getpostesCatagory/:data",Get_Catagory)


const get_page_product=require("../../controllers/postes-controllers/get-Product");
router.get("/getproductpage/:data",get_page_product)


//--------------------------------------delete section --------------------------------------------//

const DeleteItem=require("../../controllers/postes-controllers/delete-item");
router.post("/DeleteItem",DeleteItem)


//--------------------------------------like data ------------------------------------------------//
const create_like_controllers=require("../../controllers/postes-controllers/like-comment/like/create-like")
router.post("/createlike",create_like_controllers)



//-----------------------------------comment data -------------------------------------------------//
const create_comment_controllers =require("../../controllers/postes-controllers/like-comment/comment/create-comment");
router.post("/createComment",create_comment_controllers)




module.exports=router
