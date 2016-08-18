$(function() {
	var WebUrl = 'http://api.shopbymall.com/api/home/';
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	// 整个项目的初始化函数	
	function init(){
		// 整个容器滚动
		setTimeout(function(){
			new IScroll('#wrapper', { mouseWheel: true });
		}, 200);
		// banner
		banner.init();
		// 广告
		advertisement.init();
		// 旗舰品牌
		brand.init();
		// 主题市场
		themMarkey.init();
		// 猜你喜欢
		youLike.init();
	}
	// Banner
	var banner = (function(){
		var bannerBox = $('#banner');
		var nav = $('.banner-nav');
		var tem = '';
		var navTem = '';
		function init(){
			$.post(WebUrl+'GetHomeBanner', function(res){
				if(res.returnstate == 200){
					res.returnvalue.forEach(function(item, i){
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
	// 广告
	var advertisement = (function(){
		var ad = $('#ad');
		var aA = ad.find('a');
		var aImg = ad.find('img');
		function init(){
			$.post(WebUrl + 'GetHomeAd', function(res){
				if(res.returnstate == 200) {
					aImg.forEach(function(item, index){
						$(item).attr('src', res.returnvalue[index].ImgSrc);
						console.log(item, index);
					})
				}
			})
		}
		return {
			init: init
		}
	})();

	// 旗舰品牌
	var brand = (function(){
		var flagship = $('#flagship');
		var aA = flagship.find('a');
		var aImg = flagship.find('img');
		function init(){
			$.post(WebUrl + 'GetHomeBrand', function(res){
				if(res.returnstate == 200) {
					aImg.forEach(function(item, index){
						var i = index % res.returnvalue.length;
						$(item).attr('src', res.returnvalue[i].ImgSrc);
					})
				}
			})
		}
		return {
			init: init
		}
	})();

	// 主题市场
	var themMarkey = (function(){
		var them = $('#them');
		var aA = them.find('a');
		var aImg = them.find('img');
		function init(){
			$.post(WebUrl + 'GetHomeBrand', function(res){
				if(res.returnstate == 200) {
					aImg.forEach(function(item, index){
						var i = index % res.returnvalue.length;
						$(item).attr('src', res.returnvalue[i].ImgSrc);
					})
				}
			})
		}
		return {
			init: init
		}
	})();
	// 猜你喜欢
	var youLike = (function(){
		var str = '';
		var likeBox = $('#likeBox');
		function init(){
			$.post(WebUrl + 'GetHomeLike', function(res){
				if(res.returnstate == 200) {
					res.returnvalue.forEach(function(item, index){
						str += '<div class="likeList">' +
							'<a href="#">' +
							'<img src="'+item.OriginalImage+'" alt="">' +
							'<p>'+item.ProName+'</p>' +
							'<span>¥<i>'+item.ShopPrice+'</i></span>' +
							'</a>' +
							'</div>';
					})
					console.log(str);
					likeBox.append($(str));
				}
			})
		}
		return {
			init: init
		}
	})();
	// 初始化的调用
	init();
})
