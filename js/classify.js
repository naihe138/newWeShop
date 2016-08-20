$(function(){
	var myScroll = new IScroll('#wrapper', { mouseWheel: true });
	var myScroll1 = new IScroll('#wrapper1', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var webUrl = 'http://api.shopbymall.com/';
	// 获取分类
	function getClassList(){
		$.post(webUrl + '/API/Product/GetProductCategory', function(res){
			console.log(res);
		})
	}

	getClassList();
});