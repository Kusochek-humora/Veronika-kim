<?php

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div class="wrapper">
        <aside class="panel">

        </aside>
    </div>

    <form method="post" action="data.php">
        <label for="city">City:</label>
        <input type="text" id="city" name="city"><br><br>

        <label for="date">Date:</label>
        <input type="date" id="date" name="date"><br><br>

        <label for="colect_guest">Collect of guests:</label>
        <input type="time" id="colect_guest" name="colect_guest"><br><br>

        <label for="start">Start time:</label>
        <input type="time" id="start" name="start"><br><br>

        <label for="place">Place:</label>
        <input type="text" id="place" name="place"><br><br>

        <label for="buy_ticket">Buy ticket:</label>
        <input type="text" id="buy_ticket" name="buy_ticket"><br><br>

        <label for="active_url">Active url:</label>
        <input type="checkbox" id="active_url" name="active_url"><br><br>

        <input type="submit" value="Submit">
    </form>

    <form style="padding-top: 30px;" method="POST" action="data_film.php" enctype="multipart/form-data">
        <label for="date-film">Дата:</label>
        <input type="date" name="date" id="date"><br>

        <label for="name-film">Имя:</label>
        <input type="text" name="name" id="name"><br>

        <label for="url">URL:</label>
        <input type="url" name="url" id="url"><br>

        <label for="photo">Фото:</label>
        <input type="file" name="photo" id="photo"><br>

        <input type="submit" value="Отправить">
    </form>
</body>

</html>