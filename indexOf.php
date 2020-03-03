

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style8.css">
    <link rel="stylesheet" href="indexOf.php">
</head>
<body>
    <div class="logo-div">
        <div class="logo"></div>
        <div class="title">Red Stapler</div>
        <div class="sub-title">Beta</div>
        <form action="indexOf.php" method="POST">
            <div class="fields">
                <div class="username"><input  type="text" name="username" class="user-input" placeholder="username"></div>
                <div class="password"><input type="text" name="password" class="pass-input" placeholder="password"></div>

            </div>
            <button class="signin-button">LOG IN</button>
            <div class="link"><a href="#">Forgot password?</a></div>
         </form>
    </div>

    <?php 
$host="localhost";
$user="root";
$password="";
$db="loginform";

$connect = mysqli_connect($host, $user,$password,$db);

if(isset(['username'])) {
    $uname=$_POST['username'];
    
}
    




?>
</body>
</html>

