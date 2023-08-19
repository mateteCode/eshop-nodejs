require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./src/routes/userRouter");
const authRouter = require("./src/routes/authRouter");
const roleRouter = require("./src/routes/roleRouter");
const expressLayouts = require("express-ejs-layouts");
const session = require("cookie-session");
const { isLogin } = require("./src/middlewares/login");
const PORT = process.env.PORT || 3000;
//express.static();

app
  .use(session({ keys: ["S3cr3t01", "S3cr3t02"] }))
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
  .use("/users", isLogin, userRouter)
  .use("/roles", isLogin, roleRouter)
  .listen(PORT, () => {
    console.log(`Servidor funcionando en http://localshot:${PORT}`);
  });
