/* 
   Used by clock.php to drive the clock.
 */

const settings = {
    TIMER_INTERVAL: 200, // ms
    SERVER_URL: "http://localhost"
};

class Clock
{
    constructor(port){
	this.socket = io(settings.SERVER_URL + ":" + port);

	this.socket.on("start", (endTime) => {
	    if (!this.running)
		this.startClock(endTime);
	});

	this.socket.on("stop", () => {
	    if (this.running)
		this.stopClock();
	});

	this.running = false;
	this.setTime(0,0);
    }

    startClock(endTime){
	this.endTime = endTime;
	this.running = true;
	this.interval = setInterval(()=> {this.refreshTime()},
				    settings.TIMER_INTERVAL);
    }

    stopClock(){
	this.running = false;
	clearInterval(this.interval);
	this.setTime(0,0);
    }

    refreshTime() {
	if (!this.running)
	    return;

	var now = new Date();
	var diff = Math.ceil((this.endTime - now.getTime()) / 1000);

	if (diff < 0) {
	    this.stopClock();
	    return;
	}
	
	var sec = diff % 60;
	var min = Math.floor(diff / 60);
	this.setTime(min, sec);
    }
    
    stringify(num){
	// num can be a number of minutes or seconds
	if (num < 0 || num > 60)
	    num = 0;

	return ("0" + num.toString()).slice(-2);
    }
	
    setTime(min, sec){
	var timeStr = this.stringify(min) + ":" + this.stringify(sec);
	document.getElementById("clock").innerHTML = timeStr;
    }
}
