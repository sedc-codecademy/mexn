const MongoClient = require('mongodb').MongoClient;
const config = require('../../configs/environment');

class MongoDBClient
{
	constructor()
	{
		this.client = new MongoClient(config.develop.uri, config.develop.connectionConfig);
	}
	
	async makeConnection()
	{
		return await this.client.connect((err, db) => {
			
			if(err)
			{
				console.log(err);
				process.db = false;
				return false;
			}
			
			console.log('MongodB connected');
			process.db = db.db("mexn");
		});
	}
	
	async closeConnection()
	{
		if(process.db)
		return await process.db.close();
		
		return false;
	}
	
	testConnection()
	{
		console.log('Test MongoDB connection\n', process.db)
	}
}

let mongo = new MongoDBClient();

(async function(){
	let connection = mongo.makeConnection();
}());

module.exports = mongo;