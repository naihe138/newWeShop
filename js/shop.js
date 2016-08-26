/**
 * @file
 * @author 何文林
 * @date 16/8/23
 */
$(function(){
  function tab(){
    var nav = $('#nav').find('span');
    var item = $('#tab-content').find('.item');
    nav.on('touchstart', function(){
      var index = $(this).index();
      $(this).addClass('active').siblings('span').removeClass('active');
      item.eq(index).show().siblings('.item').hide();
    })
  }
  tab();
})