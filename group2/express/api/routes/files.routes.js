const express = require('express');
const router = express.Router();
const fileController = require("../controllers/file.controller");
const upload = require('../middlewares/multer.middleware');

router.get('/', fileController.getAllFiles);
router.post('/', upload.array('files'), fileController.uploadFiles);
router.delete('/:id', fileController.deleteFile);
router.post('/download', fileController.downloadFile);

module.exports = router;