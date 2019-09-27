const mongo = require("./mongo/mongodb")
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const PORT = 3001;

const allRoutes = require('./api/routes/index');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(allRoutes);
// lcoalhost:3001/files

app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}`)
});