const {
    ObjectId
} = require('mongodb');

class MongoWrapper {

    async createNewCollection(collectionName, options) {

    }

    async createDocument(collectionName, data) {

        if (!process.db) {
            return false;
        }

        return await process.db.collection(collectionName).insertOne(data)
            .catch(err => console.log(error))
    }

    async getCollction(collectionName) {
        if (!process.db) return

        return await process.db.collection(collectionName).find().toArray();
    }

    async updateDocument(collectionName, condition, set) {
        if (!process.db) return

        console.log('condition', condition, 'set', set)
        return await process.db.collection(collectionName).updateOne(condition, set);
    }

    async updateDocuments(collectionName, condition, set) {
        if (!process.db) return

        return await process.db.collection(collectionName).updateMany(condition, set);
    }

    async dropCollection(collectionName, data) {
        if (!process.db) return

        return await process.db.collection(collectionName).deleteOne(data);
    }

    async getById(collectionName, id) {
        if (!process.db) return;

        return await process.db.collection(collectionName).findOne({
            _id: new ObjectId(id)
        });
    }
}

const mongoWrapper = new MongoWrapper();
module.exports = mongoWrapper;