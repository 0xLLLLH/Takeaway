
$(".address:gt(0)").hide();
$(function(){
	$('#myModal').find(".modal_firstPlace").val($("#place").text());
});
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

$(document).on("click",".footer-btn",function(){
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
$(function(){//第一波加载
	$.ajax({
		url:"code/get_Address.jsp",
		type:"get",
		data:{username:$("#username").val()},
		success:function(data){
			var address_id =$(data).find("address_id");
			var address=$(data).find("address");
			var name = $(data).find("name");
			var phone = $(data).find("phone");
			for(var i =0;i< address_id.length;++i){
				var add_address='<div class="address" id='+address_id[i].firstChild.nodeValue+'>'
						+'<span class="modify-box"><a class="toggle-modal update_address" data-target="#myModal" data-title="修改地址">修改</a>&nbsp;&nbsp;&nbsp;<a class="del_address">删除</a></span>'
						+'<p class="address-line nameandphone">'+name[i].firstChild.nodeValue+' : '+phone[i].firstChild.nodeValue+'</p><input type="text" style="display:none" value="'+name[i].firstChild.nodeValue+'" class="name"> <input type="text" style="display:none" value="'+phone[i].firstChild.nodeValue+'" class="phone">'
							+'<p class="address-line no-border all_place">'+address[i].firstChild.nodeValue+'</p>'
						+'</div>';
				$(".address-body").append(add_address);
			
			}
			$(".address:eq(0)").addClass("address-selected");
			$(".address:gt(0)").hide();
		}
	});
});
$(document).on("click",".toggle-modal",function(event){
	//在此处对模态框内容进行修改
	//修改完成后弹出
	$('#myModal').find('.modal-title').text($(this).data("title"));
	if($(this).data("title")=="添加新地址"){
		$('#myModal').find(".modal_secondPlace").val("");
		$('#myModal').find(".modal_name").val("");
		$('#myModal').find(".modal_phone").val("");
		$(".smt_address").off("click");
		$(".smt_address").on("click",function(){
			var now_name = $('#myModal').find(".modal_name").val();
			var now_phone = $('#myModal').find(".modal_phone").val();
			var now_place = $('#myModal').find(".modal_firstPlace").val()+"-"+$('#myModal').find(".modal_secondPlace").val();
			$.ajax({
				url:"code/insert_Address.jsp",
				type:"get",
				data:{username:$("#username").val(),name:now_name,phone:now_phone,place:now_place},
				success:function(data){
					var f=1;
					var add_address='<div class="address" id='+data.trim()+'>'
					+'<span class="modify-box"><a class="toggle-modal update_address" data-target="#myModal" data-title="修改地址">修改</a>&nbsp;&nbsp;&nbsp;<a class="del_address">删除</a></span>'
					+'<p class="address-line nameandphone">'+now_name+' : '+now_phone+'</p><input type="text" style="display:none" value="'+now_name+'" class="name"> <input type="text" style="display:none" value="'+now_phone+'" class="phone">'
						+'<p class="address-line no-border all_place">'+now_place+'</p>'
					+'</div>';
					if($(".address:eq(1)").is(":hidden")){
					//	alert("1");
						f=0;
					}
					$(".address-body").children("div:first").before(add_address);
					$(".address-selected").removeClass("address-selected");
					$(".address:eq(0)").addClass("address-selected");
					
					if(f==0)
						$(".address:gt(0)").hide();
				}
			});
		});
		
	}
	else if($(this).data("title")=="修改地址"){
		var now_id = $(this).parent().parent().attr("id");
		var $it=$(this);
		$.ajax({
			url:"code/get_AddressByid.jsp",
			type:"get",
			data:{address_id:now_id},
			success:function(data){
				//var address_id =$(data).find("address_id");
				var address=$(data).find("address");
				var name = $(data).find("name");
				var phone = $(data).find("phone");
				var alladdress = address[0].firstChild.nodeValue;
				var ad = alladdress.split("-");
				$('#myModal').find(".modal_secondPlace").val(ad[1]);
				$('#myModal').find(".modal_name").val(name[0].firstChild.nodeValue);
				$('#myModal').find(".modal_phone").val(phone[0].firstChild.nodeValue);
				$(".smt_address").off("click");
				$(".smt_address").on("click",function(){
					var now_name = $('#myModal').find(".modal_name").val();
					var now_phone = $('#myModal').find(".modal_phone").val();
					var now_place = $('#myModal').find(".modal_firstPlace").val()+"-"+$('#myModal').find(".modal_secondPlace").val();
					$it.parent().parent().find(".nameandphone").text(now_name+" : "+now_phone);
					$it.parent().parent().find(".all_place").text(now_place);
					$it.parent().parent().find(".name").val(now_name);
					$it.parent().parent().find(".phone").val(now_phone);
					$.ajax({   //更新数据
						url:"code/update_Address.jsp",
						tyep:"get",
						data:{address_id:now_id,name:now_name,phone:now_phone,place:now_place},
						success:function(){
							//alert("update");
						}
					});
				})
			}
		});
	}
	$('#myModal').modal({
		  keyboard: false
		})
		event.stopPropagation(); 
})
$(document).on("click",".del_address",function(event){
	var now_id = $(this).parent().parent().attr("id");
	$del_div =$(this).parent().parent();
	if(confirm("你确认要删除该地址吗？")){
		$.ajax({
			url:"code/delete_Address.jsp",
			type:"get",
			data:{id:now_id},
			success:function(){ 
				$del_div.hide("slow",function(){
					$del_div.remove();
					$(".address:eq(0)").show();
					$(".address:eq(0)").addClass("address-selected");
				});
			}
		});
	}
	event.stopPropagation();
})
$("#gobuy").click(function(){
	var now_remark=$("#remark").val();
	var type=$(".field").find(".selected").text();
	var order_type=0;
	if(type=="货到付款")
		order_type=0;
	else
		order_type=1;
	/*var now_name=$(".address-selected").find(".name").val();
	var now_phone=$(".address-selected").find(".phone").val();
	var now_place = $(".address-selected").find(".all_place").text();*/
	var address_id=$(".address-selected").attr("id");
	//alert(address_id);
	var total_price=$("#total_price").text();
	total_price=total_price.replace("￥","");
	var dish_string = "";
	var len=$("#dish_table tr").length;
	var discount_result="";
	var store_id = $("#shop_id").val();
	$("#dish_table tr:gt(0)").each(function(i){
		var item_id = $(this).data("id");
		var item_num = $(this).data("num");
		if(i<len-3){
			if(i==0)
				dish_string=dish_string+item_id+":"+item_num;
			else 
				dish_string=dish_string+"-"+item_id+":"+item_num;
		}
		if(i==len-3)
			discount_result+=$(this).children("td").eq(1).text();
	});
	$.ajax({
		url:"code/insert_Order.jsp",
		type:"get",
		data:{remark:now_remark,payment_type:order_type,address_id:address_id,username:$("#username").val(),
			total_price:total_price,dish_id_string:dish_string,discount_result:discount_result,store_id:store_id},
		success:function(){
				window.location.href="Customer.jsp";
		}	
	});
	//alert(discount_result);
	//alert(now_name+" "+now_phone+" "+now_place);
})
$('#myModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var title = button.data("title") // Extract info from data-* attributes
	  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this);
	})