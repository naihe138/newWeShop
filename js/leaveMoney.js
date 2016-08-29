$(function(){

	function tab(){
		var tab = $('#tab');
		var oNav = tab.find('.nav');
		var aSpan = oNav.find('span');
		var aList = tab.find('.list');
		var iNow = 0;
		aSpan.on('touchstart', function(){
			var index = $(this).index();
			$(this).addClass('active').siblings('span').removeClass('active');

			aList.eq(index).show(0);
			aList.eq(iNow).hide(0);
			iNow = index;

		})
	}

	tab();
})