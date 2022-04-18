const listaProductos = require ("../data/products.json");

const productDetailController = {
    productDetail: (req, res) =>{
        let producto = listaProductos.find((producto) => producto.id == req.params.idProducto);
        res.render('productDetail', {style: 'productDetail.css', producto: producto})
    }
};

module.exports = productDetailController;