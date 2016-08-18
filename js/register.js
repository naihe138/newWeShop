$(function(){
	var nav = $('.register-nav');
	var aSpan = nav.find('span');
	var normalReg = $('.normalReg');
	var telReg = $('.telReg');
	function tab(){
		var iNow = 0;
		aSpan.on('touchstart', function(){
			var index = $(this).index();
			if(index == iNow){
				return;
			}
			$(this).addClass('active').siblings('span').removeClass('active');
			if(index == 0){
				normalReg.show();
				telReg.hide();
			}
			else{
				normalReg.hide();
				telReg.show();
				telNex();
			}
			iNow = index;
		})
	}
	
	function telNex(){
		var telStep1 = telReg.find('.step1');
		var telStep2 = telReg.find('.step1');

		var telNextBtn = $('#telNextBtn');
		telNextBtn.on('touchstart', function(){
			console.log(telStep1);
			telStep1.hide();
			telStep2.show();
		})
	}

	tab()
})