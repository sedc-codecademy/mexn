const express = require('express');
const router = express.Router();
const UsersController = require('../modules/users/users.controller');

router.post('/login', async (req, res) => {
     console.log(req.body);
     
     if(req.body)
     {
          let u = new UsersController();
          
          if(req.body)
          {
               let result = await u.getUserByCredentials(req.body);
               
               if(result.length)
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
     console.log(req.body);
     
     let u = new UsersController();
     
     if(req.body)
     {
          let result = await u.createNewUser(req.body);
          if(result.result)
          res.status(200).json({ result: result.result, lastId: insertedId});
          else
          res.status(403).json(result);
     }
     else
     {
          res.status(412).json({"error" : "Missig params"});
     }
})

module.exports = router;