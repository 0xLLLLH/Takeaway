var pg=0;
$(function () {
		pg=0;
	  $('[data-toggle="popover"]').popover();
	})
$(function(){
	//$("#load_div").hide();
	$(document).ajaxStart(function(){
		$("#load_div").show();
	});
	$(document).ajaxStop(function(){
		$("#load_div").hide();
	});
})
$("#searchbar").headroom({
	"tolerance": 2,
	"offset": 205,
	"classes": {
		"initial": "animated",
		"pinned": "swingOutX",
		"unpinned": "swingInX"
	  }
});

function LoadPage(){
	$.ajax({
		url: "code/get_Shop_Info.jsp",
		type: "get",
		//dataType:"json",
		data: { lng: $("#lng").val(), lat: $("#lat").val() ,type:$("#type").val(),order:$("#order").val(),page:pg},
		success:function(data)
		{
			var id= $(data).find("id");
			var first_type = $(data).find("first_type");
			var second_type =$(data).find("second_type");
			var shop_address=$(data).find("shop_address");
			var shop_description=$(data).find("shop_description");
			var shop_license=$(data).find("shop_license");
			var shop_name=$(data).find("shop_name");
			var shop_owner=$(data).find("shop_owner");
			var shop_phone=$(data).find("shop_phone");
			var shop_notice=$(data).find("shop_notice");
			var score=$(data).find("score");
			var sell_num=$(data).find("sell_num");
			var price_tosend=$(data).find("price_tosend");
			var ave_sendtime=$(data).find("ave_sendtime");
			var discount=$(data).find("discount");
			//$("#shop_list").empty();//clear
			for(var i=0;i<id.length;++i)
			{
				var sc=score[i].firstChild.nodeValue==-1?"暂无":score[i].firstChild.nodeValue;
				var notice = shop_notice[i].firstChild.nodeValue == "null"?"暂无公告":shop_notice[i].firstChild.nodeValue;
				var dcnt = discount[i].firstChild.nodeValue =="null"?"无":discount[i].firstChild.nodeValue;
				var avetime = ave_sendtime[i].firstChild.nodeValue=="3650"?"暂无":ave_sendtime[i].firstChild.nodeValue+"分钟";
				var add="<li class = \"restaurant fl clearfix\" data-delay=\'{\"show\": 432, \"hide\": 100 }\'" 
					+"data-toggle=\"popover\" data-title=\"商家详情\" data-placement=\"left auto\" data-html=\"true\""
					+"data-template=\"<div class=\'popover\'  style=\'border:2px solid #5cb85c;\' role=\'tooltip\'><div class=\'arrow\'  style=\'border-color:#5cb85c;\'></div><h3 class=\'popover-title\'></h3><div class=\'popover-content\'></div></div>\""
					+"data-content=\"<label style=\'color:#5cb85c;\'>优惠信息</label><hr><p>"+dcnt+"</p><label style=\'color:#5cb85c;\'>商家地址</label><hr><p>"+shop_address[i].firstChild.nodeValue+"</p><label style=\'color:#5cb85c;\'>商家公告</label><hr><p>"+notice+"</p>\" data-trigger=\"hover\">"	
						+"<a tabindex=\"0\" class=\"restaurant-link\" href=\"https://www.baidu.com\" target=\"_blank\">"
							+"<div class=\"outer\">"
								+"<div class = \"top-content\">"
									+"<div class=\"shop-preview\">"
										+"<img alt=\"preview\"  src=\"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=398990237,3888602267&fm=58\">"
									+"</div>"
									+"<div class=\"shop-content clearfix\">"
										+"<div class=\"clearfix\"><span class=\"shopname\">"+shop_name[i].firstChild.nodeValue+"</span></div>"
										+"<div class=\"clearfix\"><span class=\"fl\">评分 "+sc+"</span><span class=\"fr\" style=\"color:orange\">销量 "+sell_num[i].firstChild.nodeValue+"单</span></div>"
										+"<div class=\"clearfix\"><span class=\"fl\">起送价 ￥"+price_tosend[i].firstChild.nodeValue+"</span><span class=\"fr\"><span class=\"glyphicon glyphicon-time\"></span> "+avetime+"</span></div>"
									+"</div>"
								+"</div>"
								+"<div class=\"other\">"
									+"<span>折扣信息   <span class=\"glyphicon glyphicon-bullhorn\"></span>【满-减】</span>"
								+"</div>"
							+"</div>"
						+"</a>"
					+"</li>"
				//alert(add);
				$("#shop_list").append(add);
				//alert(shop_name[i].firstChild.nodeValue);
			}
			$('[data-toggle="popover"]').popover();
		}
	});
	//alert(page);
}

$(function(){
	  $(window).scroll(function() {
		  //当内容滚动到底部时加载新的内容
		  if ($(this).scrollTop() + $(window).height() + 0 >= $(document).height() && $(this).scrollTop() > 0) {
			  //当前要加载的页码
			  pg++;
			  LoadPage();
		  }
	  });
});

$("#search_bnt1").bind("click",function(){
	pg=0;
	alert($("#search_txt1").val());
});

