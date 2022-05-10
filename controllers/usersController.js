const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');
const res = require("express/lib/response");
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersController ={
    login: (req, res) => {
        res.render('users/login', {style: 'login.css'});
    },
    register: (req, res) => {
        res.render('users/register', {style: 'register.css'});
    },
    registerPOST: (req, res) =>{
        let files = req.files.map((e) => `/img/users/${e.filename}`);

        let encPassword = bcrypt.hashSync(req.body.password, 10);
        let checkPassword = bcrypt.compareSync(req.body.password2, req.body.password);
        console.log(req.body.password);
        console.log(req.body.password2);
        console.log(encPassword);
        console.log(checkPassword);
        let newUser = {
            ...req.body,
            profile_pic: files[0]
        };

        newUser.password = encPassword;
        newUser.password2 = checkPassword;

        newUser.id = String(users.length + 1);
        users.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect("/users/" + newUser.id);
    },
    userDetail: (req, res) => {
        let userId = req.params.id;
        let usuario = users.find((usuario) => usuario.id == userId);
        res.render("users/userDetail", {
            style: "userDetail.css",
            usuario: usuario,
        });
    }
};


module.exports = usersController;