var nowpage=0;
$(function(){
	//$("#load_div").hide();
	$(document).ajaxStart(function(){
		$("#load_div").show();
	});
	$(document).ajaxStop(function(){
		$("#load_div").hide();
	});
})
$(window).scroll(function(event){
	if ($(".broadcast").offset().top+$(".broadcast").outerHeight(true)-$(document).scrollTop()<0){
		$(".broadcast-fixed").show();
	}else {
		$(".broadcast-fixed").hide();
	}
	$(".list-title").each(function(){
		if ($(this).offset().top+$(this).outerHeight(true)-$(document).scrollTop()<60){
			$(this).next().show();
			$(this).next().width($(".list-title").width());
		}else {
			$(this).next().hide();
		}
	});
});
function update_num(){
	$("#cart-items tr:gt(0)").each(function(i){
		var item_id = $(this).data("id");
		var num = $(this).find(".count").val();
		if (num>0)
			$(".list-content").find("#"+item_id+"num").html(num);
		else 
			$(".list-content").find("#"+item_id+"num").attr("style","display:none");
	});
}

function cart_plus(){
	var input=$(this).prev();
	var num_next=parseInt($(input).val())+1;
	if (num_next <=99){
		$(input).val(num_next);
		var item_price=$(this).parents("tr").data("price");
		$("#total_price").text(parseInt($("#total_price").text())+item_price);
	}
	update_num();
}
function cart_minus(){
	var input=$(this).next();
	var num_next=parseInt($(input).val())-1;
	var item_price=$(this).parents("tr").data("price");
	$("#total_price").text(parseInt($("#total_price").text())-item_price);
	if (num_next >0){
		update_num();
		$(input).val(num_next);
	} else {
		$(input).val(num_next);
		update_num();
		$(this).parents("tr").remove();
	}
}

$(".detail").mouseover(function(){
	$(".dropdown-info").show();
	$(this).removeClass("detail");
	$(this).addClass("detail-shadowed");
});

$(".detail").mouseout(function(){
	$(".dropdown-info").hide();
	$(this).removeClass("detail-shadowed");
	$(this).addClass("detail");
});

$(".tab-bar").find("button").click(function (){
	//alert(this);
	$(".tab-bar").find("button").removeClass("button-pressed");
	$(this).addClass("button-pressed");
	var target= $(this).data("target");
	//$("#"+target).siblings().hide();
	$(".tab-container").children().hide();
	$("."+target).show();
});

$(document).on("click",".list-item",function(){
	var item_id=$(this).data("id");
	var item_name=$(this).find(".title").html();
	var item_price=parseInt($(this).data("price"));
	
	var row=$("#cart-items").find("tr[data-id='"+item_id+"']");
	//alert(row.length);
	if (row.length > 0 ){
		var num_now=$(row).find("input");
		var num_next=parseInt(num_now.val())+1;
		if (num_next<=99){
			$(num_now).val(num_next);
			$("#total_price").text(parseInt($("#total_price").text())+item_price)
			update_num();
		} 
	}
	else {
		var new_item=$('<tr data-id="'+item_id+'" data-price="'+item_price+'"><td>'+item_name
		+'</td><td><span class="minus fl">-</span><input type="text" maxlength="2" class="count fl" value="1"/><span class="plus fl">+</span></td><td>&yen;'+
		item_price+'</td></tr>');
		new_item.find("span.plus").click(cart_plus);
		new_item.find("span.minus").click(cart_minus);
		$("#cart-items").append(new_item);
		$("#total_price").text(parseInt($("#total_price").text())+item_price);
		$num = $(this).find(".num");
		$num.attr("style","display:block");
		$num.attr("id",item_id+"num");
		$num.html("1");
	}
});
//直接修改菜的数量修改总价
$(document).on('input', '.count', function() {
	if($(this).val()<=99){
		if($(this).val()==0) alert("输入不正确！");
		var total=0;
		$("#cart-items tr:gt(0)").each(function(i){
			var item_price = $(this).data("price");
			var item_id = $(this).data("id");
			total+=(item_price*$(this).find(".count").val());
			$(".list-content").find("#"+item_id+"num").html($(this).find(".count").val());
		});
		$("#total_price").text(total);
	}
});
$("span.plus").click(cart_plus);

