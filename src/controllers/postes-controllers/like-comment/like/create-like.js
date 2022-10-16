const like_model=require("../../../../model/postes-model/post_like");


module.exports=async(req,res)=>{
    let datause=await like_model.create(req.body)
    res.json("like create")
}