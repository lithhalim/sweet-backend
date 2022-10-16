const post_model=require("../../model/postes-model/post-model");
const comment=require("../../model/postes-model/post_comment");

module.exports=async(req,res)=>{
    const dataxx=await post_model.findOne({
        include:{model:comment},
        where:{id:req.params.data}    
    })
    res.json(dataxx)
}