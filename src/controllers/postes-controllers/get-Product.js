const post_model=require("../../model/postes-model/post-model");
const comment=require("../../model/postes-model/post_comment");
const image =require("../../model/postes-model/post_Images")
module.exports=async(req,res)=>{
    const dataxx=await post_model.findOne({
        include:{model:comment,model:image},
        where:{id:req.params.data}    
    })
    res.json(dataxx)
}