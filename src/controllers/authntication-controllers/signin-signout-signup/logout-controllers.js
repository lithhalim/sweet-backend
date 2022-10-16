const reguster_model=require("../../../model/reguster_model/reguster_model")

module.exports=async(req,res)=>{
    const deleteRefreshToken=await reguster_model.update({refreshtoken:""},{where:{regusterid:req.params.data}})
    res.json("delete Refresh Token")
}
