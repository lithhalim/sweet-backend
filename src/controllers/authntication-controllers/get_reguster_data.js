const Reguster_Model=require("../../model/reguster_model/reguster_model");

module.exports=async(req,res)=>{
    const data=await Reguster_Model.findAll({where:{role:req.params.data},  attributes: [ 'id','email',"fullName","image","regusterid","role"]})
    res.json(data)
}