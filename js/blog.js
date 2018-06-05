$(function() {
	$(".header-list a").hover(function(){
		$(this).children(".list-news").stop (true,true).animate({"margin-top":"28px"},1).slideToggle().siblings().children(".list-news").hide();
	});
	$.ajax({
		url: "http://192.168.199.249:8080/index.php?c=api&a=bloglist",
		type: "get",
		dataType: "json",
		success: function(res){
			var str = "";
			for(var i=0; i<res.data.lists.length; i++){
				str +='<li><time class="blog-time"><span>'+res.data.lists[i].month+'</span><span>'+res.data.lists[i].year+'</span></time><div class="time-icon"></div><div class="time-tab"><h2>'+res.data.lists[i].title+'</h2><p><span class="blogpic"><img src="./images/pic1.jpg"></span>'+res.data.lists[i].content+'</p><p><a class="readmore" href="./read.html?id='+res.data.lists[i].id+'">阅读全文&gt;&gt;</a><a class="classname" href="javascript:void(0);">'+res.data.lists[i].classify_name+'</a></p></div></li>';
				$(".blog-info").html(str);
			}
		},
		error: function(res){

		}
	})
});