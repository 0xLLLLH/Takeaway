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
	alert($(this).data("id"));
	var item_name=$(this).find(".title").html();
	var item_price=$(this).find(".price").html().split('/',2)[0];
	var new_item='<tr><td>'+item_name
	+'</td><td><span class="plus fl">-</span><input type="text" class="count fl" value="1"/><span class="plus fl">+</span></td><td>'+
	item_price+'</td></tr>';
	$("#cart-items").append(new_item);
});

$(".clear").click(function(){
	$("#cart-items").find("tr:gt(0)").empty();
});

function refresh_money(){
	
}