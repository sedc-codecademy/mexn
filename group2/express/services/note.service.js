const Files = require('../storage/files');
const Note = require("../models/note");

const files = new Files();

const rootDir = require("../helpers/path");
const storagePath = `${rootDir}/storage/notes.json`;

const getAll = async () => {
    try {
        return await files.readFile(storagePath)
    } catch (error) {
        console.log("error: ", error)
    }
}

const createNote = async ({ title, description }) => {
    const note = new Note(title, description);
    try {
        const notes = JSON.parse(await getAll());
        notes.push(note);
        await files.createFile(storagePath, JSON.stringify(notes));
        return note;
    } catch (error) {
        console.log("error", error)
    }
}

const getNoteById = async id => {
    try {
        const notes = JSON.parse(await getAll());
        const note = notes.find(note => note.id === id);
        return note;
    } catch (error) {
        console.log("error", error)
    }
}

const editNote = async (id, noteProps) => {
    try {
        const notes = JSON.parse(await getAll());
        const index = notes.findIndex(note => note.id === id);
        notes[index] = { ...notes[index], ...noteProps }

        await files.createFile(storagePath, JSON.stringify(notes));

        return notes[index];
        
    } catch (error) {
        console.log("error", error)
    }
}


module.exports = {
    getAll,
    createNote,
    getNoteById,
    editNote
}