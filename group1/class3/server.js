const config = require('./configs/environment.js');
const express = require('express');
const bodyParser = require('body-parser');
const headers = require('./interceptors/headers.interceptor');

const mongodb = require('./modules/database/mongo.module');
const database = require('./modules/database/database.module');

let db = new database();

setTimeout( async () => {
	let collections = await db.insertOne('users', {a: 1, b:2 });
	console.log(collections);
}, 3000)

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(config.staticFiles));
app.use(headers);

app.get('/*', (req, res) => {
	res.status(404).json({});
});

app.listen(config.port || process.env.PORT, () => { console.log(`Server runs on ${config.port}`)})