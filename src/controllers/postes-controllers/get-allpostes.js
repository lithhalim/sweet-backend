const postes_model=require("../../model/postes-model/post-model");
const like_model=require("../../model/postes-model/post_like");
const comment_model=require("../../model/postes-model/post_comment")

module.exports=async(req,res)=>{
    const data=await postes_model.findAll({
        include:{model:like_model,model:comment_model}
    })
    res.json(data)
}