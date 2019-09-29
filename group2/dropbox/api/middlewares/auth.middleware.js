const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
    const header = req.get('Authorization');

    if (!header) {
        return res.status(401).send('Not authorized');
    };

    // 'Bearer token'
    // ['Bearer', 'token']
    const [, token] = header.split(' ');

    let decoded;
    try {
        decoded = jwt.verify(token, 'secret');
    } catch (error) {
        return res.status(401).send('Not valid token');
    }
    
    // {
    //     eden kup proertija
    // }

    req.userId = decoded.userId;
    next();
}

module.exports = isAuth;