const { getUnix } = require('../helpers/date');

class Note {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

module.exports = Note;