<?php

$conn = new mysqli("localhost","root","","hotel_restaurant");

$name = $_POST['name'];
$phone = $_POST['phone'];
$guests = $_POST['guests'];
$date = $_POST['date'];
$time = $_POST['time'];

$tableQuery = "
SELECT * FROM tables
WHERE capacity >= $guests
AND id NOT IN(
SELECT table_id FROM reservations
WHERE reservation_date='$date'
AND reservation_time='$time'
)
ORDER BY capacity ASC
LIMIT 1
";

$result = $conn->query($tableQuery);

if($result->num_rows > 0){

$table = $result->fetch_assoc();
$table_id = $table['id'];

$conn->query("
INSERT INTO reservations
(name,phone,guests,table_id,reservation_date,reservation_time)
VALUES
('$name','$phone','$guests','$table_id','$date','$time')
");

echo "Reservation Confirmed";

}else{

echo "Sorry, no tables available for this time.";

}

$conn->close();

?>