const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
const path = require("path");
const multer = require("multer");


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../public/img/users");
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        // Tenemos que ver que nombre le vamos a poner a las fotos guardadas
        const name = req.body.nombreApellido.split(" ").join("-");
        const newFilename =
            name + "-" + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    },
});

let fileUpload = multer({ storage });

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get("/:id", usersController.userDetail);
router.post('/register', fileUpload.any(), usersController.registerPOST);
router.get("/:id", usersController.login);
module.exports = router;