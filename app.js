const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3030;
const rutaMain = require("./routes/main");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", rutaMain);

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});

app.get("/productCart", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/productCart.html"));
});

app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/productDetail.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
