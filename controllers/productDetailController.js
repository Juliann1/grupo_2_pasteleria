const {listaProductos} = require ("../models/data");

const productDetailController = {
    productDetail: (req, res) =>{
        let producto = listaProductos.find((producto) => producto.id == 2);
        res.render('productDetail', {style: 'productDetail.css', producto: producto})
    }
};

module.exports = productDetailController;