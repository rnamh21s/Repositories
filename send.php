<?php
header("Content-type: text/plain; charset=UTF-8");
if (isset($_POST['year']))
{
    //�����ɉ�������̏����������iDB�o�^��t�@�C���ւ̏������݂Ȃǁj
    print_r("request data is ".$_POST['year'].","
    						  .$_POST['season'].","
    						  .$_POST['timeLocation']);
}
else
{
    echo 'The parameter of "request" is not found.';
}
?>