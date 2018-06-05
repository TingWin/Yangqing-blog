$(function(){
	$(".header-list a").hover(function(){
		$(this).children(".list-news").stop (true,true).animate({"margin-top":"28px"},1).slideToggle().siblings().children(".list-news").hide();
	});

	$(".chat-login").click(function(){
		$(".changyan-overlay").show();
		$(".changyan-login").show();
	});
	$(".close-btn").click(function(){
		$(".changyan-overlay").hide();
		$(".changyan-login").hide();
	})

	//
	$("login-btn").click(function(){
		var email = "1977905246@qq.com";
		var password ="123qwe";
		var enterEmail = $("input[name='name']").val();
		var enterPassword = $("input[password='password']").val();
		var loginText = $("login-btn").text("lodding...");
			 console.log(loginText);
		if (enterEmail == email && enterPassword == password){
			alert("登录成功！")
			window.location.href="http://www.yangqq.com";
		}else {
			alert("登陆失败！")
		}
	})
	$.ajax({
		url: "http://192.168.199.249:8080/index.php?c=api&a=info",
		type: "get",
		dataType: "json",
		data: {
			id:"3",
		},
		success:function(res){
			var infoStr = "";
			for(var j=0; j<res.data.commentList.length; j++){
           		infoStr += '<div class="d-item clearfix"><div class="item-left"><img src="./images/user1.png"></div><div class="item-right"><div class="top"><span class="user-name"><a href="javascript:void(0)">'+res.data.commentList[j].author.name+'</a></span><span class="user-address">北京市网友</span><span class="user-time">'+res.data.commentList[j].author.createtime+'</span></div><div class="middle"><p class="user-word">'+res.data.commentList[j].content+'</p></div><div class="buttom"><i class="gap-gw"></i><span class="report"><i class="icon-flag"></i><em>举报</em></span><i class="gap-gw"></i><span class="reply"><a href="javascript:void(0)">回复</a></span><i class="gap-gw"></i><span class="support"><i class="icon-ding-bg"></i><em class="icon-name-bg">2</em></span><i class="gap-gw"></i><span  class="oppose"><i class="icon-cai-bg"></i><em class="icon-name-bg"></em></span><i class="gap-gw"></i><div class="prop"><span class="prop-ico"></span><div class="prop-win"><div class="pw-top"><div class="item-content"><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div></div></div><div class="pw-lowaer"><a href="javascript:void(0)" class="unuseable">登录给他的评论盖章</a></div></div></div></div></div></div>'
           		$(".discuss-list").html(infoStr);
        	}
		},
		error:function(res){

		},
	})
})