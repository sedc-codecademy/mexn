const express = require('express');
const router = express.Router();

router.get('/:dirPath/:fileName', (req, res) => {
	res.send("OK");
});

router.get('/all', (req, res) => {
	res.send("OK");
})

router.post('/', (req, res) => {
	res.send("OK");
});

router.put('/:dirPath/:fileName', (req, res) => {
	res.send("OK");
});

router.delete('/:dirPath/:fileName', (req, res) => {
	res.send("OK");
});

router.get('/:dirPath/:fileName', (req, res) => {
	res.send("OK");
});

module.exports = router;
