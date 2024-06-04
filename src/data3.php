<?php
sleep(3);
if (isset($_GET['user'])) {
    echo "Hello from data3.php, {$_GET['user']}!";
    exit;
}
echo "Hello from data3.php, NoName!";

?>
