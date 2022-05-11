const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const res = require("express/lib/response");
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersController = {
    login: (req, res) => {
        res.render("users/login", { style: "login.css" });
    },
    register: (req, res) => {
        res.render("users/register", { style: "register.css" });
    },
    registerPOST: (req, res) => {
        let profile_pic = `/img/users/${req.file.filename}`;

        let { password, password2 } = req.body;

        let encPassword = bcrypt.hashSync(password, 10);

        let newUser = {
            ...req.body,
            password: encPassword,
            profile_pic,
        };

        newUser.id = String(users.length + 1);
        users.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/users/" + newUser.id);
    },
    userDetail: (req, res) => {
        let userId = req.params.id;
        let usuario = users.find((usuario) => usuario.id == userId);
        res.render("users/userDetail", {
            style: "userDetail.css",
            usuario: usuario,
        });
    },
};

module.exports = usersController;
