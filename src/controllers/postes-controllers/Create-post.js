const post_model=require("../../model/postes-model/post-model");

module.exports=async(req,res)=>{  
    req.body.forEach(async(data)=>{
        let Data=await post_model.create(data)
    })
    res.json("ceate-post")
}