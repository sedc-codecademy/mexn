const Files = require('../storage/files');
const Note = require("../models/note");
const mongoWrapper = require("../mongo/databse-wrapper");
const files = new Files();

const rootDir = require("../helpers/path");
const storagePath = `${rootDir}/storage/notes.json`;

const getAll = async () => {
    try {
        // db wrapper
        return await mongoWrapper.getCollction('note');
    } catch (error) {
        console.log("error: ", error)
    }
}

const createNote = async ({
    title,
    description
}) => {
    const note = new Note(title, description);
    try {
        // const notes = JSON.parse(await getAll());
        // notes.push(note);
        // await files.createFile(storagePath, JSON.stringify(notes));
        const {
            ops: [n]
        } = await mongoWrapper.createDocument('note', note)
        console.log(n)
        return n;
    } catch (error) {
        console.log("error", error)
    }
}

const getNoteById = async id => {
    try {

        const note = await mongoWrapper.getById('note',id);
        console.log('note', note)
        return note;
    } catch (error) {
        console.log("error", error)
    }
}

const editNote = async ({condition,set}) => {
    try {
        const editedNote = await mongoWrapper.updateDocument('note', condition, set)
        console.log("editedNote", editedNote)

        return editedNote;
    } catch (error) {
        console.log("error", error)
    }
}

const deleteNote = async data => {
    try {
        const editedNote = await mongoWrapper.dropCollection('note', data)
        console.log("editedNote", editedNote)

        return editedNote;
    } catch (error) {
        console.log("error", error)
    }
}


module.exports = {
    getAll,
    createNote,
    getNoteById,
    editNote,
    deleteNote
}