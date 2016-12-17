<?php

require 'db_config.php';

$sql = "INSERT INTO tasks (description) VALUES ('".$_GET['description']."');";

 $result = $mysqli->query($sql);

if ($result) {
	echo json_encode(array("OK"));		
}else{
	echo json_encode(array("KO"));	
}

?>