const express = require('express')
const router = express.Router()

//BASIQ AUTH REQUIRE
const basic_auth=require("../../middelware/authintication/basic_auth")
const bearer_auth=require("../../middelware/authintication/barear_auth")



//ALL MEDILWARE FUNCTION ARE USE
const signin_controllers=require("../../controllers/authntication-controllers/signin-signout-signup/signin-controllers");
const signup_controllers=require("../../controllers/authntication-controllers/signin-signout-signup/signup-controllers");



//ALL ROUTES ARE USED
router.post("/signin",basic_auth,signin_controllers)
router.post("/signup",signup_controllers);




module.exports=router
