const sgMail = require('@sendgrid/mail');
require("dotenv").config();



module.exports=(req,res)=>{
  
    let {email,regusterid}=req.body


    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIl,
      subject: 'Update Passowrd Foodzinzo',
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      <h3>The Verify Code Is Just Copy It </h3>
      <p>${regusterid}</p>`
    };
    //ES6
    sgMail
      .send(msg)
      .then((info) => {
        console.log(info.response)
        res.json(info.response);
      }, error => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body)
        }
      });
  }
