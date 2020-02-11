const settings = {
    PORT: 3000,
    COUNTDOWN: (0*60 + 3) * 1000 // countdowntime in ms -> (min * 60 + sec) * 1000ms
};

const server = require("socket.io").listen(settings.PORT);

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

	var now = new Date();
	var end = new Date(now.getTime() + settings.COUNTDOWN);

	socket.broadcast.emit("start", end.getTime());
    });

    socket.on("stop", (sender) => {
	logger("stop signal received from " + sender + " -> forwarding to clients");
	socket.broadcast.emit("stop", "server");
    });
});

logger("Socket-server started, listening on port " + settings.PORT) 

