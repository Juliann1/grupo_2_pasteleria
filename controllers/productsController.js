const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const { validationResult } = require("express-validator");
const db = require('../database/models')

const productsController = {
    products: (req, res) => {
        res.render("index");
    },
    categories: async (req, res) => {
        try {
            let categoryName = req.params.category
            let products = await db.Product.findAll({
                include: [{
                    association: 'category',
                    where: {
                        category: categoryName
                    }
                }],
            })

            let productCategory = products.map(product => {
                return {
                    id: product.id,
                    name: product.product_name,
                    img1: JSON.parse(product.images)[0],
                    precio: product.price
                }
            })

            res.status(200).render("products/products", {
                productCategory,
                style: "products.css",
            });
        } catch (err) {
            throw new Error(err)
        } 
    },
    create: (req, res) => {
        res.render("products/productCreate", { style: "register.css" });
    },
    createPOST: (req, res) => {
        let errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.render("products/productCreate", {
                style: "register.css",
                errors: errors.mapped(),
                oldData: req.body
            });
        }
       
        let files = req.files.map((e) => `/img/${e.filename}`);

        let newProduct = {
            ...req.body,
            img1: files[0],
            img2: files[1],
            img3: files[2],
        };

        newProduct.id = products.length + 1;
        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/products/" + newProduct.id);
    },
    productDetail: (req, res) => {
        let productId = req.params.id;
        let producto = products.find((producto) => producto.id == productId);
        res.render("products/productDetail", {
            style: "productDetail.css",
            producto: producto,
        });
    },
    productCart: (req, res) => {
        res.render("products/productCart.ejs", { style: "productCart.css" });
    },
    edit: (req, res) => {
        let productId = req.params.id;
        let producto = products.find((producto) => producto.id == productId);
        res.render("products/productEdit.ejs", {
            style: "register.css",
            producto: producto,
        });
    },
    editPUT: (req, res) => {
        let id = req.params.id;

        let firstImage = req.files.find((e) => e.fieldname == "img1");
        let secondImage = req.files.find((e) => e.fieldname == "img2");
        let thirdImage = req.files.find((e) => e.fieldname == "img3");

        products = products.map((p) => {
            if (p.id != id) {
                return p;
            }
            let product = {
                ...p,
                ...req.body,
                img1: firstImage ? `/img/${firstImage.filename}` : p.img1,
                img2: secondImage ? `/img/${secondImage.filename}` : p.img2,
                img3: thirdImage ? `/img/${thirdImage.filename}` : p.img3,
            };
            return product;
        });

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/products/" + id);
    },
    delete: (req, res) => {
        let id = req.params.id;
        products = products.filter((p) => p.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/products");
    },
};

module.exports = productsController;
