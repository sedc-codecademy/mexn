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
        
        if( ! collection )
        return false;
        
        return await collection.find(query).toArray().catch((e) => {
            console.log('findDocument error', e);
            return false;
        });
	}
	
	async insertOne(collectionName, record)
	{
	    if( ! record )
	    return false;
	    
        let collection = await this.getCollection(collectionName);
        
        if( ! collection )
        return false;
        
        return await collection.insertOne(record).catch((e) => {
            console.log('Document insert error', e);
            return false;
        })
	}
	
	async insertMany(collectionNAme, records)
	{
	    if( ! records )
	    return false;
	    
	    let collection = await this.getCollection(collectionName);
	    
	    if( ! collection )
	    return false;
	    
	    return await collection.insertMany(records).catch((e) => {
	        console.log('Documents insert error', e);
	        return false;
	    });
	}
	
	async updateOne(collectionName, where, records)
	{
	    if( ! records || ! where )
	    return false;
	    
	    let collection = await this.getCollection(collectionName);
	    
	    if( ! collection )
	    return false;
	    
	    return await collection.updateOne(where, {$set: records }).catch((e) => {
	        console.log('Update document error', e);
	        return false;
	    });
	}
	
	async deleteOne(collectionName, where)
	{
	    if( ! record )
	    return false;
	    
        let collection = await this.getCollection(collectionName);
        
        if( ! collection )
        return false;
        
        return await collection.deleteOne(where).catch((e) => {
            console.log('Document delete error', e);
            return false;
        })
	}
}

module.exports = Database;