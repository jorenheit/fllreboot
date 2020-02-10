<!--
    clock.php
    Expects 2 URL-parameter: id, port
    The id denotes the idenity of the device that is loading
    this page. It is then used to determine the colorscheme.
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
$server = "http://localhost:" . $port . "/socket.io/socket.io.js";
?>

<html>
  <head>
    <title>Klok Test</title>
    <script src=<?php echo $server; ?>></script>
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
  </body>
</html>
