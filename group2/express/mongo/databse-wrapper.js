class MongoWrapper {


    async createDocument(collectionName, data) {

        if (!process.db) {
            return false;
        }

        return await process.db.collection(collectionName).insertOne(data)
            .catch(err => console.log(error))
    }
}

const mongoWrapper = new MongoWrapper();
module.exports = mongoWrapper;