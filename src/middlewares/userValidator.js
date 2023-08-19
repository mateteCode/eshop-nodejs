const { body, validationResult } = require("express-validator");

const userValidationRules = [
  body("email")
    .isEmail()
    .withMessage("Ingrese una dirección de correo electrónico válida"),
  body("password")
    //.isLength({ min: 6 })
    //.withMessage("La contraseña debe tener al menos 6 caracteres"),
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage("Debe elegir una contraseña más fuerte"),
];

const userValidate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //return res.status(422).json({ errors: errors.array() });
    console.log(req.body);
    return res.render("users/create", {
      value: req.body,
      errors: errors.array(),
    });
  }

  next();
};

module.exports = { userValidationRules, userValidate };
