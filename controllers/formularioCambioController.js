const formularioCambioController = {
    formularioCambio: (req, res) =>{
        res.render('formularioCambio', {style: 'register.css'});
    }
}

module.exports = formularioCambioController;