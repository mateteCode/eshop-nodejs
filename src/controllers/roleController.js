const service = require("../services/roleService");

const index = async (req, res) => {
  const roles = await service.findAll();
  res.render("roles", { roles });
};

const show = async (req, res) => {
  res.send(await service.findOne(req.params.id));
};

const store = async (req, res) => {
  res.send(await service.store(req.body));
};

const create = (req, res) => {
  res.render(
    "roles/create" /*{
    value: { email: "" },
    errors: [],
  }*/
  );
};

const edit = async (req, res) => {
  const role = await service.findOne(req.params.id);
  res.render("roles/edit", { value: role });
};

const update = () => {};

module.exports = { index, show, store, create, edit, update };
