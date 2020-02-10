const port = 3000;
const server = require("socket.io").listen(port);

server.on("connection", (socket) => {
    console.log("user connected");
    
    socket.on("start", () => {
	console.log("start signal received -> forwarding to clients");
	socket.broadcast.emit("start");
    });

    socket.on("stop", () => {
	console.log("stop signal received -> forwarding to clients");
	socket.broadcast.emit("stop");
    });
});


