const multer = require('multer')
const config = require('../../config/multer.config');

const storage = multer.diskStorage(config);

const upload = multer({storage})



module.exports = upload;