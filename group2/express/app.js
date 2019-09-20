const mongo = require("./mongo/mongodb")
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const PORT = 3001;

const noteRouter = require('./api/routes/note.routes');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(noteRouter);

app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}`)
});