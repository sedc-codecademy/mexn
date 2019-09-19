class Database
{
	constructor(){}
	
	async listCollection()
	{
		if( ! process.db)
		return false;
		
		return await process.db.listCollections().toArray();
	}
	
	async dropCollection(collectionName)
	{
		if( ! process.db )
		return false;
		
		return await process.db.collection(collectionName).drop().catch((e) => {
				console.log('Drop collection', e);
				return false;
			
		});
	}
	
	async getCollection(collectionName)
	{
		if( ! process.db )
		return false;
		
		return await process.db.collection(collectionName);
	}
	
	async createNewCollection(collectionName, options)
	{
		if( ! process.db )
		return false;
		
		return await process.db.createCollection(collectionName, options).catch((e) => {
			console.log('Create collection', e);
			return false;
		});
	}
	
	async findDocuments(collectionName, query)
	{
	  if( ! query || !Object.keys(query).length)
	  query = {};
	  
	  let collection = await this.getCollection(collectionName);
	  
	  return await collection.find(query).toArray().catch((e) => {
	    console.log('findDocument error', e);
	    return false;
	  });
	  
	}
	
}

module.exports = Database;