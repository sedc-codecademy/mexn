const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route');
const noteRoutes = require('./note.routes');
const filesRoutes = require('./files.routes');
const isAuth = require('../middlewares/auth.middleware');

router.use('/auth', authRoutes);
router.use('/note', noteRoutes);
router.use('/files', isAuth, filesRoutes);

module.exports = router;