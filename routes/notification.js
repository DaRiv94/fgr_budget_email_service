const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const sgMail = require('@sendgrid/mail');
// const axios = require("axios");


//Email notification endpoint /notification
//This endpoint takes a sendgrid email body, returns true or false if email was sent properly or not
router.post("/", async (req,res)=>{
    //to_email
    //from_email
    //subject
    //html
    //fallback_text
    console.log("Hello")

    if(!req.body || !req.body.to_email || !req.body.subject || !req.body.from_email || !req.body.html || !req.body.fallback_text){
        res.status(400).json({detail:"Please send valid notification body"})
    }
    console.log("Hello2")
    // message = {
    //     to_email:req.body.to_email,
    //     from_email:req.body.from_email,
    //     subject:req.body.subject,
    //     html:req.body.html,
    //     fallback_text:req.body.fallback_text,
    // }
    try{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // let new_transaction_html_markup = ""

    //     new_transaction_html_markup += `<div>
    //         <ul>
    //             <li>ACCOUNT: cde9wefcwe9f9w </li>
    //             <li>ID: 1111</li>
    //             <li>DATE: a date</li>
    //             <li>NAME: burger joint</li>
    //             <li>AMOUNT: 1000</li>
    //         </ul>
    //         <hr>
    //     </div>`
    // }

    // let metadata=JSON.stringify(req.body);
    // new_transaction_html_markup += `<hr><div>${metadata}</div>`

    console.log("Markup:",req.body.html)
    
    const msg = {
    to: req.body.to_email,
    from: req.body.from_email,
    subject: req.body.subject,
    text: req.body.fallback_text,
    html: req.body.html,
    };

    console.log("msg:",msg)

    if(process.env.SEND_EMAIL == 'true'){
        let response = await sgMail.send(msg);
        console.log("sendgrid response:",response)
        console.log("sendgrid response.Response:",response.Response)
        console.log("sendgrid response.Response.statusCode:",response.Response.statusCode)
        if(response[0].Response.statusCode=="202"){
            console.log("--------------------------------EMAIL SUCCUESSS!")
        }
        return res.status(200).json({detail:"Email was sent properly", will_send:msg})
    }else{
        return res.status(200).json({detail:"Email not sent due to SEND_EMAIL env var", would_send:msg})
    }
    

    





    
        // let token="MYTOKEN123"
    
        return res.status(200).json({detail:"Email was sent properly", will_send:msg})
    }catch(ex){

        // return res.status(500).json({Error:JSON.stringify(ex)})
        return res.status(500).json({Error:ex})

    }
});


module.exports=router;
