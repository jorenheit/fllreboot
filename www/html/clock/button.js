class Button
{
    constructor(port, signal)
    {
	this.socket = io("http://localhost:" + port);
    }

    clicked(signal)
    {
	signal = signal.toLowerCase();
	if (signal != "start" && signal != "stop")
	    throw "Invalid button type";

	this.socket.emit(signal, "button.php");
    }
}
