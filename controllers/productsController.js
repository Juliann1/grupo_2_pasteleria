const listaProductos = require ("../data/products.json");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productController = {

product: (req, res) => {
    let producto = products.filter(producto => producto.category == req.params.categoriaProductos);

    res.render('products', {producto, style: 'productDetail.css'});
}  



}

module.exports = productController;