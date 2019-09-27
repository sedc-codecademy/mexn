const File = require('../models/file');
const dbWrapper = require("../mongo/databse-wrapper");


const uploadFiles = async (files) => {
    const fileModels = toFileModels(files);
    try {
        const files = await dbWrapper.createNewDocuments('files', fileModels)
        return files;
    } catch (error) {
        console.log(error)
        return error
    }
}

const toFileModels = (files) => {
    const mapedFiles = files.map(({
        originalname,
        mimetype,
        filename,
        path
    }) => new File(originalname, mimetype, filename, path));

    return mapedFiles;
}


module.exports = {
    uploadFiles
}