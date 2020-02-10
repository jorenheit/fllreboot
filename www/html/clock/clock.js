/* 
   Used by clock.php to drive the clock.
*/

class Clock
{
    constructor(port)
    {
	this.socket = io("http://localhost:" + port);

	this.socket.on("start", () => {
	    this.startClock();
	});

	this.socket.on("stop", () => {
	    this.stopClock();
	});

	this.socket.on("test", () => {
	    alert("TEST");
	});


	this.running = false;
	
	document.getElementById("clock").innerHTML = "00:00:01";
    }

    startClock()
    {
	this.running = true;
	alert("Start!");
    }

    stopClock()
    {
	this.running = false;
	alert("Stop!");
    }
}

