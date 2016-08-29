$(function(){
	var WebUrl = 'http://api.shopbymall.com/api/home';
	var myScroll = null;
	// 整个项目的初始化函数	
	function init(){
		// 整个容器滚动
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		bill();
	}

	function bill(){
		var onOff = true;
		var billBtn = $('#billBtn');
		var billBox = $('#billBox');
		var billcontent = $('.bill');
		var input = billcontent.find('input');
		var textarea = billcontent.find('textarea');
		billBtn.on('touchstart', function(){
			if(onOff){
				billBox.removeClass('on').addClass('off');
				input.hide();
				textarea.hide();
			}
			else{
				billBox.removeClass('off').addClass('on');
				input.show();
				textarea.show();
			}
			myScroll.refresh();
			onOff = !onOff;
		});
		return onOff;
	}

	init();
})