
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productController = {

products: (req, res) => {
    let productCategory = products.filter(producto => producto.category == req.params.category);
    
// console.log(req.params.category);
    
    res.render('products', {productCategory, style: 'products.css'});
},

create: (req, res) =>{
    res.render('createForm', {style: 'register.css'});
}



};

// productController.products();

module.exports = productController;