$("#search_bnt2").bind("click",function(){
	pg=0;
	alert($("#search_txt2").val());
});
$(function(){
	$.ajax({
		url: "code/get_First_type.jsp",
		type: "get",
		success:function(data)
		{
			var type=$(data).find("first_type");
			for(var i=0;i<type.length;++i){
				var obj="<span class='rest-type'> <a href='#'  class='shoptype'>"+type[i].firstChild.nodeValue+"</a></span>"
				$("#shop_type").append(obj);
			}
			$("a:contains('全部')").addClass("selected");
			$(".shoptype").bind("click",function(){
				pg=0;
				$(".selected").removeClass("selected");
				$(this).addClass("selected");
				//alert($(this).text());
				var type = "";
				if($(this).text()!="全部")
				{
					type+=$(this).text();
				}
				$("#type").val(type);
				//alert(type);
				var order=$("#order").val();
				//alert(order);
				update_List(type,order);
			});
		}
	});
})
$(function(){
	update_List("","");
	var sortway="";
	$("a:contains('默认排序')").css({"color":"#5cb85c"});
	$(".sortway").bind("click",function(){
		pg=0;
		$(".sortway").attr("style","color:black");
		$(this).css({"color":"#5cb85c"});
		//alert($(this).text());
		if($(this).text()=="销量")
			sortway="sell_num";
		else if($(this).text()=="评价")
			sortway="score";
		else if($(this).text()=="送餐速度")
			sortway="ave_sendtime";
		else if($(this).text()=="默认排序")
			sortway="";
		$("#order").val(sortway);
		var type=$("#type").val();
		update_List(type,sortway);
	});
})
function update_List(type,order){
	$.ajax({
		url: "code/get_Shop_Info.jsp",
		type: "get",
		//dataType:"json",
		data: { lng: $("#lng").val(), lat: $("#lat").val() ,type:type,order:order},
		success:function(data)
		{
			var id= $(data).find("id");
			var first_type = $(data).find("first_type");
			var second_type =$(data).find("second_type");
			var shop_address=$(data).find("shop_address");
			var shop_description=$(data).find("shop_description");
			var shop_license=$(data).find("shop_license");
			var shop_name=$(data).find("shop_name");
			var shop_owner=$(data).find("shop_owner");
			var shop_phone=$(data).find("shop_phone");
			var shop_notice=$(data).find("shop_notice");
			var score=$(data).find("score");
			var sell_num=$(data).find("sell_num");
			var price_tosend=$(data).find("price_tosend");
			var ave_sendtime=$(data).find("ave_sendtime");
			var discount=$(data).find("discount");
			$("#shop_list").empty();//clear
			for(var i=0;i<id.length;++i)
			{
				var sc=score[i].firstChild.nodeValue==-1?"暂无":score[i].firstChild.nodeValue;
				var notice = shop_notice[i].firstChild.nodeValue == "null"?"暂无公告":shop_notice[i].firstChild.nodeValue;
				var dcnt = discount[i].firstChild.nodeValue =="null"?"无":discount[i].firstChild.nodeValue;
				var avetime = ave_sendtime[i].firstChild.nodeValue=="3650"?"暂无":ave_sendtime[i].firstChild.nodeValue+"分钟";
				var add="<li class = \"restaurant fl clearfix\" data-delay=\'{\"show\": 432, \"hide\": 100 }\'" 
					+"data-toggle=\"popover\" data-title=\"商家详情\" data-placement=\"left auto\" data-html=\"true\""
					+"data-template=\"<div class=\'popover\'  style=\'border:2px solid #5cb85c;\' role=\'tooltip\'><div class=\'arrow\'  style=\'border-color:#5cb85c;\'></div><h3 class=\'popover-title\'></h3><div class=\'popover-content\'></div></div>\""
					+"data-content=\"<label style=\'color:#5cb85c;\'>优惠信息</label><hr><p>"+dcnt+"</p><label style=\'color:#5cb85c;\'>商家地址</label><hr><p>"+shop_address[i].firstChild.nodeValue+"</p><label style=\'color:#5cb85c;\'>商家公告</label><hr><p>"+notice+"</p>\" data-trigger=\"hover\">"	
						+"<a tabindex=\"0\" class=\"restaurant-link\" href=\"https://www.baidu.com\" target=\"_blank\">"
							+"<div class=\"outer\">"
								+"<div class = \"top-content\">"
									+"<div class=\"shop-preview\">"
										+"<img alt=\"preview\"  src=\"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=398990237,3888602267&fm=58\">"
									+"</div>"
									+"<div class=\"shop-content clearfix\">"
										+"<div class=\"clearfix\"><span class=\"shopname\">"+shop_name[i].firstChild.nodeValue+"</span></div>"
										+"<div class=\"clearfix\"><span class=\"fl\">评分 "+sc+"</span><span class=\"fr\" style=\"color:orange\">销量 "+sell_num[i].firstChild.nodeValue+"单</span></div>"
										+"<div class=\"clearfix\"><span class=\"fl\">起送价 ￥"+price_tosend[i].firstChild.nodeValue+"</span><span class=\"fr\"><span class=\"glyphicon glyphicon-time\"></span> "+avetime+"</span></div>"
									+"</div>"
								+"</div>"
								+"<div class=\"other\">"
									+"<span>折扣信息   <span class=\"glyphicon glyphicon-bullhorn\"></span>【满-减】</span>"
								+"</div>"
							+"</div>"
						+"</a>"
					+"</li>"
				//alert(add);
				$("#shop_list").append(add);
				//alert(shop_name[i].firstChild.nodeValue);
			}
			$('[data-toggle="popover"]').popover();
		}
	});
}


