$(document).ready(function()
{
	/**
	* ���M�{�^���N���b�N
	*/
	$('#send').click(function()
	{
	//POST���\�b�h�ő���f�[�^���`���܂� var data = {�p�����[�^�� : �l};
		var data = {year : $('#year').val(),
					season : $('#season').val(),
					timeLocation : $('#timeLocation').val()
					};
		/**
		 * Ajax�ʐM���\�b�h
		 * @param type  : HTTP�ʐM�̎��
		 * @param url   : ���N�G�X�g���M���URL
		 * @param data  : �T�[�o�ɑ��M����l
		 */
		$.ajax({
			type: "POST",
			url: "send.php",
			data: data,
			/**
			 * Ajax�ʐM�����������ꍇ�ɌĂяo����郁�\�b�h
			 */
			success: function(data, dataType)
			{
				//success�̃u���b�N���́AAjax�ʐM�����������ꍇ�ɌĂяo�����
				//PHP����Ԃ��Ă����f�[�^�̕\��
				alert(data);
			},
			/**
			 * Ajax�ʐM�����s�����ꍇ�ɌĂяo����郁�\�b�h
			 */
			error: function(XMLHttpRequest, textStatus, errorThrown)
			{
				//�ʏ�͂�����textStatus��errorThrown�̒l�����ď�����؂蕪���邩�A�P���ɒʐM�Ɏ��s�����ۂ̏������L�q���܂��B
				//this;
				//this�͑��̃R�[���o�b�N�֐����l��AJAX�ʐM���̃I�v�V�����������܂��B
				//�G���[���b�Z�[�W�̕\��
				alert('Error : ' + errorThrown);
			}
		});
		//�T�u�~�b�g��A�y�[�W�������[�h���Ȃ��悤�ɂ���
		return false;
	});
});
