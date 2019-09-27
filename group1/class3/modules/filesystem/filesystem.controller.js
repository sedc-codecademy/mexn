

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
    
    async getUserRootFolder(userId)
    {
        let path = `./files/${userId.toString()}`;

        let dir = await fs.existsSync(path)
        if( ! dir )
        return false;

        let filesList = await fs.readdirSync(path, (err, files) => {
            
            if (err) {
                console.log('Scan dir: ', err);
                return false;
            }

            return files;
        });

        console.log(filesList);
        return filesList;
    }

    async createNewDir(path)
    {
        return await fs.mkdirSync(path);
    }
}

module.exports = Files;




