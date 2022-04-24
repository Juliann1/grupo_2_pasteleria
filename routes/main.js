const { Router } = require("express");
const router = Router();
const rutaUsers = require("./users")
const rutaProducts = require("./products");

router.get('/', (req, res) => res.render("index"))  
router.use('/users', rutaUsers);
router.use('/products', rutaProducts); 

module.exports = router;
