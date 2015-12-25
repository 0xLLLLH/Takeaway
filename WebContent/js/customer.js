$(function(){
	//$("#load_div").hide();
	$(document).ajaxStart(function(){
		$("#load_div").show();
	});
	$(document).ajaxStop(function(){
		$("#load_div").hide();
	});
})
$(document).on("click",".intro",function(){
	var detail=$(this).next();
	if (detail.is(":visible")==true){
		detail.hide("slow");
	} else {
		$(".detail").hide();
		detail.show("slow");
	}
})

$(".tab-button").click(function(){
	$(".tab-container").children().hide();
	$('.'+$(this).data("toggle")).show();
	$(".tab-button").removeClass("selected");
	$(this).addClass("selected");
});

function addColor(){
	$(this).siblings().removeClass("i-star-full-n");
	$(this).addClass("i-star-full-n");
	$(this).prevAll().addClass("i-star-full-n");
	var level="";
	switch ($(this).prevAll().length){
	case 0: level="差评";break;
	case 1: level="中评";break;
	case 2: level="中评";break;
	case 3: level="好评";break;
	case 4: level="好评";break;
	}
	var inform=$(this).parent().next(".inform");
	inform.text(level);
	inform.addClass("grean");
}
function removeColor(){
	$(this).removeClass("i-star-full-n");
	$(this).prevAll().removeClass("i-star-full-n");
	var inform=$(this).parent().next(".inform");
	inform.removeClass("grean");
	var inform_text="";
	var rank=parseInt($(this).parent().data("rank"));
	switch (rank){
	case 0: inform_text="点击星星打分";break;
	case 1: inform_text="差评";break;
	case 2: inform_text="中评";break;
	case 3: inform_text="中评";break;
	case 4: inform_text="好评";break;
	case 5: inform_text="好评";break;
	}
	inform.text(inform_text);
	
	if(rank!=0){
		$(this).parent().find("i:lt("+rank+")").addClass("i-star-full-n");
		inform.addClass("grean");
	}
}

//提交评论
$(document).on("click",".submit_cmt",function(){
	var star = $(this).parents(".comment-area").find(".stars-rank").data("rank");
	if(star==0)
		alert("请点击星星打分！");
	else{
		var $right=$(this).parents(".detail-right");
		var comments=  $right.find(".comments_text").val();
		//这里添加提交到数据库的代码
		
		
		//接着显示评论
		
		var new_item='<div class="comment-result" data-step="3">'
		+'<div class="onerow clearfix"><label style="font-size: 18px;">我的评价</label></div>'
		+'<div class="onerow clearfix">'
		+'<label class="fl"><span class="color_red">*</span>总体评价：</label>'
		+'<span class="stars-rank fl" data-rank="'+star+'">';
		for (var i=0;i<star;i++)
			new_item+='<i class="fl icon i-star-full-n"></i>';
		for (var i=star;i<5;i++)
			new_item+='<i class="fl icon i-star-empty-n"></i>';
		new_item=new_item+'</span>'
		+'</div>'
		+'<div class="onerow clearfix">'
		+'<span class="fl"><span class="color_red">*</span><label>送达时间：</label>2015-12-22 18:50</span>'
		+'</div>'
		+'<div class="onerow clearfix">'
		+'<span class="fl"><span class="color_red" style="visibility: hidden;">*</span><label>补充评价：</label></span>'
		+'<div class="comment fl">'
		+comments
		+'</div>'
		+'</div>'
		+'</div>';
		$right.empty();
		$right.append(new_item);
	}
	
})

