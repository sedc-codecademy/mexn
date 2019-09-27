const {
    getUnix
} = require('../helpers/date');

const config = {
    destination: function (req, file, cb) {
        cb(null, __dirname + '/storage/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + getUnix())
    }
}

module.exports = config;