// EXPRESS
const express = require("express");
const app = express();
const path = require("path");
// GENERALES
app.use(express.static("public"));
app.set("view engine", "ejs");
// RUTAS
const rutaMain = require("./routes/main");
const rutaLogin = require("./routes/login")
const rutaProductCart = require('./routes/productCart')
const rutaProductDetail = require('./routes/productDetail');
const rutaRegister = require('./routes/register');

app.get("/", rutaMain);
app.get('/login', rutaLogin);
app.get('/productCart', rutaProductCart);
app.get('/productDetail', rutaProductDetail);
app.get('/register', rutaRegister);
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.get("/register", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/register.html"));
// });
// app.get("/productDetail", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/productDetail.html"));
// });
// app.get("/productCart", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views/productCart.html"));
// });