$(function(){
	$.ajax({
		url:"code/get_Order_Info.jsp",
		type:"get",
		data:{username:$("#username").val()},
		success:function(data){
			var id=$(data).find("id");
			var address_id=$(data).find("address_id");
			//var dish_id_string=$(data).find("dish_id_string");
			var payment_type=$(data).find("payment_type");
			//var receiving_time=$(data).find("receiving_time");
			var remark=$(data).find("remark");
			var setorder_time=$(data).find("setorder_time");
			var state=$(data).find("state");
			var store_id=$(data).find("store_id");
			var time_from_setorder=$(data).find("time_from_setorder");
			var address=$(data).find("address");
			var shop_name=$(data).find("shop_name");
			var shop_phone = $(data).find("shop_phone");
			var dish_count = $(data).find("dish_count");
			var dish_id=$(data).find("dish_id");
			var dish_num=$(data).find("dish_num");
			var dish_name=$(data).find("dish_name");
			var dish_price=$(data).find("dish_price");
			var discount=$(data).find("discount");
			var name=$(data).find("name");
			var phone =$(data).find("phone");
			//alert(id.length);
			$(".order-list").empty();
			for(var i = 0,s=0;i<id.length;++i){
				
				var add_order='<div class="order">'
						+'<a class="order-another btn btn-success">再来一单</a>'
						+'<div class="intro">'
						+'<a target="_blank" class="preview fl" href="ItemList.jsp?store_id='+store_id[i].firstChild.nodeValue+'">'
						+'<img class="img-responsive" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=398990237,3888602267&fm=58">'
						+'</a>'
						+'<div class="info">'
						+'<div class="info-row">'
						+'<a target="_blank" href="ItemList.jsp?store_id='+store_id[i].firstChild.nodeValue+'">'+shop_name[i].firstChild.nodeValue+'</a><span>商家电话：'+shop_phone[i].firstChild.nodeValue+'</span>'
						+'</div>'
						+'<div class="info-row">'
						+'<span>订单号：'+id[i].firstChild.nodeValue+'</span><span>下单时间：'+setorder_time[i].firstChild.nodeValue.split(':')[0]+':'+setorder_time[i].firstChild.nodeValue.split(':')[1]+'</span><a style="width: auto;margin-left:150px;"><span style="width: auto;">投诉商家</span></a>'
						+'</div>'
						+'</div>'
						+'</div>'
						+'<div class="detail clearfix"  style="display: none;">'
						+'<div class="detail-left">'
						var totalprice = 0.0;
						var add_dish="";
						for(var j = 0 ; j<dish_count[i].firstChild.nodeValue;++j,++s){
							totalprice+=parseFloat(dish_price[s].firstChild.nodeValue)*parseInt(dish_num[s].firstChild.nodeValue);
							add_dish=add_dish+'<div class="clearfix"><div class="fl">'+dish_name[s].firstChild.nodeValue
							+'</div><div class="fr">&yen;'+dish_price[s].firstChild.nodeValue+'*'+dish_num[s].firstChild.nodeValue+'</div></div>';
						}
	 					var dcnt = discount[i].firstChild.nodeValue.split("-");
	 					var cut ;
	 					if(totalprice>=parseInt(dcnt[0])){
	 						cut=dcnt[1];
	 						totalprice-=parseInt(dcnt[1]);
	 					}
	 					else 
	 						cut="不满足优惠要求";
	 add_order=add_order+'<div class="field">菜品共'+dish_count[i].firstChild.nodeValue+'份，总价&yen;'+totalprice+'元</div>'
						+'<div class="field">'+add_dish+'<div class="clearfix"><div class="discount fl">满减优惠</div><div class="discount fr">-&yen;'
	 					+cut
	 					+'</div></div>'
						/*+'<div class="clearfix"><div class="fl">菜名</div><div class="fr">&yen;15*1</div></div>'
						+'<div class="clearfix"><div class="fl">菜名</div><div class="fr">&yen;15*1</div></div>'
						+'<div class="clearfix"><div class="fl">菜名</div><div class="fr">&yen;15*1</div></div>'
						+'<div class="clearfix"><div class="discount fl">满减优惠</div><div class="discount fr">-&yen;15*1</div></div>'*/
						+'</div>'
						+'<div class="field">'
						+'<p>地址：'+address[i].firstChild.nodeValue+'</p>'
						+'<p>姓名：'+name[i].firstChild.nodeValue+'</p>'
						+'<p>电话：'+phone[i].firstChild.nodeValue+'</p>'
						+'<p>备注：'+remark[i].firstChild.nodeValue+'</p>'
						+'</div>'
						+'</div>'
						+'<div class="detail-right">';
	 					var step=state[i].firstChild.nodeValue;
	 					if(step==1){//下单成功等待付款
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><button class="btn btn-success pay btn-next">去付款</button>&nbsp;&nbsp;<button class="btn btn-default  btn-cancel">取消订单</button></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==10){//下单成功，取消订单
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单取消</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><button class="btn btn-success btn-next">选择其他商家</button>&nbsp;&nbsp;<button class="btn btn-default btn-cancel">订单反馈</button></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==11){//下单成功，成功付款，等待接单
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><button class="btn btn-success btn-next">修改收货地址</button>&nbsp;&nbsp;<button class="btn btn-default btn-cancel">取消订单</button></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==110){//下单成功，成功付款，拒绝接单
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-ordernotok fl"></i><span class="fl" style="font-weight: bold;">商家拒绝接单，已退款到余额</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><button class="btn btn-success btn-next">选择其他商家</button>&nbsp;&nbsp;<button class="btn btn-default btn-cancel">订单反馈</button></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==111){//下单成功，成功付款，成功接单
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">商家接单，制作配送中</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><button class="btn btn-success btn-next">确认收货</button>&nbsp;&nbsp;<button class="btn btn-default">我要催单</button>&nbsp;&nbsp;<button class="btn btn-default btn-cancel">申请退款</button></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==112){//下单成功，成功付款，取消订单
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-ordernotok fl"></i><span class="fl" style="font-weight: bold;">用户取消，已退款到余额</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><button class="btn btn-success btn-next">选择其他商家</button>&nbsp;&nbsp;<button class="btn btn-default btn-cancel">取消订单</button></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==1110){//下单成功，成功付款，成功接单，申请退款
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-ordernotok fl"></i><span class="fl" style="font-weight: bold;">商家接单，制作配送中</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">退款中</span><span class="fr">2015-12-23 11:14</span></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==1111){//下单成功，成功付款，成功接单，订单完成
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">商家接单，制作配送中</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单完成</span><span class="fr">2015-12-23 11:14</span></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==11100){//下单成功，成功付款，成功接单，退款失败，继续配送
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-ordernotok fl"></i><span class="fl" style="font-weight: bold;">商家接单，制作配送中</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-ordernotok fl"></i><span class="fl" style="font-weight: bold;">商家拒绝退款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">商家接单，制作配送中</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><button class="btn btn-success btn-next">确认收货</button>&nbsp;&nbsp;<button class="btn btn-default btn-cancel">我要催单</button>&nbsp;&nbsp;<button class="btn btn-default disabled " >申请退款</button></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==11101){//下单成功，成功付款，成功接单，退款失败，继续配送,订单完成
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">商家接单，制作配送中</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单完成</span><span class="fr">2015-12-23 11:14</span></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==111001){//下单成功，成功付款，成功接单，，申请退款，退款成功
	 						add_order=add_order+'<div class="progress-area" data-step="'+step+'">'/*<!--  progress-area-->*/
	 						+'<div class="step">'
	 						+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">商家接单，制作配送中</span><span class="fr">2015-12-23 11:14</span></p>'
							+'<p><i class="i-orderarrow fl"></i></p>'
							+'</div>'
							+'<div class="step">'
							+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">退款成功,已退款到余额</span><span class="fr">2015-12-23 11:14</span></p>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==2){//订单完成，进入评价页面
	 						var orderTime =setorder_time[i].firstChild.nodeValue;
	 						add_order=add_order+'<div class="comment-area" data-step="'+step+'">'           
							+'<div class="onerow clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-size: 20px;">收货成功，赏个评价吧！</span></div>'
							+'<div class="onerow clearfix"><label>评价</label></div>'
							+'<div class="onerow clearfix">'
							+'<span class="fl"><span class="color_red">*</span>总体评价：</span>'
							+'<span class="stars-rank fl" data-rank="0">'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'</span>'
							+'<span class="inform fl">点击星星打分</span>'
							+'</div>'
							+'<div class="onerow clearfix">'
							+'<span class="fl"><span class="color_red">*</span>送达时间：当天</span>'
							+'<select class="fl">';
	 						var now=new Date(orderTime);
	 						var time_back=2*60;
	 						var per=15;
	 						now.setHours(now.getHours()-time_back/60, Math.floor(now.getMinutes()/per)*per, 0, 0)
	 						for (var i=0;i<time_back/per;i++){
	 							now.setMinutes(now.getMinutes()+per);
	 							var m=now.getMinutes();
	 							var mm=""+now.getMinutes();
	 							if (m<10)
	 								mm='0'+mm;
	 							add_order+='<option value="'+now.toString()+'">'+now.getHours()+":"+mm+'</option>';
	 						}
							
							add_order=add_order+'</select>'
							+'<span class="fl">送达</span>'
							+'</div>'
							+'<div class="onerow clearfix">'
							+'<span class="fl"><span class="color_red" style="visibility: hidden;">*</span>补充评价：</span>'
							+'<textarea rows="5" cols="45" class="comments_text"></textarea>'
							+'</div>'
							+'<div class="onerow submitbar">'
							+'<button class="btn btn-success submit_cmt">提交</button>'
							+'<span class="inform">提交之后不能修改哦~</span>'
							+'</div>'
							+'<div class="comment-footer">'
							+'<span class="footer-inform">商家没有送餐？您可以致电客服<span class="color_green">400-233-3333</span>或 <a href="#" class="color_green">投诉商家</a>。</span>'
							+'</div>'
							+'</div>';
	 					}
	 					else if(step==3){//评价完成
	 						add_order=add_order+'<div class="comment-result" data-step="'+step+'">'
							+'<div class="onerow clearfix"><label style="font-size: 18px;">我的评价</label></div>'
							+'<div class="onerow clearfix">'
							+'<label class="fl"><span class="color_red">*</span>总体评价：</label>'
							+'<span class="stars-rank fl" data-rank="0">'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'<i class="fl icon i-star-empty-n"></i>'
							+'</span>'
							+'</div>'
							+'<div class="onerow clearfix">'
							+'<span class="fl"><span class="color_red">*</span><label>送达时间：</label>2015-12-22 18:50</span>'
							+'</div>'
							+'<div class="onerow clearfix">'
							+'<span class="fl"><span class="color_red" style="visibility: hidden;">*</span><label>补充评价：</label></span>'
							+'<div class="comment fl">评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价'
							+'评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价</div>'
							+'</div>'
							+'</div>';
	 					}					
						add_order=add_order+'</div>'
						+'</div>'
						+'</div>';
				$(".order-list").append(add_order);		
			}
			$(".comment-area").find(".i-star-empty-n").mouseover(addColor);

			$(".comment-area").find(".i-star-empty-n").mouseout(removeColor);

			$(".comment-area").find(".i-star-empty-n").click(function(){
				$(this).parent().data("rank",$(this).prevAll().length+1);
			});
		}
	});
})

