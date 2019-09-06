//console.log('Hello from node');

//console.log(process);

//console.log(process.argv);

const fs = require('fs');

// fs.readFile('package.json', (err, data) => {
	
// 	if(err)
// 	{
// 		console.log(err);
// 		return false;
// 	}
	
// 	console.log(data.toString());
// })

// fs.appendFile('newAppendedFile.txt', 'This is appended content', (err) => {
// 		if(err)
// 		{
// 			console.log(err);
// 			return false;
// 		}
		
// 		console.log('Saved');
// 		return true;
// })

// fs.open('newAppendedFile2.txt', 'w', (err, file) => {
// 	if(err)
// 	{
// 		console.log(err);
// 		return false;
// 	}
	
// 	console.log('Written', file);
// })

// fs.writeFile('newAppendedFile2.txt', 'Hello content', (err) => {
// 		if(err)
// 		{
// 			console.log(err);
// 			return false;
// 		}
		
// 		console.log('Written');
// })

// fs.unlink('newAppendedFile2.txt', (err) => {
// 	if(err)
// 	{
// 		console.log(err);
// 		return false;
// 	}
	
// 	console.log('Deleted');
// })

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

let files = new Files();
let c = 0;

let i = setInterval(() => {
	
	let date = new Date();
	files.createFile(`${date.getTime()}.txt`, `\\api\\getUser\\${c}`).then(() => {
		console.log('File Written');
	});
	
	c++;
	
	if(c > 30)
	clearInterval(i);
	
}, 1000)




