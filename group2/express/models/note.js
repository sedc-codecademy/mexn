const { getUnix } = require('../helpers/date');

class Note {
    constructor(title, description) {
        this.id = getUnix();
        this.title = title;
        this.description = description;
    }
}

module.exports = Note;