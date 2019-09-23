const express = require('express');
const router = express.Router();
const UsersController = require('../modules/users/users.controller');
const FileSystemController = require('../modules/filesystem/filesystem.controller');

router.post('/login', async (req, res) => {
    
     if(req.body)
     {
          let u = new UsersController();
          
          if(req.body)
          {
               let result = await u.getUserByCredentials(req.body);
               
               if(result.hasOwnProperty("email"))
               {
                    req.session.user = result;
                    res.status(200).json({ result: result});
               }
               else
               {
                    req.session.user = false;
                    res.status(403).json(result);
               }
                    
          }
     }
     else
     {
          res.status(412).json({"error" : "Missig params"});
     }
})

router.post('/register', async (req, res) => {
     
     let u = new UsersController();
     let fs = new FileSystemController();

     if(req.body)
     {
        let result = await u.createNewUser(req.body);

        if(result.result)
        {
            await fs.createNewDir(`./files/${result.insertedId}`);
            res.status(200).json({ result: result.result, lastId: result.insertedId});
        }
        else
        res.status(403).json(result);
     }
     else
     {
          res.status(412).json({"error" : "Missig params"});
     }
});

router.get('/logout', (req, res) => {

    if(req.session && req.session.user)
    res.status(200).json({"result":"Logout was successfull"});

    res.status(200).json({"result":"No active session for this machine"});
})

module.exports = router;