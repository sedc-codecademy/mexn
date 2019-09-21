const {
    MongoClient
} = require('mongodb');
const {connectionString} = require("../config/database")

class MongoDBCLient {
    constructor() {
        console.log(connectionString,"connection string")
        this.client = new MongoClient(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    async connection() {
        await this.client.connect((err, client) => {
            if(err)
            {
                console.log(err,"err")
                process.db = false;
                return;
            }
            console.log('Connect to DB')
            process.db = client.db("dropbox")
        })
    }

    async discconect()
    {
        if(process.db)
        {
            return await process.db.close()
        }

        return false;
    }
}

const mongo = new MongoDBCLient();
(()=>{
    mongo.connection();
})();

module.exports = mongo