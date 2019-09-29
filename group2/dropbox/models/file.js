class File {
    constructor(originalname, mimetype, filename, path, userId) {
        this.originalname = originalname;
        this.mimetype = mimetype;
        this.filename = filename;
        this.path = path;
        this.userId = userId;
    }
}

module.exports = File;