require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./src/routes/userRouter");
const authRouter = require("./src/routes/authRouter");
const expressLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT || 3000;
//express.static();

app
  .set("view engine", "ejs")
  .set("views", "./src/views")
  .use(expressLayouts)
  .set("layout", "./layouts/public")
  .use(express.static("public"))
  .use(express.urlencoded({ extended: false }))
  .get("/", (req, res) => {
    res.render("index");
  })
  .use("/", authRouter)
  .use("/users", userRouter)
  .listen(PORT, () => {
    console.log(`Servidor funcionando en http://localshot:${PORT}`);
  });
