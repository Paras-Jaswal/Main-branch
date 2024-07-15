<?php
//require('connection.php');

header('Content-Type: application/json');
 //Static data for testing purposes
$testData = [
["id" => 1, "name" => "Mutual Fund A", "broker" => "Broker 1", "amount" => 10000],
["id" => 2, "name" => "Mutual Fund B", "broker" => "Broker 2", "amount" => 20000],
["id" => 3, "name" => "Share X", "broker" => "Broker 1", "amount" => 15000],
["id" => 4, "name" => "Share Y", "broker" => "Broker 3", "amount" => 25000]];

echo json_encode(array("status" => "success", "data" => $testData));


//$apiUrl = "https://www.camsonline.com/api/your-endpoint"; // Replace with your actual endpoint
//$apiKey = "your_api_key"; // Replace with your actual API key if required

//$curl = curl_init();

//curl_setopt_array($curl, [
  //  CURLOPT_URL => $apiUrl,
   // CURLOPT_RETURNTRANSFER => true,
//CURLOPT_HTTPHEADER => [
//        "Authorization: Bearer $apiKey"
//    ],
//]);

//$response = curl_exec($curl);

//if ($response === FALSE) {
//    echo json_encode(array("status" => "error", "message" => "Error occurred: " . curl_error($curl)));
//} else {
//    $data = json_decode($response, true);

//    if ($data && isset($data['apiKey'])) { // Adjust 'your_data_key' based on the actual API response
//        echo json_encode(array("status" => "success", "data" => $data['your_data_key']));
//    } else {
//        echo json_encode(array("status" => "error", "message" => "No data available or incorrect response format"));
//    }
//}

//curl_close($curl);
//?>
