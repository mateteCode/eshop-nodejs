const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});
const uploadFile = multer({ storage });

router
  .get("/", controller.index)
  .get("/create", controller.create)
  .get("/:id", controller.show)
  .post("/", uploadFile.single("image"), controller.store);

module.exports = router;
