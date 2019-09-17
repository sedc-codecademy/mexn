const http = require('http');

const data = [];


const server = http.createServer((req, res) => {
    const {
        url,
        method
    } = req;

    // const url = req.url
    console.log(req, "req")
    console.log(url, "url")
    if (url === '/mean') {

        res.setHeader('Content-Type', 'application/json');

        if (method === 'POST') {
            // fill data with req data
            let body = ''
            req.on('data', (chunk) => {
                console.log("chunk", chunk)
                body += chunk.toString();
                console.log("body",body)
            })

            req.on('end', () => {
                data.push(JSON.parse(body));
                res.end(body)
            })

            return
        }

        //get data
        res.end(JSON.stringify(data))
    }
    console.log('server listening on port 3000')
});

server.listen(3000)