$(".tab-bar").find("button").click(function (){
	//alert(this);
	$(".tab-bar").find("button").removeClass("button-active");
	$(this).addClass("button-active");
	var target= $(this).data("toggle");
	//$("#"+target).siblings().hide();
	$("#tab-container").children().hide();
	$("#"+target).show();
	$(".text-field").find("span:last").html($(this).html());
});

$(function () {
  $('[data-toggle="popover"]').popover();
})