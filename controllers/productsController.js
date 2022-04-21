
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {

        products: (req, res) => {
            let productCategory = products.filter(producto => producto.category == req.params.category);
            
            res.render('products/products', {productCategory, style: 'products.css'});
        },

        create: (req, res) =>{
            res.render('products/productCreate', {style: 'register.css'});
        },
        productDetail: (req, res) =>{
            let producto = products.find((producto) => producto.id == req.params.id);
            res.render('products/productDetail', {style: 'productDetail.css', producto: producto})
        },
        productCart: (req, res) =>{
            res.render('products/productCart.ejs', {style: 'productCart.css'});
        },
        edit: (req, res) =>{
            res.render('products/productEdit.ejs', {style: 'register.css'});
        }
}



module.exports = productsController;

