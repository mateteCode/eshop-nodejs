const express = require("express");
const router = express.Router();

const controller = require("../controllers/roleController");

const {
  roleValidationRules,
  roleValidate,
} = require("../middlewares/roleValidator");

router
  .get("/create", controller.create)
  .post("/", roleValidationRules, roleValidate, controller.store)

  .get("/edit/:id", controller.edit)
  .put("/", controller.update)

  .get("/", controller.index)
  .get("/:id", controller.show);

module.exports = router;
