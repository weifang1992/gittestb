;(function($){
	$.product=function(opt){
		return new Product(opt)
	}
	function Product(opt){
		var opt=$.extend({
			title:"标题文字",
			content:"您确定要删除吗？",
			btn:["确定","取消"],
			callback:null
		},opt);
		var html='<div class="mark"></div>'
					+'<div class="prodig">'
					+'<h2>'+opt.content+'</h2>'
					+'<p></p>'
					+'</div>',
			node=$(html);
		node.prependTo($("body"));
		$(".mark").css("height",$(document).height());
		var btnlen=opt.btn.length;
		//button的宽
		//var btnw=$(".prodig").width()/btnlen+"px";
		for(var i=0;i<btnlen;i++){
			$("p").append('<button class="btn">'+opt.btn[i]+'</button>');
			//第一种
			if(opt.btn[i]=="取消"){
				$(".prodig p").find("button").on("click",close);
			}else if(opt.btn[i]=="确定"){
				$(".prodig p").find("button").on("click",function(){
					opt.callback();
					close();
				})
			}
		}
		//$(".btn").css("width",btnw);
		//第二种
		//点击确定
		//$(".prodig p").find("button").eq(0).on("click",function(){
		//	opt.callback();
		//	close();
		//})
		//点击取消
		//$(".prodig p").find("button").eq(1).on("click",close);
		//封装关闭弹出框
		function close(){
			$(".mark").remove();
			$(".prodig").remove();
		}
	}
})(jQuery)