const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator')
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersController = {
    login: (req, res) => {
        res.render("users/login", { style: "login.css" });
    },
    loginProcess: (req, res) => {
        const errors = validationResult(req)
        let userToLogin = users.find(user => user.email == req.body.email);
        if (userToLogin) {
            let passwordMatch = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (passwordMatch) {
                req.session.userLogged = userToLogin
                delete req.session.userLogged.password  
                return res.redirect("/users/" + req.session.userLogged.id);
            }
           return res.render('users/login', { style: "login.css", errors: errors.mapped()});
        }
         return res.render('users/login', { style: "login.css", errors: errors.mapped()});
    },
    logout: (req, res) => {
        req.session.destroy();
        console.log(req.session);
        return res.redirect('/')
    },
    register: (req, res) => {
        res.render("users/register", { style: "register.css" });
    },
    registerPOST: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {  
            delete req.body.password
            delete req.body.password2
            
            return res.render('users/register', {
                style: "register.css",
                errors: errors.mapped(),    
                oldData: req.body
            })
        }

        let profile_pic = `/img/users/${req.file.filename}`;

        let encPassword = bcrypt.hashSync(req.body.password, 10);

        delete req.body.password2;

        let newUser = {
            id: users.length + 1,
            ...req.body,
            password: encPassword,
            profile_pic,
        };

        users.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/users/" + newUser.id);
    },
    userDetail: (req, res) => {
        // let userId = req.params.id;
        // let usuario = users.find((usuario) => usuario.id == userId);

        return  res.render("users/userDetail", {
            style: "userDetail.css",
            usuario: req.session.userLogged
        });
    },
};

module.exports = usersController;
