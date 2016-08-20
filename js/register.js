$(function(){
	var webUrl = 'http://api.shopbymall.com/';
	var nav = $('.register-nav');
	var aSpan = nav.find('span');
	var normalReg = $('.normalReg');
	var telReg = $('.telReg');
	var code = '';
	var reg = /^1[0-9]{10}$/;
	var yanzhenma = $('.yanzhenma');
	var telNextBtn = $('#telNextBtn');
	var postTel = $('#postTel');
	var nRegBtn = $('#nRegBtn');

	var postTelNumber = '';
	function tab(){
		var iNow = 0;
		aSpan.on('touchstart', function(){
			var index = $(this).index();
			if(index == iNow){
				return;
			}
			$(this).addClass('active').siblings('span').removeClass('active');
			if(index == 0){
				normalReg.show();
				telReg.hide();
			}
			else{
				normalReg.hide();
				telReg.show();
			}
			iNow = index;
		})
	}
	// 下一步
	function telNex(){
		var telStep1 = telReg.find('.step1');
		var telStep2 = telReg.find('.step2');
		telNextBtn.on('touchstart', function(){
			var tel = $('#telNumber').val();
			var codeV = $('#verifyCode').val();
			if(!reg.test(tel)) {
				alert('手机号码有误!');
				return;
			}
			if(codeV == ''){
				alert('输入的验证码不能为空!');
				return;
			}
			if(codeV != code){
				alert('输入的验证码有误!');
				return;
			}
			postTelNumber = tel;
			$.post(webUrl+'/API/Member/CheckMobile', {
				mobile: tel,
				verode: codeV
			}, function(res){
				if(res.returnstate == 200) {
					telStep1.hide();
					telStep2.show();
				}
				if(res.returnstate == 207){
					alert('验证码过期');
				}

				telStep1.hide();
				telStep2.show();
			})
		})
	}

	// 发送验证码
	function getVerifyCode () {
		yanzhenma.on('touchstart', function(){
			var telNumber = $('#telNumber').val();
			var verifyCode = $('#verifyCode');
			if(!reg.test(telNumber)) {
				alert('手机号码有误!');
				return;
			}
			else{
				$.post(webUrl+'/API/Member/SendVerCode', {mobile: telNumber}, function(res){
					if(res.returnstate == 200) {
						code = res.returnvalue;
						verifyCode.val(res.returnvalue);
					} else{
						alert('数据库异常');
					}
				})
			}
		})
	}
	// 提交手机注册
	function postTelReg(){
		postTel.on('touchstart', function(){
			var password = $('#password').val();
			var rePassword = $('#rePassword').val();
			if (password == '') {
				alert('密码不能为空!');
				return;
			}
			if(password.length < 6){
				alert('密码不能少于6位数!');
				return;
			}
			if(password !== rePassword){
				alert('两次输入的密码不一样!');
				return;
			}
			$.post(webUrl + '/API/Member/GetMemberRegisterByMobile', {
				mobile: postTelNumber,
				pwd: rePassword
			}, function(res){
				if(res.returnstate == 200) {
					alert('恭喜你!注册成功!');
					window.location.href = 'logIn.html';
				}
			})
		})
	}
	// 普通注册
	function normalReg(){
		var regEmail  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		nRegBtn.on('touchstart', function(){
			var nUsername = $('#nUsername').val();
			var nPassword = $('#nPassword').val();
			var nresPassword = $('#nresPassword').val();
			var nEmail = $('#nEmail').val();
			if(nUsername == ''){
				alert('用户名不能为空!');
				return;
			}
			if(nPassword == ''){
				alert('密码不能为空!');
				return;
			}
			if(nresPassword == ''){
				alert('重复密码不能为空!');
				return;
			}
			if(nUsername == ''){
				alert('邮箱地址不能为空!');
				return;
			}
			if(nPassword.length < 6){
				alert('密码不能少于6位数!');
				return;
			}
			if(nPassword !== nresPassword){
				alert('两次输入的密码不正确!');
				return;
			}
			if (!regEmail.test(mail)){
				alert('邮箱地址输入不正确!');
				return;
			}
			$.post(webUrl + '/API/Member/GetMemberRegisterByUserName', {
				username: nUsername,
				pwd: nresPassword,
				email: nEmail
			}, function(res){
				if(res.returnstate==200) {
					alert('恭喜你!注册成功!');
					window.location.href = 'logIn.html';
				}
				if(res.returnstate==204) {
					alert('用户名已注册!');
				}
				if(res.returnstate==209) {
					alert('邮箱已注册!');
				}
				if(res.returnstate==210) {
					alert('用户名和邮箱已被注册!');
				}
			})
		})
	}
	tab();
	getVerifyCode();
	telNex();
	postTelReg();
	normalReg();
});