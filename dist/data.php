<?php
require_once 'DB.php';

$data = new DB('localhost','yan_comick','root','');
$data->getConnection();

$active_url = 1;
if (!isset($_POST['active_url'])){
    $active_url = 0;
}

$arr = [
    'city' => $_POST['city'],
    'data' => $_POST['date'],
    'colect_guest' => $_POST['colect_guest'],
    'start' => $_POST['start'],
    'place' => $_POST['place'],
    'buy_ticket' => $_POST['buy_ticket'],
    'active_url' => $active_url
];

$data->insert('tour_info',$arr);