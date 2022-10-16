const post_model=require("../../model/postes-model/post-model");

module.exports=async(req,res)=>{  
    req.body.forEach((data)=>{
        let Data=post_model.create(data)
    })
    res.json("ceate-post")
}