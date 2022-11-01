const Post_Model=require("../../model/postes-model/post-model");

module.exports=async(req,res)=>{
    let data=await Post_Model.destroy({where:{id:req.body.id}})
    res.json("item deleted")
}