$(function(){
	var WebUrl = 'http://api.shopbymall.com/api/home';
	// 整个项目的初始化函数	
	function init(){
		// 整个容器滚动
		new xScroll({
		    el:'#container'
		});
		// banner
		banner.init();
		
	}

	init();
})