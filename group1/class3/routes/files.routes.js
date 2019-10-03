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

router.get('/directory', async(req, res) => {
    
    let f = new fs();
    
    if(req.query && req.query.directory && req.session && req.session.user)
    {
      let dir = await f.getFolderByPath(req.query.directory);
      
      if(dir)
      res.status(200).json({"result": dir});
      else
      res.status(404).json({"result": "Not found"});
    }
    else if(! req.session || ! req.session.user)
    {
      res.status(403).json({"result": "Not authenticated"});
    }
    else
    {
      res.status(412).json({"result": "Bad request"});
    }
})

module.exports = router;
