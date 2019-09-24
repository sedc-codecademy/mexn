const session = require('express-session');
const uuidv4 = require('uuid/v4');

module.exports = session({
     secret: 'Mexn123',
     cookie: { secure: false, maxAge: 600000 * 6 }, //1hour
     resave: true,
     saveUninitialized: true,
     genid: () => { return uuidv4() } //'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
}); 