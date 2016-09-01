
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
	// 页数
	var page = 1;
	// 数据存储
	var allData = {
		list : []
	};
	var iScroll = new IScroll('#wrapper1');

	var iScroll2 = '';

	function getShopList() {
		$.post(webUrl + '/API/Product/GetProductList', {
			page: page,
			sidx: 'SaleNumber',
			rows: 10,
			productname: null,
			sord: 'desc'
		}, function(res){
			if(res.returnstate == 200) {
				if(res.returnvalue.length == 0) {
					console.log('没有更多数据了');
					onoff = true;
				} else{
					for (var i = 0; i < res.returnvalue.length; i++) {
						allData.list.push(res.returnvalue[i]);
					}
					render(allData);
				}
			}
		})
	}
	function render(data){
		console.log(data);
		var temp1 = template('listBox1', data);
		var temp2 = template('listBox2', data);
		list2.html(temp1);
		list1.html(temp2);
		scrollInit();
	}
	// 切换
	function tab(){
		tabBtn.on('touchstart', function(){
			if(onoff){
				wrapper1.hide(0);
				wrapper2.show(0);
				$(this).html('&#xe609;');
				wrapper2Height = wrapper2.height();
				iScroll2 = new IScroll('#wrapper2');
				scrollInit2();
			}
			else{
				wrapper1.show(0);
				wrapper2.hide(0);
				$(this).html('&#xe609;');
				wrapper1Height = wrapper1.height();
			}
			scrollInit();
			onoff = !onoff;
		})
	}
	// 滚动初始化
	function scrollInit(){
		timer = setTimeout(function(){
			iScroll.refresh();
			scroller1 = wrapper1.find('.scroller').height();
			iScroll.on('scrollEnd', function(){
				var top = parseInt(wrapper1Height - scroller1) - parseInt(iScroll.y);
				if (Math.abs(top) < 50) {
					page ++;
					getShopList();
				}
			});
		}, 10);
	}
	function scrollInit2(){
		timer = setTimeout(function(){
			iScroll2.refresh();
			scroller2 = wrapper2.find('.scroller').height();
			iScroll2.on('scrollEnd', function(){
				var top = parseInt(wrapper2Height - scroller2) - parseInt(iScroll2.y);
				if (Math.abs(top) < 50) {
					page ++;
					getShopList();
					iScroll2.refresh();
				}
			});
		}, 10);
	}
	getShopList();
	tab();
})
