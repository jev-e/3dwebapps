<?php

$choice = $_GET['brand'];	
    try{
        $dbConnection = new PDO('sqlite:../db/mobileapps.db','user','password',array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ));

        $statement = "SELECT * FROM branddata WHERE brand='" . $choice . "'";
        
        $query = $dbConnection->query($statement);

        $result = null;

        $i = 0;
        $data = $query->fetch();
        $result[$i]['brand'] = $data['brand'];
        $result[$i]['description'] = $data['description'];

        
    }
    catch (PDOException $e){
        print new Exception($e->getMessage());
    }

    header('Access-Control-Allow-Origin: *');
    echo json_encode($result);

?>
