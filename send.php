<?php
header("Content-type: text/plain; charset=UTF-8");
if (isset($_POST['year']))
{
    //ここに何かしらの処理を書く（DB登録やファイルへの書き込みなど）
    print_r("request data is ".$_POST['year'].","
    						  .$_POST['season'].","
    						  .$_POST['timeLocation']);
}
else
{
    echo 'The parameter of "request" is not found.';
}
?>