$(function() {
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
	// Banner
	var banner = (function(){
		var bannerBox = $('#banner');
		var nav = $('.banner-nav');
		var tem = '';
		var navTem = '';
		function init(){
			$.post('http://api.shopbymall.com/api/home/GetHomeBanner', function(res){
				console.log(res);
				if(res.returnstate == 200){
					res.returnvalue.forEach(function(item, i){
						console.log(item);
						tem += '<div class="swiper-slide"><img src="'+(WebUrl + item.ImgSrc)+'" onerror="javascript:this.src=\'../imgs/bb.jpg\'"></div>';
						navTem += '<span></span>';
					})
				}
				bannerBox.append($(tem));
				nav.append($(navTem));
				nav.find('span').eq(0).addClass('active');
				setTimeout(function(){
					var swiper = new Swiper('.swiper-container', {
				        loop: false,
				        onSlideChangeEnd: function(){
				        	console.log(swiper.activeIndex);
				        	nav.find('span').eq(swiper.activeIndex).addClass('active').siblings('span').removeClass('active');
				        }
				    });
				}, 30)
				
			})
		}
		return {
			init: init
		}
	})();
	
	// 初始化的调用
	init();
})
