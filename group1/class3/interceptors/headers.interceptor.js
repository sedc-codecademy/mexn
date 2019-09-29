module.exports = (req, res, next) => {
	
	res.header('Content-Type', 'application/json');
	res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, withCredentials");
  res.header("Access-Control-Allow-Credentials", "true");
  
  if(req.method === "OPTIONS")
  {
    res.status(200).send({});
    return;
  }
  
	console.log(req.session.id, req.session.user);
	next();
}