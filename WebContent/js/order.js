$(".address:gt(0)").hide();

$(document).on("mouseover",".address",function(){
	$(this).find(".modify-box").show();
});

$(document).on("mouseout",".address",function(){
	$(this).find(".modify-box").hide();
});

$(document).on("click",".address",function(){
	$(".address").removeClass("address-selected");
	$(this).addClass("address-selected");
	$(this).insertBefore($(".address:first"));
	$(".address:gt(0)").slideToggle("slow");
});

$(".footer-btn").click(function(){
	$(".address:gt(0)").slideToggle("slow");
	$(this).parents(".address-footer").toggleClass("grean-border");
	$(this).toggleClass("grean-border");
	if ($(this).text()=="显示所有地址"){
		$(this).text("收起所有地址");
	} else {
		$(this).text("显示所有地址");
	}
});

$(".field:last").find("a").click(function(){
	$(".field:last").find("a").removeClass("selected");
	$(this).addClass("selected");
});