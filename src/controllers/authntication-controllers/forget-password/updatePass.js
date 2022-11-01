const reguster=require("../../../model/reguster_model/reguster_model");
const bcrypt = require('bcrypt');


module.exports=async(req,res)=>{
        let hashPassword=await bcrypt.hash(req.body.password,10);
        const datause=await reguster.update({password:hashPassword},{where:{regusterid:req.body.regusterid}})
        res.json(datause)
}