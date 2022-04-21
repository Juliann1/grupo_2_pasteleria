
const usersController ={
    login: (req, res) =>{
        res.render('users/login', {style: 'login.css'});
    },
    register: (req, res) =>{
        res.render('users/register', {style: 'register.css'});
    }
};


module.exports = usersController;