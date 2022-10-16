const post_model=require("../../model/postes-model/post-model");
const comment=require("../../model/postes-model/post_comment");
const likes=require("../../model/postes-model/post_like");

module.exports=async(req,res)=>{
    const dataxx=await post_model.findOne({
        include:{model:likes,model:comment},
        where:{id:req.params.data}    
    })
    res.json(dataxx)
}