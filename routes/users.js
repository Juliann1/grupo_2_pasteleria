const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const registerMulterMiddleware = require("../middlewares/registerMulterMiddleware");
const validations = require('../middlewares/registerValidationMiddleware')

router.get("/login", usersController.login);
router.get("/register", usersController.register);
router.get("/:id", usersController.userDetail);
router.post(
    "/register",
    registerMulterMiddleware.single("profile_pic"),
    validations,
    usersController.registerPOST
);
router.get("/:id", usersController.login);
module.exports = router;
