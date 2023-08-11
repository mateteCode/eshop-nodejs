const service = require("../services/userService");

const index = async (req, res) => {
  //res.send(await service.findAll());
  const users = await service.findAll();
  res.render("users/users", { users });
};

const show = async (req, res) => {
  res.send(await service.findOne(req.params.id));
};

const store = async (req, res) => {
  res.send(await service.store(req.body));
};

const create = (req, res) => {
  res.render("users/create");
};

module.exports = { index, show, store, create };
