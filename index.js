
require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const verificationRoutes = require('./routes/verification.js');
const notificationRoutes = require('./routes/notification');

// parse application/json
app.use(bodyParser.json())


////CORS
// if(process.env.ENV=="Development"){
//     app.use(cors())
//     console.log("Running app in development");
// }else{
//     var whitelist = ['https://fgrbudgetapp.surge.sh']
//     var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//         } else {
//         callback(new Error('Not allowed by CORS'))
//         }
//     }
//     }
//     app.use(cors(corsOptions))
//     console.log("Running app in production");
// }
app.use(cors())
//When developing on phone, temparaily comment the above cors section. if I keep doing then create a git rbanch for it


//Routes
app.use('/verification', verificationRoutes);
app.use('/notification', notificationRoutes);


// Start Express Server
let PORT = process.env.PORT || 5500;
app.listen(PORT,(err)=>{

    if(err){
        console.log("ERROR: ",err);
    }else{
        console.log(`Running on port ${PORT}`);
    }
});
