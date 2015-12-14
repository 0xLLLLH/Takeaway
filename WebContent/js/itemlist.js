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
