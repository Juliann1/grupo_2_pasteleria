const User = require('../models/User');

const userLoggedMidleware = (req, res, next) => {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByEmail(emailInCookie)

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
        delete userFromCookie.password
        console.log(userFromCookie);
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }


    next();
}


module.exports = userLoggedMidleware;