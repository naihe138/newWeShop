$(function(){
	var WebUrl = 'http://api.shopbymall.com/api/home';
	// 整个项目的初始化函数	
	function init(){
		// 整个容器滚动
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		var myScroll = new IScroll('#wrapper', { mouseWheel: true });
	}

	init();
})