const config = require('./configs/environment.js');
const express = require('express');
const bodyParser = require('body-parser');
const headers = require('./interceptors/headers.interceptor');
const session = require('./interceptors/session.interceptor');

const mongodb = require('./modules/database/mongo.module');
const database = require('./modules/database/database.module');


const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');
const filesRoutes = require('./routes/files.routes');

const app = express();
app.use(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(config.staticFiles));
app.use(headers);

app.use('/auth', authRoutes);
app.use('/user', usersRoutes);
app.use('/file', filesRoutes);

app.get('/*', (req, res) => {
	res.status(404).json({});
});

app.listen(config.port || process.env.PORT, config.host, () => { console.log(`Server runs on ${config.port}`)})