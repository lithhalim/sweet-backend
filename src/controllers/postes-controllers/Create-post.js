const post_model=require("../../model/postes-model/post-model");

module.exports=async(req,res)=>{  
    let Data=await post_model.create(req.body)
    res.json("ceate-post")
}