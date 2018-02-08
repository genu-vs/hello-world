<!DOCTYPE>
<html>

<head>

<title>FACE YOUR FEAR</title>
<link rel="stylesheet" type="text/css" href="css/legend.css"/>
<link rel="icon" href="images/favicon.ico" type="favicon">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

</head>
<?php
$ser="den1.mysql6.gear.host";
$user="projectone";
$pass="Kh8gT-vPWis-";
$db="projectone";
$con=mysqli_connect($ser,$user,$pass,$db)
?>

<body>


<div id="header">
  

   <div id="weblogo">
<img src="image/logo.jpg">
   </div>
  <div id="icon">
   

   <ul id="navmenu" style="list-style: none;">
	    <li> <a href="index.php"><img id="hm" src="image/home1.jpg" ></br> home </li></a>
            <li> <a href='credits.html'> <img id="cre" src="image/credits2.jpg" > </br> credits</li> </a>
   </ul>
      
  </div>
  
  
  <?php
  $sql="SELECT views FROM one";
  $result = mysqli_query($con, $sql);
  $row = mysqli_fetch_assoc($result);
  ?>

</div>

<div id="center1">
<p><b><?php
echo "NUMBER OF VIEWS: ".$row["views"];
	?></p>
<div id="gamebox1">




	<div id="description"><img id="hhm" src="image/des.jpg"></div>
	<div id="starthere"><center><a href="goto.php"><img id="hm" src="image/start.jpg" ></a></center></div>
         
    


</div>
	
</div>


</body>

</html>
