const { conn } = require("../config/conn");
const bcryptjs = require("bcryptjs");

const login = (req, res) => {
  res.render("auth/login", { layout: "layouts/auth" });
};

const logout = (req, res) => {
  req.session = null;
  res.redirect("/");
};

const postLogin = async (req, res) => {
  const [rows] = await conn.query("SELECT * FROM users WHERE email LIKE ?", [
    req.body.email,
  ]);
  if (rows.length == 0) {
    res.render("auth/login", {
      values: req.body,
      errors: [{ msg: "El correo y/o contraseña son incorrectos" }],
      layout: "layouts/auth",
    });
  }
  if (!bcryptjs.compareSync(req.body.password, rows[0].password)) {
    res.render("auth/login", {
      values: req.body,
      errors: [{ msg: "El correo y/o contraseña son incorrectos" }],
      layout: "layouts/auth",
    });
  } else {
    //res.send("OK");
    req.session.userId = rows[0].id;
    res.redirect("/");
  }
};

module.exports = { login, postLogin, logout };
