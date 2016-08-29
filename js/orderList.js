/**
 * Created by naice on 2016/8/18.
 */
$(function(){


    function init(){
        // tab切换
        tab.init();
        nav.init();
    }
    // 顶部切换
    var tab = (function(){
        var htab = $('.htab');
        var aSpan = htab.find('span');
        function init(){
            aSpan.on('touchstart', function(){
                $(this).addClass('active').siblings().removeClass('active');

            })
        }
        return {
            init: init
        }
    })();

    // 头部切换
    var nav = (function(){
        var navBox = $('.nav');
        var aSpan = navBox.find('span');
        function init(){
            aSpan.on('touchstart', function(){
                $(this).addClass('active').siblings('span').removeClass('active');
            })
        }
        return {
            init: init
        }
    })();

    init();
})