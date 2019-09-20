const noteService = require("../../services/note.service");

const getAllNotes = async (_, res) => {
    const notes = await noteService.getAll();
    console.log(notes)
    res.status(200).send(notes)
}

const createNote = async (req, res) => {
    const { body } = req;
    const createdNote = await noteService.createNote(body);
    res.status(200).send(createdNote)
}

const getNoteById = async (req, res) => {
    const { params: { id } } = req;
    console.log("id:", id)
    const note = await noteService.getNoteById(id);

    res.status(200).send(note)
}

const editNote = async (req, res) => {
    const { params: { id }, body } = req;
    const note = await noteService.editNote(id, body);

    res.status(200).send(note);
}

module.exports = {
    getAllNotes,
    createNote,
    getNoteById,
    editNote
}