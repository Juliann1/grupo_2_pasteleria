const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const productsController = require("../controllers/productsController");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../public/img/");
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        // Tenemos que ver que nombre le vamos a poner a las fotos guardadas
        const name = req.body.name.split(" ").join("-");
        const newFilename =
            name + "-" + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    },
});

let fileUpload = multer({ storage });

router.get("/", productsController.products);
router.get("/category/:category", productsController.categories);
router.get("/create", productsController.create);
router.post("/create", fileUpload.any(), productsController.createPOST);
router.get("/productCart", productsController.productCart);
router.get("/:id", productsController.productDetail);
router.get("/:id/edit", productsController.edit);
router.put("/:id", fileUpload.any(), productsController.editPUT);
router.delete("/:id", productsController.delete);

module.exports = router;
