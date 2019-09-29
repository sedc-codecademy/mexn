const fs = require('fs');

class Files
{
	constructor(){}
	
	readFile(filePath)
	{
		return new Promise((resolve, reject) => {
			fs.readFile(filePath, (err, data) => {
	
				if(err)
				{
					console.log(err);
					reject(err);
					return false;
				}
				
				console.log(data.toString());
				resolve(data.toString());
				return true;
			})
		})
	}
	
	createFile(filePath, data)
	{
		return new Promise((resolve, reject) => {
			
			fs.writeFile(filePath, data, (err) => {
					if(err)
					{
						console.log(err);
						reject(err);
						return false;
					}
					
					console.log('Written');
					resolve();
					return true;
			})
		});
	}
	
	updateFile(filePath, data)
	{
		return new Promise((resolve, reject) => {
			
			fs.appendFile(filePath, data, (err) => {
				if(err)
				{
					console.log(err);
					reject(err);
					return false;
				}
				
				console.log('Updated');
				resolve();
				return true;
			})
		})
	}
	
	deleteFile(filePath)
	{
		return new Promise((resolve, reject) => {
			fs.unlink(filePath, (err) => {
				if(err)
				{
					console.log(err);
					reject(err);
					return false;
				}
				
				console.log('Deleted');
				resolve();
				return true;
			})
		})
		
	}
}

module.exports = Files;