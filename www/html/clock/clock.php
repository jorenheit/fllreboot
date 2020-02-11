<!--
     clock.php
     Expects 2 URL-parameters: id, port
   - "id" denotes the idenity of the device that is loading
     this page. It is then used to determine the colorscheme.
   - "port" is the port of the socket-server it needs to
     connect to.
-->

<?php
include "style.php";

$screenID = $_GET["id"];
if (!isset($screenID)) {
    $screenID = 0;
}

$port = $_GET["port"];
if (!isset($port)) {
    $port = 3000;
}

$bgCol = getBackgroundColor(screenID);
$bgImg = getBackgroundImage(screenID);
$fontCol = getFontColor(screenID);
$socketio = "http://localhost:" . $port . "/socket.io/socket.io.js";
?>

<html>
    <head>
	<title>Klok</title>
	<script src=<?php echo $socketio; ?>></script>
	<script src="clock.js"></script>
	<link rel="stylesheet" type="text/css" href="clock.css">
	<style>
	 body { background-color: <?php echo $bgCol; ?>; }
	 #clock { color: <?php echo $fontCol; ?>; }
	</style>
    </head>
    
    <body>
	<p id="clock"></p>
	<script>
	 var clockObject = new Clock(<?php echo $port; ?>);
	</script>

	<p id="debug"></p>
    </body>
</html>
