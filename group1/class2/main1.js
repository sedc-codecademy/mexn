// const fs = require('./modules/filesystem/filesystem.controller');

// console.log(fs);

// const http = require('http');

// http.createServer((req, res) => {
	
	
// 	console.log(req.url);
	
// 	res.write('Hello Node!');
// 	res.end();
// }).listen(8080);

const express = require('express');
const app = express();
const environment = require('./configs/environment');

const fileRoutes = require('./routes/files.routes');
const resIntercept = require('./interceptors/headers.interceptor');

app.use(resIntercept);

app.use(express.static(environment.staticFiles));
app.use('/file', fileRoutes);

//allways at the end
app.use((req, res) => {
	res.status(403).send("Not allowed");
})

app.listen(environment.port, () => {
	console.log('Server is active', environment.port);
})

