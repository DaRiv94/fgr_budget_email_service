const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const sgMail = require('@sendgrid/mail');

//Email verification endpoint /verification
//This endpoint takes an email, returns a token to backend and send email verification email
router.post("/", (req,res)=>{

    if(!req.body || !req.body.email){
        res.status(400).json({detail:"Please send valid verification body"})
    }
    try{
        // Generate JWT here. Use process.env.EMAIL_VERIFICATION_SECRET
        let token="MYTOKEN123"

        //Send token as uery param to be used on an endpoint on the backend
    
        return res.status(200).json(token)
    }catch(ex){
        return res.status(500).json({Error:JSON.stringify(ex)})
    }
});


module.exports=router;
