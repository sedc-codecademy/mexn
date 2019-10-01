const {
    getUnix
} = require('../helpers/date');

const config = {
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../storage/uploads')
    },
    filename: function (req, files, cb) {
        cb(null, getUnix() + '-' + files.originalname)
    }
}
// 1234 dejan.png
module.exports = config;