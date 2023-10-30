<?php
require_once 'DB.php';

$url = $_POST['url'];
$video_id = explode("watch?v=", $url)[1];
$video_id = explode("&", $video_id)[0];
$new_url = "https://www.youtube.com/embed/" . $video_id;

$arr = [
    'name' => $_POST['name'],
    'url' =>  $new_url,
    'date' => $_POST['date']
];

$target_dir = "uploads/";
$target_file = $target_dir.uniqid().basename($_FILES['photo']['name']);
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
$uploadOk = 1;

if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

// Check file size
if ($_FILES['photo']['size'] > 5000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// Allow certain file formats
if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
    echo "Sorry, only JPG, JPEG, and PNG files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file and insert data into database
} else {
    if (move_uploaded_file($_FILES['photo']['tmp_name'],$target_file)) {
        $arr['photo_path'] = $target_file;

        $data = new DB('localhost','yan_comick','root','');
        $data->getConnection();

        $data->insert('film_info',$arr);


    } else {
        echo "Sorry, error";
    }
}
