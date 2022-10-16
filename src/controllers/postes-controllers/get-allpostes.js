const postes_model=require("../../model/postes-model/post-model");
const comment_model=require("../../model/postes-model/post_comment")

module.exports=async(req,res)=>{
    const data=await postes_model.findAll({
        include:{model:comment_model}
    })
    res.json(data)
}