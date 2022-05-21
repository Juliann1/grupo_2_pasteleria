const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const registerMulterMiddleware = require("../middlewares/registerMulterMiddleware");
const validations = require('../middlewares/registerValidationMiddleware')
const loginValidations = require('../middlewares/loginValidationMiddleware');

router.get("/login", usersController.login);
router.post("/login",loginValidations, usersController.loginProcess);
router.get("/register", usersController.register);
router.get("/:id", usersController.userDetail);
router.post("/register", registerMulterMiddleware.single("profile_pic"), validations, usersController.registerPOST);
router.get("/:id", usersController.login);
module.exports = router;
