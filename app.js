// EXPRESS
const express = require("express");
const app = express();
const path = require("path");

// GENERALES
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// REQUIRE RUTAS
const rutaMain = require("./routes/main");
const rutaLogin = require("./routes/login")
const rutaProductCart = require('./routes/productCart')
const rutaProductDetail = require('./routes/productDetail');
const rutaRegister = require('./routes/register');
const rutaFormularioProducto = require("./routes/formularioProducto");
const rutaFormularioCambio = require("./routes/formularioCambio");
const rutaProducts = require("./routes/products");


// CONTROLLER RUTAS
app.get("/", rutaMain);
app.get('/login', rutaLogin);
app.get('/productCart', rutaProductCart);
app.use('/productDetail', rutaProductDetail);
app.get('/register', rutaRegister);
app.get("/formularioProducto", rutaFormularioProducto);
app.get("/formularioCambio", rutaFormularioCambio);
app.use('/products', rutaProducts)

// LOCAL HOST 
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







