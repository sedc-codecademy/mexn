const bcrypt = require('bcrypt');
const dbWrapper = require("../mongo/databse-wrapper");
const jwt = require('jsonwebtoken');

const hashPassword = async password => {
    const salt = await bcrypt.genSalt(10); // random string gashfgasjhasfg
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const findByEmail = async email => {
    try {
        const user = await dbWrapper.findDocument('user', {
            email
        });

        return user

    } catch (error) {

    }
}

const comparePasswords = async (hashPassword, password) => {
    const isMatch = await bcrypt.compare(password, hashPassword);
    return isMatch;
}

const generateToken = (email,userId) => {
    return jwt.sign({
        email,
        userId
    }, 'secret', {
        expiresIn: '1h'
    });
}

module.exports = {
    hashPassword,
    findByEmail,
    comparePasswords,
    generateToken
}