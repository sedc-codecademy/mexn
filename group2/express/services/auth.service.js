const userService = require('../services/user.service');
const User = require('../models/user');
const dbWrapper = require("../mongo/databse-wrapper")

const register = async (email,name,password) => {

        try {
            const hashPassword = await userService.hashPassword(password);
            const user = new User(email,hashPassword,name);
            console.log(user)
            const u = await dbWrapper.createNewDocument('user', user)
            return user
        } catch (error) {
            return error
        }

};

const login = async (req, res) => {

}

module.exports = {
    register,
    login
}