const service = require("../services/userService");

const index = async (req, res) => {
  //res.send(await service.findAll());
  const users = await service.findAll();
  res.render("users", { users });
};

const show = async (req, res) => {
  res.send(await service.findOne(req.params.id));
};

const store = async (req, res) => {
  //console.log(req.file);
  res.send(await service.store(req.body, req.file ? req.file.filename : null));
  //res.redirect("/users")
};

const create = (req, res) => {
  res.render("users/create", /*{
    value: { email: "" },
    errors: [],
  }*/);
};

module.exports = { index, show, store, create };
