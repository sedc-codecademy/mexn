const {
    MongoClient
} = require('mongodb');

class MongoDBCLient {
    constructor() {
        this.client = new MongoClient("mongodb+srv://deko:asdzxc123@sedc-aqrnc.mongodb.net/test?retryWrites=true&w=majority", {
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
            process.db = client.db("notes-demo")
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