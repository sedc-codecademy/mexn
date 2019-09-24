const express = require('express');
const router = express.Router();

router.get('/current', (req, res) => {
    if( req.session && req.session.user )
    {
        res.status(200).json(req.session.user);
    }
    else
    {
        res.status(403).json({});
    }
});


module.exports = router;