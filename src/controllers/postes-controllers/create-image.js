const Image_model=require("../../model/postes-model/post_Images");

module.exports=async(req,res)=>{
    const data=await Image_model.create(req.body)
    res.json("create")
}