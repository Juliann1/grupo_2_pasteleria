
const loginController ={
    login: (req, res) =>{
        res.render('login', {style: 'login.css'});
    }
}


module.exports = loginController;