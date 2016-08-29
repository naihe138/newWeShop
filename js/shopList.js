
$(function(){
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var webUrl = 'http://api.shopbymall.com/';
	var timer = null;
	var myScroll = '';
	var str1 = '';
	var str2 = '';
	var wrapper1 = $('#wrapper1');
	var wrapper2 = $('#wrapper2');
	var list1 = $('#list1');
	var list2 = $('#list2');
	var tabBtn = $('#tabBtn');
	//容器高度
	var wrapper1Height = null;
	var wrapper2Height = null;
	var scroller1 = null;
	var scroller2 = null;
	wrapper1Height = wrapper1.height();
	var onoff = true;
	//
	var iScroll = new IScroll('#wrapper1');
	function getShopList() {
		$.post(webUrl + '/API/Product/GetProductList', {
			page: 1,
			sidx: 'SaleNumber',
			rows: 10,
			productname: null,
			sord: 'desc'
		}, function(res){
			console.log(res);
			if(res.returnstate == 200) {
				render(res.returnvalue)
			}
		})
	}
	function render(arr){
		for (var i = 0; i< arr.length;i++ ) {
			str1 += '<li>' +
				'<a class="clearfix" href="#">' +
				'<img src="'+arr[i].OriginalImage+'">' +
				'<div class="textBox">' +
				'<p class="list-title">'+arr[i].ProName+'</p>' +
				'<p class="shop-title">' +
				'<i class="iconfont">&#xe600</i>' +
				'<span>'+arr[i].ShopName+'</span>' +
				'</p>' +
				'<p class="price clearfix">' +
				'<span class="price-detail fl">¥<i>'+arr[i].ShopPrice+'</i></span>' +
				'<span class="sell fr">销量:<i>'+arr[i].CollectCount+'</i></span>' +
				'</p>' +
				'</div>' +
				'</a>' +
				'</li>';

			str2 += '<li>' +
				'<a href="#">' +
				'<img src="'+arr[i].OriginalImage+'">' +
				'<div class="textBox">' +
				'<p class="list-title">'+arr[i].ProName+'</p>' +
				'<p class="shop-title">' +
				'<i class="iconfont">&#xe600</i>' +
				'<span>'+arr[i].ShopName+'</span>' +
				'</p>' +
				'<p class="price clearfix">' +
				'<span class="price-detail fl">¥<i>'+arr[i].ShopPrice+'</i>' +
				'</span><span class="sell fr">销量:<i>'+arr[i].CollectCount+'</i></span>' +
				'</p>' +
				'</div>' +
				'</a>' +
				'</li>';

		}
		list1.append($(str1));
		list2.append($(str2));
		setTimeout(function () {
			iScroll.refresh();
			scroller1 = wrapper1.find('.scroller').height();
			iScroll.on('scrollEnd', function(){
				console.log(scroller1);
				console.log(iScroll.y + '----');
				console.log((wrapper1Height - scroller1)+ '+++');
			});
		}, 0);
		// scrollInit('#wrapper1');

	}
	// 切换
	function tab(){
		tabBtn.on('touchstart', function(){
			if(onoff){
				wrapper1.hide(0);
				wrapper2.show(0);
				// scrollInit('#wrapper2');
				$(this).html('&#xe609;');
				wrapper2Height = wrapper2.height();
			}
			else{
				wrapper1.show(0);
				wrapper2.hide(0);
				// scrollInit('#wrapper1');
				$(this).html('&#xe609;');
				wrapper1Height = wrapper1.height();
			}
			onoff = !onoff;
		})
	}
	// 滚动初始化
	function scrollInit(id){
		timer = setTimeout(function(){
			myScroll = new IScroll(id, {
				mouseWheel: true,
				topOffset: 50,
				onRefresh: function(){},
				onScrollMove: function(){
					console.log(111111111);
				},
				onScrollEnd: function(){}
			});
			console.log(myScroll);
			// myScroll.refresh();
			clearInterval(timer);
		}, 100);
	}
	getShopList();
	tab();
})
