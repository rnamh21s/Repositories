$(document).ready(function()
{
	/**
	* 送信ボタンクリック
	*/
	$('#send').click(function()
	{
	//POSTメソッドで送るデータを定義します var data = {パラメータ名 : 値};
		var data = {year : $('#year').val(),
					season : $('#season').val(),
					timeLocation : $('#timeLocation').val()
					};
		/**
		 * Ajax通信メソッド
		 * @param type  : HTTP通信の種類
		 * @param url   : リクエスト送信先のURL
		 * @param data  : サーバに送信する値
		 */
		$.ajax({
			type: "POST",
			url: "send.php",
			data: data,
			/**
			 * Ajax通信が成功した場合に呼び出されるメソッド
			 */
			success: function(data, dataType)
			{
				//successのブロック内は、Ajax通信が成功した場合に呼び出される
				//PHPから返ってきたデータの表示
				alert(data);
			},
			/**
			 * Ajax通信が失敗した場合に呼び出されるメソッド
			 */
			error: function(XMLHttpRequest, textStatus, errorThrown)
			{
				//通常はここでtextStatusやerrorThrownの値を見て処理を切り分けるか、単純に通信に失敗した際の処理を記述します。
				//this;
				//thisは他のコールバック関数同様にAJAX通信時のオプションを示します。
				//エラーメッセージの表示
				alert('Error : ' + errorThrown);
			}
		});
		//サブミット後、ページをリロードしないようにする
		return false;
	});
});
