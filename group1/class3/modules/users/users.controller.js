const database = require('../database/database.module');
const sha256 = require('crypto-js/sha256');

class UsersController {
    constructor() {
        this.db = new database();
    }

    async getUserByCredentials(params) 
    {
        if (!params && !params.email && !params.password)
            return false;

        let userExist = await this.db.findDocuments("users",
            {
                email: params.email,
                password: sha256(params.password).toString()

            });

        if (userExist.length) 
        {
            delete userExist[0].password;
            return userExist[0];
        }

        return { "result": "Usernanme or password not match" };

    }

    async createNewUser(params) 
    {
        if (!params && !params.email && !params.password)
            return false;

        let userExist = await this.db.findDocuments("users", {
                email: params.email
            });

        if (!userExist || !userExist.length)
            return await this.db.insertOne("users", {
                    email: params.email,
                    password: sha256(params.password).toString()
            });
        else
            return { "result": "Username or password not match" };

    }
}

module.exports = UsersController;