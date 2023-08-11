const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router
  .get("/", controller.index)
  .get("/create", controller.create)
  .get("/:id", controller.show)
  .post("/", controller.store);

module.exports = router;
