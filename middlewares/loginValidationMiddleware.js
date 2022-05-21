const { body } = require("express-validator");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const loginValidations = [
    body("email")
    .notEmpty()
    .withMessage("Debe ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debe ingresar un email valido")
    .bail()
    .custom((value, { req }) => {
        let userToLogin = users.find(user => user.email == req.body.email);
        if (!userToLogin) {
            throw new Error("Este email no se encuentra registrado");
        }
        return true;
    }),
    

    body("password")
    .notEmpty()
    .withMessage("Debe ingresar una contraseña")
    .bail()
    .custom((value, { req }) => {
        let userToLogin = users.find(user => user.email == req.body.email);
        let passwordMatch = bcrypt.compareSync(req.body.password, userToLogin.password)
        if (!passwordMatch) {
            throw new Error("La contraseña es incorrecta");
        }
        return true;
    }),
    
];

module.exports = loginValidations;
