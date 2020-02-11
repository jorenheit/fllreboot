const port = 3000;
const server = require("socket.io").listen(port);

function logger(msg) {
    var d = new Date();
    var timeString = ("0" + d.getHours()).slice(-2) + ":"
		   + ("0" + d.getMinutes()).slice(-2) + ":"
		   + ("0" + d.getSeconds()).slice(-2);
    console.log(timeString + "\t" + msg);
}

server.on("connection", (socket) => {
    logger("device connected");
    
    socket.on("start", (sender) => {
	logger("start signal received from " + sender + " -> forwarding to clients");
	socket.broadcast.emit("start", "server");
    });

    socket.on("stop", (sender) => {
	logger("stop signal received from " + sender + " -> forwarding to clients");
	socket.broadcast.emit("stop", "server");
    });
});

logger("Socket-server started") 

