$(function() {
   var myScroll = new IScroll('#wrapper', { mouseWheel: true });
   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
   var webUrl = 'http://api.shopbymall.com/';
   var list = $('.list');
   function toZero(num){
      var str = '';
      if(num < 9) {
         str = '0' + num;
      } else {
         str = '' + num;
      }
      return str;
   }
   function singIn(){

      $.post(webUrl + '/API/Member/GetMemberSignIn', {username: 'shop1 '}, function(res){
         console.log(res);
         if(res.returnstate==200) {
            var date = new Date();
            var m = date.getMonth();
            var d = date.getDate();
            var h = date.getHours();
            var min = date.getMinutes();
            var s = date.getSeconds();
            var str = (m + 1) + '-'+ d + '  '+ toZero(h) + ':' + toZero(s) + ':' + toZero(s);
            var Li = '<li>'+str+'<span class="fr">+50</span></li>';
            list.prepend($(Li));
         } else{
            console.log(res.returnstate);
         }
      })
   }
   // 签到操作
   $('.signIn').on('touchstart', singIn);
   
   
});
