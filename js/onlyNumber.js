/**
 * ���l���͂̂݋����܂�
 */
function onlyNumber(evt)
{
	var evt = evt || window.event;
	var c = evt.keyCode;
	// 48�`57=0�`9�̃L�[�A96�`105=�e���L�[��0�`9�A8=�o�b�N�X�y�[�X�A9=�^�u�L�[�A32=�X�y�[�X�L�[�A37=�����L�[�A39=�E���L�[�A46=Delete�L�[�A18=Alt�L�[�A112�`123=F1�`F12�L�[�A
	if((48<=c && c<=57) || (96<=c && c<=105) || c==8 || c == 9 || c==32 || c == 37 || c == 39 || c == 46 || c == 18 || (112<=c && c<=123) ){
		return true;
	}
	return false;
}

 