$(function(){
	var myScroll = new IScroll('#wrapper', { mouseWheel: true });
	var myScroll1 = new IScroll('#wrapper1', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
})