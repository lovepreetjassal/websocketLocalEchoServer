const WebSocket = require('ws');
const http = require('http');
const server = http.createServer();
const wss = new WebSocket.Server({ server });
server.listen(8080);


wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        let parsedJSON = JSON.parse(message);
        ws.send(JSON.stringify({
            test:"test"
        }));
    });

    ws.on("close", function (code, reason) {
    	console.log("closed");
    });

    
});

