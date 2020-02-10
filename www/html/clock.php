<!--
    clock.php
    Expects 1 URL-parameter: id
    The id denotes the idenity of the device that is loading
    this page. It is then used to determine the colorscheme.
-->

<?php
  include "style.php";
  $screenID = $_GET["id"];
  $bgCol = getBackgroundColor(screenID);
  $bgImg = getBackgroundImage(screenID);
  $fontCol = getFontColor(screenID);
  ?>

<html>
  <head>
    <title>Klok Test</title>
    <script src="clock.js"></script>
    <link rel="stylesheet" type="text/css" href="clock.css">
    <style>
      body { background-color: <?php echo $bgCol; ?>; }
      #clock { color: <?php echo $fontCol; ?>; }
    </style>
  </head>
  
  <body onload="clock()">
    <p id="clock"></p>
  </body>
</html>
