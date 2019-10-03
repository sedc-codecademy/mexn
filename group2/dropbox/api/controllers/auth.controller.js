const {
    validationResult
} = require('express-validator');
const authService = require('../../services/auth.service');
const userService = require('../../services/user.service');

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(422).send(errors)
    }

    const {
        body: {
            email,
            name,
            password
        }
    } = req;
    try {
        const user = await authService.register(email,
            name,
            password);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send('something went wrong');
    }
};

const login = async (req, res) => {
    const {
        body: {
            email,
            password
        }
    } = req;

    try {
        const user = await userService.findByEmail(email);
        if (!user) {
            return res.status(401).send('User with this email not exist')
        }
        const isMatch = await userService.comparePasswords(user.password, password)

        if (!isMatch) {
            return res.status(401).send('Invalid password');
        };

        const token = await userService.generateToken(email, user._id.toString())
        res.status(200).send({
            email,
            token
        });
    } catch (error) {

    }
}

module.exports = {
    register,
    login
}