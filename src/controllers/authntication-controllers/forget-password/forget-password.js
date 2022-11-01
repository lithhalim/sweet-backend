const sgMail = require('@sendgrid/mail');
require("dotenv").config();

const regusterModel=require("../../../model/reguster_model/reguster_model");


module.exports=async(req,res)=>{
    try{
        let dataSearch=await regusterModel.findAll({where:{email:req.body.email}})
        res.json(dataSearch)
    }catch(err){
        res.json({result:"Wroong Email ..."})
    }
    
}