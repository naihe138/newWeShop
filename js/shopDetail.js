$(function() {
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    var myScroll = new IScroll('#wrapper', { mouseWheel: true });

    var bannerBox = $('#banner');
		var nav = $('.banner-nav');
    var swiper = new Swiper('.swiper-container', {
        loop: false,
        onSlideChangeEnd: function() {
            console.log(swiper.activeIndex);
            nav.find('span').eq(swiper.activeIndex).addClass('active').siblings('span').removeClass('active');
        }
    });

})
