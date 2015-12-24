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

$(document).on("click",".toggle-modal",function(event){
	//在此处对模态框内容进行修改
	//修改完成后弹出
	$('#myModal').find('.modal-title').text($(this).data("title"));
	$('#myModal').modal({
		  keyboard: false
		})
		event.stopPropagation(); 
})

$('#myModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var title = button.data("title") // Extract info from data-* attributes
	  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this);
	})