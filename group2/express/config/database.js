const dotenv = require('dotenv');
dotenv.config()
module.exports.connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.PASSWORD}@dropbox-gqlet.mongodb.net/test?retryWrites=true&w=majority`;