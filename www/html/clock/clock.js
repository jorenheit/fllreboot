/* 
   Used by clock.php to drive the clock.
 */

class Clock
{
    constructor(port){
	this.socket = io("http://localhost:" + port);

	this.socket.on("start", () => {
	    if (!this.running)
		this.startClock();
	});

	this.socket.on("stop", () => {
	    if (this.running)
		this.stopClock();
	});

	this.socket.on("test", () => {
	    alert("TEST");
	});

	this.running = false;
	this.setTime(2,30);
    }

    startClock(){
	alert("Start!");

	this.running = true;
    }

    stopClock(){
	alert("Stop!");

	this.running = false;
    }

    stringify(num){
	// num can be a number of minutes or seconds
	
	if (num < 0 || num > 60)
	    num = 0;

	var ret = num.toString();
	if (num < 10)
	    ret = "0" + ret;

	return ret;
    }
	
    setTime(min, sec){
	var timeStr = this.stringify(min) + ":" + this.stringify(sec);
	document.getElementById("clock").innerHTML = timeStr;
    }
}

