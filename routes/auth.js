// const express = require('express');
// const router = express.Router();
// // const jwt = require("jsonwebtoken");
// const axios = require("axios");

// //This is the dynamic auth url
// const baseUrl="http://fgr_dynamic_auth_web_1:4000/";
// // const baseUrl="http://localhost:4000/";

// router.post("/register", async (req,res)=>{
//     let email = req.body.email || null
//     let password = req.body.password || null
//     let password2 = req.body.password2 || null
    
//     try{
//         let response = await axios.post(baseUrl+"register", {email, password, password2}, getAxiosConfig() );

//         return res.status(response.status).send(response.data)
//     }catch(ex){
        
//         // console.log("ERROR: ", String(ex))
//         // console.log("ERROR: ", ex.response.data)
        
//         return res.status(400).json({detail:ex.response.data})
//         // return res.status(500).send("Error: ", JSON.stringify(ex))
//     }
// });

// router.post("/login", async (req,res)=>{
//     let email = req.body.email || null
//     let password = req.body.password || null
    
//     try{
//         let response = await axios.post(baseUrl+"auth/login", {email, password}, getAxiosConfig() );

//         return res.status(response.status).send(response.data)
//     }catch(ex){
//         console.log("ERROR: ", String(ex))
//         return res.status(400).json({detail:ex.response.data})
//         // return res.status(500).send("Error: ", JSON.stringify(ex))
//     }
// });

// module.exports=router;

// function getAxiosConfig(token=null){

//     //make change so that if token is null the headers do not include x-auth-token with null token
//     let axiosConfig = {
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//             "Access-Control-Allow-Origin": "*",
//             "x-auth-token":token
//         }
//     };
//     return axiosConfig;
// }