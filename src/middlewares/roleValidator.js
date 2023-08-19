const { body, validationResult } = require("express-validator");

const roleValidationRules = [
  body("name")
    .notEmpty()
    .withMessage("Ingrese un nombre de Role que no sea vacio"),
];

const roleValidate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("roles/create", {
      value: req.body,
      errors: errors.array(),
    });
  }

  next();
};

module.exports = { roleValidationRules, roleValidate };
