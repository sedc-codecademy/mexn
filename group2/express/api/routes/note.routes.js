const express = require('express');
const router = express.Router();
const noteController = require("../controllers/note.controller");

router.get('/note', noteController.getAllNotes);
router.get('/note/:id', noteController.getNoteById);
router.post('/note', noteController.createNote);
router.put('/note', noteController.editNote);
router.put('/deleteNote', noteController.deleteNote);

module.exports = router;