require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");

const PORT = process.env.PORT || 3000;
//express.static();

app
  .use(express.urlencoded({ extended: false }))
  .use("/users", userRouter)
  .listen(PORT, () => {
    console.log(`Servidor funcionando en http://localshot:${PORT}`);
  });