/* 
 * 针对btn-success和btn-default分别进行，不同进度的点击事件绑定
 * 可以通过修改类名达到其他类别按钮的响应
 * 数据库操作在每个case中进行
 */
$(document).on("click",".btn-next",function(){
	var $pa=$(this).parents(".progress-area");
	var step=parseInt($pa.data("step"));
	var $right=$(this).parents(".detail-right");
	var new_div="";
	switch (step) {
	case 1://下单成功等待付款
		//在此处进行数据库操作
		
		new_div=new_div+'<div class="progress-area" data-step="11">'/*<!--  progress-area-->*/
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><i class="i-orderarrow fl"></i></p>'
			+'</div>'
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><button class="btn btn-success btn-next">修改收货地址</button>&nbsp;&nbsp;<button class="btn btn-default btn-cancel">取消订单</button></p>'
			+'</div>'
			+'</div>';
		$right.empty();
		$right.append($(new_div));
		break;
	case 10://下单成功，取消订单
		window.location.href="ShopList.jsp";
		break;
	case 11://下单成功，成功付款，等待接单
		//修改收货地址，暂时没做
		break;
	case 110://下单成功，成功付款，拒绝接单
		window.location.href="ShopList.jsp";
		break;


	case 1110://下单成功，成功付款，成功接单，申请退款
		//无按钮
		break;
	case 1111://下单成功，成功付款，成功接单，订单完成
		//无按钮
		break;
	case 111://下单成功，成功付款，商家接单
	case 11100://下单成功，成功付款，成功接单，退款失败，继续配送
		new_div=new_div+'<div class="comment-area" data-step="2">'           
		+'<div class="onerow clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-size: 20px;">收货成功，赏个评价吧！</span></div>'
		+'<div class="onerow clearfix"><label>评价</label></div>'
		+'<div class="onerow clearfix">'
		+'<span class="fl"><span class="color_red">*</span>总体评价：</span>'
		+'<span class="stars-rank fl" data-rank="0">'
		+'<i class="fl icon i-star-empty-n"></i>'
		+'<i class="fl icon i-star-empty-n"></i>'
		+'<i class="fl icon i-star-empty-n"></i>'
		+'<i class="fl icon i-star-empty-n"></i>'
		+'<i class="fl icon i-star-empty-n"></i>'
		+'</span>'
		+'<span class="inform fl">点击星星打分</span>'
		+'</div>'
		+'<div class="onerow clearfix">'
		+'<span class="fl"><span class="color_red">*</span>送达时间：当天</span>'
		+'<select class="fl">';
		var now=new Date();
		var time_back=2*60;
		var per=15;
		now.setHours(now.getHours()-time_back/60, Math.floor(now.getMinutes()/per)*per, 0, 0)
		for (var i=0;i<time_back/per;i++){
			now.setMinutes(now.getMinutes()+per);
			var m=now.getMinutes();
			var mm=""+now.getMinutes();
			if (m<10)
				mm='0'+mm;
			new_div+='<option value="'+now.toString()+'">'+now.getHours()+":"+mm+'</option>';
		}
		new_div=new_div+'</select>'
		+'<span class="fl">送达</span>'
		+'</div>'
		+'<div class="onerow clearfix">'
		+'<span class="fl"><span class="color_red" style="visibility: hidden;">*</span>补充评价：</span>'
		+'<textarea rows="5" cols="45" class="comments_text"></textarea>'
		+'</div>'
		+'<div class="onerow submitbar">'
		+'<button class="btn btn-success submit_cmt">提交</button>'
		+'<span class="inform">提交之后不能修改哦~</span>'
		+'</div>'
		+'<div class="comment-footer">'
		+'<span class="footer-inform">商家没有送餐？您可以致电客服<span class="color_green">400-233-3333</span>或 <a href="#" class="color_green">投诉商家</a>。</span>'
		+'</div>'
		+'</div>';
		
		$right.empty();
		$right.append($(new_div));
		$right.find(".comment-area").find(".i-star-empty-n").mouseover(addColor);
		$right.find(".comment-area").find(".i-star-empty-n").mouseout(removeColor);
		$right.find(".comment-area").find(".i-star-empty-n").click(function(){
			$(this).parent().data("rank",$(this).prevAll().length+1);
		});
		break;
	case 11101://下单成功，成功付款，成功接单，退款失败，继续配送,订单完成
		//无按钮
		break;
	case 111001://下单成功，成功付款，成功接单，退款成功
		//无按钮
		break;
	}
});
$(document).on("click",".btn-cancel",function(){
	var $pa=$(this).parents(".progress-area");
	var step=parseInt($pa.data("step"));
	var $right=$(this).parents(".detail-right");
	var new_div="";
	switch (step) {
	case 1://下单成功等待付款
		new_div=new_div+'<div class="progress-area" data-step="10">'/*<!--  progress-area-->*/
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><i class="i-orderarrow fl"></i></p>'
			+'</div>'
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单取消</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><button class="btn btn-success btn-next">选择其他商家</button>&nbsp;&nbsp;<button class="btn btn-default btn-cancel">订单反馈</button></p>'
			+'</div>'
			+'</div>';
		$right.empty();
		$right.append($(new_div));
		break;
	case 10://下单成功，取消订单
		//订单反馈，暂时没做
		break;
	case 11://下单成功，成功付款，等待接单
		//
		new_div=new_div+'<div class="progress-area" data-step="112">'/*<!--  progress-area-->*/
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><i class="i-orderarrow fl"></i></p>'
			+'</div>'
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><i class="i-orderarrow fl"></i></p>'
			+'</div>'
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-ordernotok fl"></i><span class="fl" style="font-weight: bold;">用户取消，已退款到余额</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><button class="btn btn-success btn-next">选择其他商家</button>&nbsp;&nbsp;<button class="btn btn-default btn-cancel">订单反馈</button></p>'
			+'</div>'
			+'</div>';
		$right.empty();
		$right.append($(new_div));
		break;
	case 110://下单成功，成功付款，拒绝接单
		//订单反馈，暂时没做
		break;
	case 111://下单成功，成功付款，商家接单
		//
		new_div=new_div+'<div class="progress-area" data-step="1110">'/*<!--  progress-area-->*/
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><i class="i-orderarrow fl"></i></p>'
			+'</div>'
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><i class="i-orderarrow fl"></i></p>'
			+'</div>'
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-ordernotok fl"></i><span class="fl" style="font-weight: bold;">商家接单，制作配送中</span><span class="fr">2015-12-23 11:14</span></p>'
			+'<p><i class="i-orderarrow fl"></i></p>'
			+'</div>'
			+'<div class="step">'
			+'<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">退款中</span><span class="fr">2015-12-23 11:14</span></p>'
			+'</div>'
			+'</div>';
		$right.empty();
		$right.append($(new_div));
		break;
	case 1110://下单成功，成功付款，成功接单，申请退款
		//无按钮
		break;
	case 1111://下单成功，成功付款，成功接单，订单完成
		//无按钮
	case 11100://下单成功，成功付款，成功接单，退款失败，继续配送
		//退款按钮无效，不用写
		break;
	case 11101://下单成功，成功付款，成功接单，退款失败，继续配送,订单完成
		//无按钮
		break;
	case 111001://下单成功，成功付款，成功接单，退款成功
		//无按钮
		break;
	}		
})