$("span.minus").click(cart_minus);


$(".clear").click(function(){
	$(".list-content").find(".num").attr("style","display:none");
	$("#cart-items").find("tr:gt(0)").remove();
	$("#total_price").text("0")
	
});
$(function(){
	$.ajax({
		url:"code/get_Shop_InfoByID.jsp",
		type:"get",
		data:{store_id:$("#store_id").val()},
		success:function(data){
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
			//alert(shop_name[0].firstChild.nodeValue);
			$("title").text(shop_name[0].firstChild.nodeValue);
			$(".shop_name").text(shop_name[0].firstChild.nodeValue);
			$(".score-board-title").html("("+shop_name[0].firstChild.nodeValue+")总体评分");
			$("#shop_address").text(shop_address[0].firstChild.nodeValue);
			$("#shop_phone").text(shop_phone[0].firstChild.nodeValue);
			$("#shop_license").text(shop_license[0].firstChild.nodeValue);
			var add="";
			if(score[0].firstChild.nodeValue==-1) {
				add="<strong>暂无</strong><span class=\"desc\"></span>";
				$("#show_score").text("暂无");
				$(".star-score").attr("style","width:0px");
			}
			else{
				add="<strong>"+score[0].firstChild.nodeValue+"</strong><span class=\"desc\">分</span>";
				var len = 120*score[0].firstChild.nodeValue/5.0
				//alert(len);
				$("#show_score").text(score[0].firstChild.nodeValue);
				$(".star-score").attr("style","width:"+len+"px");
			}
			$("#score").append(add);
			if(ave_sendtime[0].firstChild.nodeValue==3650){
				add="<strong>暂无</strong>";
			}
			else{
				add="<strong>"+ave_sendtime[0].firstChild.nodeValue+"</strong>分钟";
			}
			$("#ave_sendtime").append(add);
			add ="<strong >"+sell_num[0].firstChild.nodeValue+"</strong>单";
			$("#sell_num").append(add);
			var notice = shop_notice[0].firstChild.nodeValue;
			if(notice=="null")
				$(".broadcast-body").html("<p>该商家还未设置公告。</p>");
			else
				$(".broadcast-body").html("<p>"+notice+"</p>");
			var dcnt;
			if(discount[0].firstChild.nodeValue!="null"){
				var dt =  discount[0].firstChild.nodeValue.split("-");
				dcnt="<span class='glyphicon glyphicon-bullhorn'></span>:满"+dt[0]+"减"+dt[1];
			}
			else dcnt="<span class='glyphicon glyphicon-bullhorn'></span>:该商家暂无优惠";
			$("#shop_discount").html(dcnt);
		}
	});
})
$(function(){
	$.ajax({
		url:"code/get_Shop_Dish_List.jsp",
		type:"get",
		data:{store_id:$("#store_id").val()},
		success:function(data){
			var type_id=$(data).find("type_id");
			var type=$(data).find("type");
			var dish_num=$(data).find("dish_num");
			var dish_id=$(data).find("dish_id");
			var dish_name=$(data).find("dish_name");
			var price=$(data).find("price");
			var store_id=$(data).find("store_id");
			var sell_num = $(data).find("sell_num");
			//alert(type_id.length);
			for(var i = 0,s=0;i<type_id.length;++i){
				//alert(type[i].firstChild.nodeValue);
				var add_type="";
				if(i==0)
					add_type="<div class=\"type\" ><a class=\"selected type_touch\" href=\"#"+type_id[i].firstChild.nodeValue+"jump\">"+type[i].firstChild.nodeValue+"</a></div>"
				else
				 add_type="<div class=\"type\"><a href=\"#"+type_id[i].firstChild.nodeValue+"jump\" class=\"type_touch\">"+type[i].firstChild.nodeValue+"</a></div>"
				$(".food-type").append(add_type);
				var add_title="<a name=\""+type_id[i].firstChild.nodeValue+"jump\" id=\""+type_id[i].firstChild.nodeValue+"jump\"></a>"
						+"<div class=\"list-title\">"+type[i].firstChild.nodeValue+"</div>"
						+"<div class=\"list-title list-title-fixed\">"+type[i].firstChild.nodeValue+"</div>"
			/*			+"<div class=\"list-desc\">这里是描述，可选</div>"*/
						+"<div class=\"list-content\" id=\""+type_id[i].firstChild.nodeValue+"\"></div>";
				$(".item-list").append(add_title);
				for(var j=0;j<dish_num[i].firstChild.nodeValue;++j,++s){
					var add_dish ="<div class=\"list-item\" data-id=\""+dish_id[s].firstChild.nodeValue+"\" data-price="+price[s].firstChild.nodeValue+">"
								+"<div class=\"title fl\">"+dish_name[s].firstChild.nodeValue+"</div>"
								+"<div class=\"sold fr\">总销量"+sell_num[s].firstChild.nodeValue+"</div>"
								+"<div class=\"plus fr\">+</div>"
								+"<div class=\"price fr\">&yen"+price[s].firstChild.nodeValue+"元/份</div>"
								+"<div class=\"plus fr num\"  style=\"display:none\">6</div></div>";
					$("#"+type_id[i].firstChild.nodeValue).append(add_dish);
				}
			}
			//绑定selected效果
			$(".type_touch").on("click",function(){
				$(".selected").removeClass("selected");
				$(this).addClass("selected");
			})
		}
	});
})
$(function(){
	$.ajax({
		url:"code/count_Star.jsp",
		type:"get",
		data:{store_id:$("#store_id").val()},
		success:function(data){
			var one = $(data).find("one_star");
			var two = $(data).find("two_star");
			var three = $(data).find("three_star");
			var four = $(data).find("four_star");
			var five = $(data).find("five_star");
			var one_star = parseInt(one[0].firstChild.nodeValue);
			var two_star = parseInt(two[0].firstChild.nodeValue);
			var three_star = parseInt(three[0].firstChild.nodeValue);
			var four_star = parseInt(four[0].firstChild.nodeValue);
			var five_star = parseInt(five[0].firstChild.nodeValue);
			all=parseInt(one_star+two_star+three_star+four_star+five_star);
			$(".score-board-subtitile").html("(共收到"+all+"份美食评价)");
			var percent_one;
			var percent_two ;
			var percent_three;
			var percent_four ;
			var percent_five;
			if(all!=0){
				 percent_one = one_star *100/ all ;
				 percent_two = two_star *100 / all ;
				 percent_three = three_star *100 / all ;
				 percent_four = four_star *100 / all ;
				 percent_five = five_star *100 / all ;
			}
			else{
				percent_one = 0 ;
				 percent_two = 0 ;
				 percent_three =0 ;
				 percent_four = 0 ;
				 percent_five = 0 ;
			}
			//alert(all);
			var len = percent_one*80.0/100;
			$("#one_star").attr("style","width:"+len+"px");
			$("#one_star").next().html(percent_one.toFixed(0)+"%");
			len = percent_two*80.0/100;
			$("#two_star").attr("style","width:"+len+"px");
			$("#two_star").next().html(percent_two+"%");
			len = percent_three*80.0/100;
			//alert(percent_three);
			$("#three_star").attr("style","width:"+len+"px");
			$("#three_star").next().html(percent_three+"%");
			len = percent_four*80.0/100;
			$("#four_star").attr("style","width:"+len+"px");
			$("#four_star").next().html(percent_four+"%");
			len = percent_five*80.0/100;
			$("#five_star").attr("style","width:"+len+"px");
			$("#five_star").next().html(percent_five+"%");
			var good = five_star+four_star;
			var mid = three_star+two_star;
			var bad = one_star;
			$("#allcmt").parent().html("全部评价("+all+")");
			$("#goodcmt").parent().html("好评("+good+")");
			$("#midcmt").parent().html("中评("+mid+")");
			$("#badcmt").parent().html("差评("+bad+")");
			var value = $(".cselected").html().replace(/[^0-9]/ig,""); 
			$("#zt").val(value);
		}
	});
})
function update_Comments_list(){
	$.ajax({
		url:"code/get_Comments.jsp",
		type:"get",
		data:{store_id:$("#store_id").val(),cmt_type:$(".cselected").attr("id"),nowpage:nowpage},
		success:function(data){
			var score =$(data).find("score");
			var time =$(data).find("time");
			var username = $(data).find("username");
			var comments =$(data).find("comments");
			$(".comments").find("ul").empty();
			for(var i=0 ;i<score.length;++i){
				var add_cmt="<li class=\"comment\"><div class=\"info clearfix\">"
						+"<span class=\"field clearfix\">"
						+"<span class=\"name fl\">"+username[i].firstChild.nodeValue+"</span>"
						+"<span class=\"fl\">总体评价</span><i class=\"icon i-star\"></i>";
				var sc = score[i].firstChild.nodeValue;
				if(sc>=4.5)
					add_cmt+="<i class=\"icon i-star\"></i><i class=\"icon i-star\"></i><i class=\"icon i-star\"></i><i class=\"icon i-star\"></i>";
				else if(sc<4.5&&sc>=3.5)
					add_cmt+="<i class=\"icon i-star\"></i><i class=\"icon i-star\"></i><i class=\"icon i-star\"></i><i class=\"icon i-star-empty\"></i>";
				else if(sc<3.5&&sc>=2.5)
					add_cmt+="<i class=\"icon i-star\"></i><i class=\"icon i-star\"></i><i class=\"icon i-star-empty\"></i><i class=\"icon i-star-empty\"></i>";
				else if(sc<2.5&&sc>=1.5)
					add_cmt+="<i class=\"icon i-star\"></i><i class=\"icon i-star-empty\"></i><i class=\"icon i-star-empty\"></i><i class=\"icon i-star-empty\"></i>";
				else if(sc<1.5)
					add_cmt+="<i class=\"icon i-star-empty\"></i><i class=\"icon i-star-empty\"></i><i class=\"icon i-star-empty\"></i><i class=\"icon i-star-empty\"></i>";
				if(sc>=3.5)
					add_cmt+="<span class=\"feel fl\">好评</span>";
				else if(sc>=1.5)
					add_cmt+="<span class=\"feel fl\">中评</span>";
				else 
					add_cmt+="<span class=\"feel fl\">差评</span>";
				add_cmt=add_cmt+"<span class=\"fr\">"+time[i].firstChild.nodeValue+"</span></span></div>"
				+"<div class=\"comment-content\">"+comments[i].firstChild.nodeValue+"</div></li>";
				$(".comments").find("ul").append(add_cmt);
			}
		}
	});
}
$(function(){
	$(".filter").click(function(){
		nowpage=0;
		$(".cselected").removeClass("cselected");
		$(this).addClass("cselected");
		var value = $(".cselected").html().replace(/[^0-9]/ig,""); 
		$("#zt").val(value);
		update_Comments_list();
	});
	update_Comments_list();
})
$(function(){
	nowpage=0;
	$("#first").click(function(){
		nowpage=0;
		update_Comments_list();
	});
	$("#prev").click(function(){
		if(nowpage>0)
			--nowpage;
			update_Comments_list();
		});
	$("#next").click(function(){
		if(nowpage<$("#zt").val()-1)
			++nowpage;
			update_Comments_list();
	});
	$("#last").click(function(){
		nowpage=$("#zt").val()-1;
		update_Comments_list();
	});
})
