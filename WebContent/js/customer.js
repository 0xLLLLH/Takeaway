$(".intro").click(function(){
	var detail=$(this).next();
	if (detail.is(":visible")==true){
		detail.hide("slow");
	} else {
		$(".detail").hide();
		detail.show("slow");
	}
});

$(".tab-button").click(function(){
	$(".tab-container").children().hide();
	$('.'+$(this).data("toggle")).show();
});

function addColor(){
	$(this).siblings().removeClass("i-star-full-n");
	$(this).addClass("i-star-full-n");
	$(this).prevAll().addClass("i-star-full-n");
	var level="";
	switch ($(this).prevAll().length){
	case 0: level="差评";break;
	case 1: level="差评";break;
	case 2: level="中评";break;
	case 3: level="好评";break;
	case 4: level="好评";break;
	}
	var inform=$(this).parents().next(".inform");
	inform.text(level);
	inform.addClass("grean");
}
function removeColor(){
	$(this).removeClass("i-star-full-n");
	$(this).prevAll().removeClass("i-star-full-n");
	var inform=$(this).parents().next(".inform");
	inform.removeClass("grean");
	var inform_text="";
	var rank=parseInt($(this).parents().data("rank"));
	switch (rank){
	case 0: inform_text="点击星星打分";break;
	case 1: inform_text="差评";break;
	case 2: inform_text="差评";break;
	case 3: inform_text="中评";break;
	case 4: inform_text="好评";break;
	case 5: inform_text="好评";break;
	}
	inform.text(inform_text);
	
	if(rank!=0){
		$(this).parents().find("i:lt("+rank+")").addClass("i-star-full-n");
		inform.addClass("grean");
	}
}


$("comment-area").find(".i-star-empty-n").mouseover(addColor);

$("comment-area").find(".i-star-empty-n").mouseout(removeColor);

$("comment-area").find(".i-star-empty-n").click(function(){
	$(this).parents().data("rank",$(this).prevAll().length+1);
});