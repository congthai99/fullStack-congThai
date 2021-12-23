import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // để lấy ảnh public , cấu hình đg link public
    app.set("view engine", "ejs"); // cấu hình view để render ra màn hình 
    app.set("views", "./src/views") // cấu hình đg link lấy file engine 
}
module.exports = configViewEngine;

// b1 : config