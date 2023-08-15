const model = require("../models/user");
const bcryptjs = require("bcryptjs");

const findAll = async () => {
  return model.findAll();
};

const findOne = async (id) => {
  const rows = await model.findOne(id);
  if (rows.length > 0) return rows[0];
  return "No se encuentra el usuario.";
};

const store = async (body, file) => {
  body.password = await bcryptjs.hash(body.password, 8);
  const result = await model.store(body, file);
  if (result.affectedRows > 0) return "Registro creado.";
  return result;
};

module.exports = { findAll, findOne, store };
