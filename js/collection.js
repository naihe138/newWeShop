$(function() {

    function init() {

        document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        tab.init();
    }
    // 切换
    var tab = (function() {
        var htab = $('#htab');
        var span = htab.find('span');
        var iList = $('.iList');
        var iNow = 0;
        var cShop = $('#cShop');
        var cGoods = $('#cGoods');
        var sw1 = '';
        var sw2 = '';

        function init() {
            sw1 = new IScroll('#cShop', { mouseWheel: true });
            span.on('touchstart', function() {
                var i = $(this).index();
                if (i == iNow) {
                    return;
                }
                span.eq(iNow).removeClass('active');
                $(this).addClass('active');

                // 收藏店铺
                if (i == 1) {
                    cShop.hide(function() {
                        sw1 = '';
                    });
                    cGoods.show(0)
                    setTimeout(function() {
                        sw2 = new IScroll('#cGoods', { mouseWheel: true });
                    }, 100)
                }
                // 收藏商品
                if (i == 0) {
                    cGoods.hide(function() {
                        sw2 = '';
                    });
                    cShop.show(function() {
                        sw1 = new IScroll('#cShop', { mouseWheel: true });
                    })
                }
                iNow = i;

            })
        }
        return {
            init: init
        }
    })();



    init();

})
