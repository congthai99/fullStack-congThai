import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web.js";
require('dotenv').config(); // de chay file env 

let app = express(); // config app 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969; //port === undefined => port = 6969 
// lay port trong file env 

app.listen(port, () => {
    console.log('backend nodejs is running on port:' + port);
})


// b3 : file server
//query param : lay cac tham so phia client su dung