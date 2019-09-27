const fileService = require("../../services/file.service");


const getAllFiles = async (_, res) => {
    // const notes = await noteService.getAll();
    // console.log(notes)
    res.status(200).send('OK')
}

const uploadFiles = async (req, res) => {
    const {
        files
    } = req;

    if (!files) {
        return res.status(400).send('Please send fils');
    }

    try {
        const {
            ops: response
        } = await fileService.uploadFiles(files);
        return res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send('Something went wrong')
    }
}

const deleteFile = async (req, res) => {
    console.log(req, "body")

    const {
        body
    } = req;
    console.log(body, "body")
    // const note = await noteService.deleteNote(body);

    res.status(200).send('OK');
}

const downloadFile = async (req, res) => {
    console.log(req, "body")

    const {
        body
    } = req;
    console.log(body, "body")
    // const note = await noteService.deleteNote(body);

    res.status(200).send('OK');
}

module.exports = {
    getAllFiles,
    uploadFiles,
    deleteFile,
    downloadFile
}