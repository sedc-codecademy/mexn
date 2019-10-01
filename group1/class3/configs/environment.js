module.exports = {
	port: 3000,
	host: "0.0.0.0",
	staticFiles: 'public',
	userFiles: 'files',
	develop: {
		uri: `mongodb+srv://windoutadmin:Windout_345@windout-fdjj7.gcp.mongodb.net/test?retryWrites=true&w=majority`,
		connectionConfig: {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	}
}