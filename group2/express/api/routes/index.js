const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route');
const noteRoutes = require('./note.routes');

router.use('/auth', authRoutes);
router.use('/note', noteRoutes);

module.exports = router;