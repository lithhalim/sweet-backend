const comment_Model=require("../../../../model/postes-model/post_comment");

module.exports=async(req,res)=>{
    let createData=await comment_Model.create(req.body)
    res.json("create comment")
}