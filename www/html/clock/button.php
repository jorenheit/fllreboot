
<?php

$port = $_GET["port"];
if (!isset($port)) {
    $port = 3000;
}
$server = "http://localhost:" . $port . "/socket.io/socket.io.js";
?>

<html>
  <head>
    <title>Button Test</title>
    <script src=<?php echo $server; ?>></script>
    <script src="button.js"></script>
    <link rel="stylesheet" type="text/css" href="button.css">
  </head>
  
  <body>
    <script>
      const port = <?php echo $port; ?>;
      var button = new Button(port);
    </script>

    <center>
      <p><button type="button" onclick="button.clicked('start')">Start</button></p>
      <p><button type="button" onclick="button.clicked('stop')">Stop</button></p>
    </center>
  </body>
</html>
