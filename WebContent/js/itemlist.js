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
			$("#shop_address").text(shop_address[0].firstChild.nodeValue);
			$("#shop_phone").text(shop_phone[0].firstChild.nodeValue);
			$("#shop_license").text(shop_license[0].firstChild.nodeValue);
			var add="";
			if(score[0].firstChild.nodeValue==-1) 
				add="<strong>暂无</strong><span class=\"desc\"></span>";
			else
				add="<strong>"+score[0].firstChild.nodeValue+"</strong><span class=\"desc\">分</span>";
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

