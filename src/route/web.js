import express from "express";
import homeController from "../controllers/homeComtroller"
let router = express.Router();

// viet tat ca cac router 
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);

    return app.use("/", router)
}

module.exports = initWebRoutes;



// b2 : đg link -> route