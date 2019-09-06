const fs = require('fs');

class Files
{
	constructor()
	{
		
	}
	
	readFile(filePath)
	{
		return new Promise((resolve, reject) => {
			fs.readFile(filePath, (err, data) => {
	
				if(err)
				{
					reject(err);
					return false;
				}
				
				resolve(data.toString());
				return true;
			});
		})
	}
	
	createFile(filePath, data)
	{
		return new Promise((resolve, reject) => {
			fs.writeFile(filePath, data, (err) => {
	
				if(err)
				{
					reject(err);
					return false;
				}
				
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
					reject(err);
					return false;
				}
				
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
					reject(err);
					return false;
					
				}
				
				resolve();
				return true;
			});
		})
	}
}

let f = new Files();

f.readFile('package.json').then((data) => {
	
	f.createFile('package.json.copy', data).then(() => {
		console.log('Package json is copied successfully');
	})
});