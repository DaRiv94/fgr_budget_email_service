const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

const FROM_EMAIL = "noreply@frankieriviera.com"

//Email notification endpoint /notification
//This endpoint takes a sendgrid email body, returns true or false if email was sent properly or not
router.post("/", async (req,res)=>{

    if(!req.body || !req.body.to_email || !req.body.subject || !req.body.html || !req.body.fallback_text){
        res.status(400).json({detail:"Please send valid notification body"})
    }

    try{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // console.log("Markup:",req.body.html)
    
    const msg = {
    to: req.body.to_email,
    from: FROM_EMAIL,
    subject: req.body.subject,
    text: req.body.fallback_text,
    html: req.body.html,
    };

    console.log("msg:",msg)

    if(process.env.SEND_EMAIL == 'true'){
        let response = await sgMail.send(msg);
        console.log("sendgrid response:",response)
        
        if(!response[0].statusCode=="202"){
            return res.status(500).json({detail:"Email was not sent properly", statuscode:response[0].statusCode,response:response})
        }
        return res.status(200).json({detail:"Email was sent properly", will_send:msg})
    }else{
        return res.status(200).json({detail:"Email not sent due to SEND_EMAIL env var", would_send:msg})
    }
    }catch(ex){

        // return res.status(500).json({Error:JSON.stringify(ex)})
        return res.status(500).json({Error:ex})

    }
});


module.exports=router;
