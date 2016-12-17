<?php

 require 'db_config.php';

 $sql = "DELETE FROM tasks WHERE id = '". $_GET["idtask"] ."'";


 $result = $mysqli->query($sql);

if ($result) {
	echo json_encode(array("OK"));		
}else{
	echo json_encode(array("KO"));	
}

?>