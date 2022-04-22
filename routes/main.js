const { Router } = require("express");
const router = Router();
const rutaUsers = require("./users")
const rutaProducts = require("./products");

                                 
router.use('/users', rutaUsers);
router.use('/', rutaProducts); 

module.exports = router;
