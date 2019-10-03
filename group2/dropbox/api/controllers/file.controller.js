const fileService = require("../../services/file.service");
const path = require('path');

const getAllFiles = async (req, res) => {
    try {
        const {
            userId
        } = req;
        const files = await fileService.getAllFiles(userId);
        console.log('files: ', files)
        res.status(200).send(files)

    } catch (error) {
        console.log(error)
        res.status(500).send(error,'Faield')
    }
}

const uploadFiles = async (req, res) => {
    const {
        files,
        userId
    } = req;

    if (!files) {
        return res.status(400).send('Please send fils');
    }
    console.log('files:',files)
    try {
        const {
            ops: response
        } = await fileService.uploadFiles(files, userId);
        return res.status(200).send(response)
    } catch (error) {
        res.status(500).send('Something went wrong')
    }
}

const deleteFile = async (req, res) => {

    const {
        body
    } = req;

    res.status(200).send('OK');
}

const downloadFile = async (req, res) => {

    const {
        body: {
            filename
        }
    } = req;

    if (!filename) {
        return res.status(400).send('Missing body')
    }

    const filePath = path.join(__dirname, "../../storage/uploads/" + filename)

    res.download(filePath)
}

module.exports = {
    getAllFiles,
    uploadFiles,
    deleteFile,
    downloadFile
}