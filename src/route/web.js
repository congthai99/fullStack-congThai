import express from "express";
import homeController from "../controllers/homeComtroller"
let router = express.Router();

// viet tat ca cac router 
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', homeController.getAboutPage);



    return app.use("/", router)
}

module.exports = initWebRoutes;



// b2 : đg link -> route