const express = require('express');
const router = express.Router();

const fs = require('../modules/filesystem/filesystem.controller');

router.get('/byuser', async (req, res) => {

    let f = new fs();

    if(req.session && req.session.user)
    {
        let dir = await f.getUserRootFolder(req.session.user._id);

        if(dir)
        res.status(200).json({"result": dir});
        else
        res.status(404).json({"result": "Dir not exist"});
    }
    else
    res.status(403).json({"result": "Not authenticated"});

});

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
