/**
 * Created by naice on 2016/8/18.
 */
$(function(){


    function init(){
        // tab切换
        tab.init();
    }

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

    init();
})