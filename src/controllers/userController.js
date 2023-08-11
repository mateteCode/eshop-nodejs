const service = require("../services/userService");

const index = async (req, res) => {
  res.send(await service.findAll());
};

const show = async (req, res) => {
  res.send(await service.findOne(req.params.id));
};

const store = async (req, res) => {
  res.send(await service.store(req.body));
};

module.exports = { index, show, store };
