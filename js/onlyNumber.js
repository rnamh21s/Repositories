/**
 * 数値入力のみ許可します
 */
function onlyNumber(evt)
{
	var evt = evt || window.event;
	var c = evt.keyCode;
	// 48～57=0～9のキー、96～105=テンキーの0～9、8=バックスペース、9=タブキー、32=スペースキー、37=左矢印キー、39=右矢印キー、46=Deleteキー、18=Altキー、112～123=F1～F12キー、
	if((48<=c && c<=57) || (96<=c && c<=105) || c==8 || c == 9 || c==32 || c == 37 || c == 39 || c == 46 || c == 18 || (112<=c && c<=123) ){
		return true;
	}
	return false;
}

 