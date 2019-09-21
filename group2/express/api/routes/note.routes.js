const express = require('express');
const router = express.Router();
const noteController = require("../controllers/note.controller");

router.get('/', noteController.getAllNotes);
router.get('/:id', noteController.getNoteById);
router.post('/', noteController.createNote);
router.put('/', noteController.editNote);
router.put('/deleteNote', noteController.deleteNote);

module.exports = router;