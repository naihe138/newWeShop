$(function() {
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    var myScroll = new IScroll('#wrapper', { tap: true });

    var bannerBox = $('#banner');
		var nav = $('.banner-nav');
    var bannerItem = nav.find('span');
    var iNow = 0;
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        onSlideChangeEnd: function() {

            if (swiper.activeIndex - 1 == bannerItem.length) {
                iNow = 0;
            }
            else if(swiper.activeIndex - 1 < 0){
                iNow = bannerItem.length - 1;
            }
            else {
                iNow = swiper.activeIndex - 1
            }
            console.log(iNow);
            bannerItem.eq(iNow).addClass('active').siblings('span').removeClass('active');
        }
    });
    function pageDtail(){
        var pDtail = $('#pageDtail');
        var mtitle = pDtail.find('.mtitle');
        var pageConten = pDtail.find('.pageConten');
        var onoff = true;

        mtitle.on('tap', function(){
            if(onoff) {
                pageConten.show();
            }
            else{
                pageConten.hide();
            }
            myScroll.refresh();
            onoff = !onoff;
        })
    }
    function share(){
        var share = $('#share');
        var closeShare = $('#closeShare');
        var popupShare = $('.popupShare');
        share.on('touchstart', function(){
            popupShare.show();
        })
        closeShare.on('touchstart', function(){
            popupShare.hide();
        })
    }
    function sell(){
        var toSell = $('#toSell');
        var addCar = $('#addCar');
        var popupSell = $('.popupSell');
        var closeSell = $('#closeSell');

        toSell.add(addCar).on('touchstart', function(){
            popupSell.show();
        })
        closeSell.on('touchstart', function(){
            popupSell.hide();
        })
    }
    function gotoComment(){
        $('#comment').on('tap', function(){
            window.location.href = 'comment.html';
        });
    }
    pageDtail();
    share();
    sell();
    gotoComment();
})
