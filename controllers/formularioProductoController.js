const formularioProductoController = {
    formularioProducto: (req, res) =>{
        res.render('formularioProducto', {style: 'register.css'});
    }
}

module.exports = formularioProductoController;