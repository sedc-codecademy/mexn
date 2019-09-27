class File {
    constructor(originalname, mimetype, filename, path) {
        this.originalname = originalname;
        this.mimetype = mimetype;
        this.filename = filename;
        this.path = path;
    }
}

module.exports = File;