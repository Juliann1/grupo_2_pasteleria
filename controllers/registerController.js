const registerController = {
    register: (req, res) =>{
        res.render('register', {style: 'register.css'});
    }
}

module.exports = registerController;