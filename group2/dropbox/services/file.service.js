const File = require('../models/file');
const dbWrapper = require("../mongo/databse-wrapper");
const {
    ObjectId
} = require('mongodb');

const getAllFiles = async userId => {
    const id = new ObjectId(userId)

    try {
        const files = await dbWrapper.findDocuments('files', {
            userId: id
        })
        return files;
    } catch (error) {

    }
}

const uploadFiles = async (files, userId) => {
    const id = new ObjectId(userId)
    const fileModels = toFileModels(files, id);
    try {
        const files = await dbWrapper.createNewDocuments('files', fileModels)
        return files;
    } catch (error) {
        console.log(error)
        return error
    }
}

const toFileModels = (files, userId) => {
    const mapedFiles = files.map(({
        originalname,
        mimetype,
        filename,
        path,
    }) => new File(originalname, mimetype, filename, path, userId));

    return mapedFiles;
}


module.exports = {
    getAllFiles,
    uploadFiles
}