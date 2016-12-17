<?php
require 'db_config.php';


$sql = "SELECT * FROM tasks  ORDER BY id DESC";

$result = $mysqli->query($sql);

while($row = $result->fetch_assoc()){

    $json[] = $row;

}

$data['tasks'] = $json;

echo json_encode($data);

?>