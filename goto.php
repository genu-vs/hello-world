<?php
$ser="den1.mysql6.gear.host";
$user="projectone";
$pass="Kh8gT-vPWis-";
$db="projectone";
$con=mysqli_connect($ser,$user,$pass,$db);
/*$sql='UPDATE one SET views=views+1 WHERE ID=1';
$v=mysqli_query($con,$sql);
if(! $v ) {
               die('Could not update data: ' . mysql_error());
            }*/
header("Location: question.html");


?>
