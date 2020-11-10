const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const sgMail = require('@sendgrid/mail');
// const axios = require("axios");

// //This is the dynamic auth url
// const baseUrl="http://fgr_dynamic_auth_web_1:4000/";
// // const baseUrl="http://localhost:4000/";

//Email verification endpoint /verification
//This endpoint takes an email, returns a token to backend and 
router.post("/", (req,res)=>{

    if(!req.body || !req.body.email){
        res.status(400).json({detail:"Please send valid verification body"})
    }

    try{
        let token="MYTOKEN123"
    
        return res.status(200).json(token)
    }catch(ex){

        return res.status(500).json({Error:JSON.stringify(ex)})

    }
});


module.exports=router;
