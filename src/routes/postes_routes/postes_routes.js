const express = require('express')
const router = express.Router()


// //ALL MEDILWARE FUNCTION ARE USE


//------------------------------------ postes all data ----------------------------------------//
const creat_post=require("../../controllers/postes-controllers/Create-post");
router.post("/createpost",creat_post)

const Get_all_post=require("../../controllers/postes-controllers/get-allpostes");
router.get("/getpostes",Get_all_post)

const Get_Catagory=require("../../controllers/postes-controllers/get-catagory");
router.get("/getpostesCatagory/:data",Get_Catagory)


const get_page_product=require("../../controllers/postes-controllers/get-Product");
router.get("/getproductpage/:data",get_page_product)



//--------------------------------------like data ------------------------------------------------//
const create_like_controllers=require("../../controllers/postes-controllers/like-comment/like/create-like")
router.post("/createlike",create_like_controllers)



//-----------------------------------comment data -------------------------------------------------//
const create_comment_controllers =require("../../controllers/postes-controllers/like-comment/comment/create-comment");
router.post("/createComment",create_comment_controllers)




module.exports=router
