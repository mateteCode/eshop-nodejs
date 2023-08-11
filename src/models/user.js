const { conn } = require("../config/conn");

const findAll = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM users");
    return rows;
  } catch (err) {
    throw err;
  } finally {
    conn.releaseConnection();
  }
};

const findOne = async (id) => {
  try {
    const [rows] = await conn.query("SELECT * FROM users WHERE ?", { id });
    return rows;
  } catch (err) {
    throw err;
  } finally {
    conn.releaseConnection();
  }
};

const store = async ({ email, password }) => {
  try {
    const [rows] = await conn.query("INSERT INTO users SET ?", {
      email,
      password,
    });
    return rows;
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") return "Registro duplicado";
    throw err;
  } finally {
    conn.releaseConnection();
  }
};

module.exports = { findAll, findOne, store };
