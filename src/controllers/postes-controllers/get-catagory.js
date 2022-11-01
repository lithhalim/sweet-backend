const post_model=require("../../model/postes-model/post-model");
const imageModel=require("../../model/postes-model/post_Images");

module.exports=async(req,res)=>{
    if(req.params.data=="all"){
        const Datause=await post_model.findAll({
            include:{model:imageModel}
        })
        res.json(Datause)    
    }else{
        const Datause=await post_model.findAll({
            where:{categories:req.params.data},
            include:{model:imageModel}
        })
        res.json(Datause)
    
    }
}