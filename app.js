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










// CONTROLLER RUTAS
app.use("/", rutaMain);








// LOCAL HOST 
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







