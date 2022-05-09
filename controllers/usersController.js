const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');
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
        let files = req.files.map((e) => `/img/${e.filename}`);

        let encPassword = bcrypt.hashSync(req.body.password, 10);

        let newUser = {
            ...req.body,
            profile_pic: files[0]
        };

        newUser.password = encPassword;

        newUser.id = String(users.length + 1);
        users.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect("/users/");
    }
};


module.exports = usersController;