
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {
        products: (req, res) => {
            res.render("index");
        },
        categories: (req, res) => {
            let categoryId = req.params.category;
            let productCategory = products.filter(producto => producto.category == categoryId);
            console.log(products);
            res.render('products/products', {productCategory, style: 'products.css'});
        },
        create: (req, res) =>{
            res.render('products/productCreate', {style: 'register.css'});
        },
        createPOST: (req, res) =>{
            let newProduct = req.body;
            newProduct.id = products.length + 1;
            products.push(newProduct);
            fs.writeFileSync(productsFilePath, JSON.stringify(products));
            res.redirect('/products/' + newProduct.id);
        },
        productDetail: (req, res) =>{
            let productId = req.params.id;
            let producto = products.find((producto) => producto.id == productId);
            res.render('products/productDetail', {style: 'productDetail.css', producto: producto})
        },
        productCart: (req, res) =>{
            res.render('products/productCart.ejs', {style: 'productCart.css'});
        },
        edit: (req, res) =>{
            let productId = req.params.id;
            let producto = products.find((producto) => producto.id == productId);
            res.render('products/productEdit.ejs', {style: 'register.css', producto:producto});
        },
        editPUT: (req, res) =>{
            let id = req.params.id;
            let newProduct = req.body;
            products = products.map(p => {
                return (p.id == id ? newProduct : p);
            });
            fs.writeFileSync(productsFilePath, JSON.stringify(products));
            res.redirect('/products/' + id);  
        },
        delete: (req, res) =>{
            let id = req.params.id;
            products = products.filter(p => p.id != id);
            fs.writeFileSync(productsFilePath, JSON.stringify(products));
            res.redirect('/products');
        }
}

module.exports = productsController;

