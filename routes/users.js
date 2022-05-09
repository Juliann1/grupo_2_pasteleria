const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
const path = require("path");
const multer = require("multer");


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../public/img/user");
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

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', fileUpload.any(), usersController.registerPOST);

module.exports = router;