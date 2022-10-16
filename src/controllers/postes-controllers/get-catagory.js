const post_model=require("../../model/postes-model/post-model");

module.exports=async(req,res)=>{
    const Datause=await post_model.findAll({
        where:{catagory:req.params.data}
    })
    res.json(Datause)
}