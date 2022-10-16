const jwt = require('jsonwebtoken');
require('dotenv').config();


//create the refresh token 
module.exports= createRefreshToken =(user)=> jwt.sign({

    //the information will save in payload section information of user
    fullName:user.fullName,
    image:user.image,
    regusterid:user.regusterid,
    role:user.role

    },
    //the signeture you use in the access token
    process.env.REFRESH_TOKEN_SECRET ,

    //the token will expire after these time
    {expiresIn:"7d"}
    );
