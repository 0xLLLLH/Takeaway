$(window).scroll(function(event){
	if ($(".broadcast").offset().top+$(".broadcast").outerHeight(true)-$(document).scrollTop()<0){
		$(".broadcast-fixed").show();
	}else {
		$(".broadcast-fixed").hide();
	}
	$(".list-title").each(function(){
		if ($(this).offset().top+$(this).outerHeight(true)-$(document).scrollTop()<0){
			$(this).next().show();
			$(this).next().width($(".list-title").width());
		}else {
			$(this).next().hide();
		}
	});
});


function cart_plus(){
	var input=$(this).prev();
	var num_next=parseInt($(input).val())+1;
	if (num_next <=99){
		$(input).val(num_next);
		var item_price=$(this).parents("tr").data("price");
		$("#total_price").text(parseInt($("#total_price").text())+item_price);
	}
}
function cart_minus(){
	var input=$(this).next();
	var num_next=parseInt($(input).val())-1;
	var item_price=$(this).parents("tr").data("price");
	$("#total_price").text(parseInt($("#total_price").text())-item_price);
	if (num_next >0){
		$(input).val(num_next);
	} else {
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

$(".list-item").click(function(){
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
		} 
	}
	else {
		var new_item=$('<tr data-id="'+item_id+'" data-price="'+item_price+'"><td>'+item_name
		+'</td><td><span class="minus fl">-</span><input type="text" class="count fl" value="1"/><span class="plus fl">+</span></td><td>&yen;'+
		item_price+'</td></tr>');
		new_item.find("span.plus").click(cart_plus);
		new_item.find("span.minus").click(cart_minus);
		$("#cart-items").append(new_item);
		$("#total_price").text(parseInt($("#total_price").text())+item_price)
	}
});


$("span.plus").click(cart_plus);

$("span.minus").click(cart_minus);


$(".clear").click(function(){
	$("#cart-items").find("tr:gt(0)").remove();
	$("#total_price").text("0")
});
