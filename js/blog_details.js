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
	});

//登录
	$("span.login-btn").click(function(){
		var enterEmail = $("input[name='email']").val();
		var enterPassword = $("input[name='password']").val();
		$.ajax({
			url: "http://192.168.199.249:8080/index.php?c=api&a=doLogin",
			type: "post",
			dataType: "json",
			data: {
				email: enterEmail,
				password: enterPassword,
			},
			success:function(res){
				if(res.status){
					$(".changyan-overlay").hide();
					$(".changyan-login").hide();
					localStorage.setItem("user_id",res.data.id);
					alert("登录成功！")
				}else{
					alert("登录失败！");
				}
			},
			error:function(res){

			},
		})
	});
//发表评论
	$(".speak-btn").click(function(){
		var contentText = $(".border-text input").val();
		var userId = localStorage.getItem("user_id");
		var blogId =  window.location.search.split("=")[1];
		$.ajax({
			url: "http://192.168.199.249:8080/index.php?c=api&a=doComment",
			type: "post",
			dataType: "json",
			data: {
				content: contentText,
				user_id: userId,
				blog_id: blogId,
			},
			success:function(res){
				if(res.status){
					alert("成功");
           			var str = '<div class="d-item clearfix"><div class="item-left"><img src="./images/user1.png"></div><div class="item-right"><div class="top"><span class="user-name"><a href="javascript:void(0)">'+res.data.name+'</a></span><span class="user-address">北京市网友</span><span class="user-time">'+res.data.createtime+'</span></div><div class="middle"><p class="user-word">'+contentText+'</p></div><div class="buttom"><i class="gap-gw"></i><span class="report"><i class="icon-flag"></i><em>举报</em></span><i class="gap-gw"></i><span class="reply"><a href="javascript:void(0)">回复</a></span><i class="gap-gw"></i><span class="support"><i class="icon-ding-bg"></i><em class="icon-name-bg">2</em></span><i class="gap-gw"></i><span  class="oppose"><i class="icon-cai-bg"></i><em class="icon-name-bg"></em></span><i class="gap-gw"></i><div class="prop"><span class="prop-ico"></span><div class="prop-win"><div class="pw-top"><div class="item-content"><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div></div></div><div class="pw-lowaer"><a href="javascript:void(0)" class="unuseable">登录给他的评论盖章</a></div></div></div></div></div></div>'
					$(".discuss-list").append(str);
				}else{

				}
			},
			error:function(res){
				alert("失败");
			},
		})
	});

	$.ajax({
		url: "http://192.168.199.249:8080/index.php?c=api&a=info",
		type: "get",
		dataType: "json",
		data: {
			id:window.location.search.split("=")[1],
		},
		success:function(res){
			var str = '<h4 class="atitle"><span>'+res.data.info.createdate+'</span>'+res.data.info.title+'</h4><p class="newsnav">您现在的位置是:<span首页</span>&nbsp;>&nbsp;<span>模板分享</span>&nbsp;>&nbsp;<span>个人博客模板</span></p><p>'+res.data.info.content+'</p><p>'+res.data.info.img+'</p><p>如果你也在使用帝国cms,可以直接使用模板组.关于首页调用修改,直接修改栏目id即可.</p><p class="download"><span>帝国cms模板组下载</span><a href="javascript:void(0)">《如何使用帝国模板组?》</a></p><p>本模板更换背景图片也很简单,随意更换背景图片,还有主色就可以变换一个风格.比如这样</p><p><img src="./images/first2.png" width="700"></p><p>&nbsp;</p><p><img src="./images/first3.png" width="700"></p><p><strong>静态页面</strong>请直接点击下面的蓝色按钮</p>';
			$(".atitle-info").html(str);

			var infoStr = "";
			for(var j=0; j<res.data.commentList.length; j++){
           		infoStr += '<div class="d-item clearfix"><div class="item-left"><img src="./images/user1.png"></div><div class="item-right"><div class="top"><span class="user-name"><a href="javascript:void(0)">'+res.data.commentList[j].author.name+'</a></span><span class="user-address">北京市网友</span><span class="user-time">'+res.data.commentList[j].author.createtime+'</span></div><div class="middle"><p class="user-word">'+res.data.commentList[j].content+'</p></div><div class="buttom"><i class="gap-gw"></i><span class="report"><i class="icon-flag"></i><em>举报</em></span><i class="gap-gw"></i><span class="reply"><a href="javascript:void(0)">回复</a></span><i class="gap-gw"></i><span class="support"><i class="icon-ding-bg"></i><em class="icon-name-bg">2</em></span><i class="gap-gw"></i><span  class="oppose"><i class="icon-cai-bg"></i><em class="icon-name-bg"></em></span><i class="gap-gw"></i><div class="prop"><span class="prop-ico"></span><div class="prop-win"><div class="pw-top"><div class="item-content"><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div><div class="prop-item"><span class="pi-img"><img src="./images/pKMx6s1_png.png"></span><a class="pi-num" href="javascript:void(0)"><i class="numeral num-6"></i><i class="numeral num-8"></i></a></div></div></div><div class="pw-lowaer"><a href="javascript:void(0)" class="unuseable">登录给他的评论盖章</a></div></div></div></div></div></div>'
           	}
           	$(".discuss-list").html(infoStr);

		},
		error: function(res){

		}
	})
});
