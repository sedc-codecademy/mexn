const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth.controller"); // authController
const {
    check
} = require('express-validator');
const userService = require("../../services/user.service")

router.post('/register', [
    // username must be an email
    check('email').isEmail()
    .custom(async email => {
        const user = await userService.findByEmail(email);
        if (user) {
            return Promise.reject('Email is already in use');
        }
    }),
    // password must be at least 5 chars long
    check('password').isLength({
        min: 5
    })
], authController.register);

router.post('/login', authController.login);

module.exports = router;