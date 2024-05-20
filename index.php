<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <title>Document</title>
    <style>
        .error{
            color: red;
            padding-left: 10px;
        }
        .post-alert{
            display: none;
        }
        .post-create{
            display: block;
        }
    </style>
</head>
<body>
    <div class="container ">
        <div class="alert alert-success post-alert m-4" role="alert">
            Пост создан
        </div>
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">title</label>
                <input type="text" name="title" class="form-control title-input">
                <div class="error error-title"></div>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">text</label>
                <textarea class="form-control text-input" name="text"></textarea>
                <div class="error error-text"></div>
            </div>
            <div class="btn btn-primary btn_sub">Создать</div>
        </form>
    </div>
    <script src="assets/js/jq_file.js"></script>
    <script src="assets/js/jq_main.js"></script>
</body>
</html>
