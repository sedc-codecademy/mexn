module.exports = (req, res, next) => {
	
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION');
	
	console.log(req.session.id, req.session.user);
	next();
}