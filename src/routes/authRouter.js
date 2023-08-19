const express = require("express");
const router = express.Router();

const controller = require("../controllers/authController");

router
  .get("/login", controller.login)
  .post("/login", controller.postLogin)
  .get("/logout", controller.logout);

module.exports = router;
