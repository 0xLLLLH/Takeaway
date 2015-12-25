//$("#dLabel").mouseover(function (){
	//$('.dropdown').dropdown();
//});

function getCookie(c_name){
	if (document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1){ 
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end))
			} 
		}
	return "";
}
function change_account_link()
{
	var isLogin=$("#isLogin").val();
	if(isLogin==0)
	{
		$("#dLabel").hide();
		$("#notlg").show();
	}
	else if(isLogin==1)
	{
		$("#dLabel").show();
		$("#notlg").hide();
	}
}
$(function(){
/*	$("#dLabel").mouseover(function (){
		$(this).dropdown();
	});
	$("#dLabel").mouseout(function (){
		$(this).dropdown();
	});*/
	$("#place").text(getCookie('place'));
	change_account_link();
	$("#outlg").bind("click",function(){
		$.ajax({
			url:"code/set_Session.jsp",
			type:"get",
			success:function(){
				$("#isLogin").val("0");
				change_account_link();
			}
		});
	});	
	$("#lg_bnt").bind("click",function(){
		window.location.href="Signup.jsp?state=1";
	});
	$("#rg_bnt").bind("click",function(){
		window.location.href="Signup.jsp?state=0";
	});
})


///////////////////////////////分割线
function update_List(type,order,search){
	//alert(search);
	$.ajax({
		url: "code/get_Shop_Info.jsp",
		type: "get",
		//dataType:"json",
		data: { lng: getCookie('lng'), lat: getCookie('lat') ,type:type,order:order,search:search},
		success:function(data)
		{
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
			$("#shop_list").empty();//clear
			$("#search_shop_List").empty();//clear
			for(var i=0;i<id.length;++i)
			{
				var sc=score[i].firstChild.nodeValue==-1?"暂无":parseFloat(score[i].firstChild.nodeValue).toFixed(1);
				var notice = shop_notice[i].firstChild.nodeValue == "null"?"暂无公告":shop_notice[i].firstChild.nodeValue;
				var dcnt;
				if(discount[i].firstChild.nodeValue!=null){
					var dt =  discount[i].firstChild.nodeValue.split("-");
					dcnt="满"+dt[0]+"减"+dt[1];
				}
				else dcnt="无";
				//var dcnt = discount[i].firstChild.nodeValue =="null"?"无":discount[i].firstChild.nodeValue;
				var avetime = ave_sendtime[i].firstChild.nodeValue=="3650"?"暂无":ave_sendtime[i].firstChild.nodeValue+"分钟";
				var add="<li class = \"restaurant fl clearfix\" data-delay=\'{\"show\": 432, \"hide\": 100 }\'" 
					+"data-toggle=\"popover\" data-title=\"商家详情\" data-placement=\"left auto\" data-html=\"true\""
					+"data-template=\"<div class=\'popover\'  style=\'border:2px solid #5cb85c;width:220px\' role=\'tooltip\'><div class=\'arrow\'  style=\'border-color:#5cb85c;\'></div><h3 class=\'popover-title\'></h3><div class=\'popover-content\'></div></div>\""
					+"data-content=\"<label style=\'color:#5cb85c;\'>优惠信息</label><hr><p>"+dcnt+"</p><label style=\'color:#5cb85c;\'>商家地址</label><hr><p>"+shop_address[i].firstChild.nodeValue+"</p><label style=\'color:#5cb85c;\'>商家公告</label><hr><p>"+notice+"</p>\" data-trigger=\"hover\">"	
						+"<a tabindex=\"0\" class=\"restaurant-link\" href=\"ItemList.jsp?store_id="+id[i].firstChild.nodeValue+"\" target=\"_blank\">"
							+"<div class=\"outer\">"
								+"<div class = \"top-content\">"
									+"<div class=\"shop-preview\">"
										+"<img alt=\"preview\"  src=\"http://p1.meituan.net/208.0/xianfu/e1bcdafeb2a17c7db0115ab062109372112900.jpg\">"
									+"</div>"
									+"<div class=\"shop-content clearfix\">"
										+"<div class=\"clearfix\"><span class=\"shopname\">"+shop_name[i].firstChild.nodeValue+"</span></div>"
										+"<div class=\"clearfix\"><span class=\"fl\">评分 "+sc+"</span><span class=\"fr\" style=\"color:orange\">销量 "+sell_num[i].firstChild.nodeValue+"单</span></div>"
										+"<div class=\"clearfix\"><span class=\"fl\">起送价 ￥"+price_tosend[i].firstChild.nodeValue+"</span><span class=\"fr\"><span class=\"glyphicon glyphicon-time\"></span> "+avetime+"</span></div>"
									+"</div>"
								+"</div>"
								+"<div class=\"other\">"
									+"<span>折扣信息   <span class=\"glyphicon glyphicon-bullhorn\"></span>【满-减】</span>"
								+"</div>"
							+"</div>"
						+"</a>"
					+"</li>"
				//alert(add);
				if(search=="")
					$("#shop_list").append(add);
				else			
					$("#search_shop_List").append(add);
				//alert(shop_name[i].firstChild.nodeValue);
			}
			$('[data-toggle="popover"]').popover();
		}
	});
}
function update_Search_Shop_List(id,search){
	$.ajax({
		url:"code/search_get_Shopname.jsp",
		data:{store_id:id},
		type:"get",
		success:function(data){
			var shop_name=$(data).find("shop_name");
			var price_tosend =$(data).find("price_tosend");
			var score=$(data).find("score");
			var sc = score[0].firstChild.nodeValue==-1?"暂无":score[0].firstChild.nodeValue;
			//alert(shop_name.length);
			var search_title="<div class=\"result-title\" id=\""+id+"\">"
				+"<div class=\"name clearfix\"><label class=\"fl\"><b>"+shop_name[0].firstChild.nodeValue+"</b></label><div class=\"fl\"><span>折扣信息 【满-减】</span></div></div>"
				+"<div class=\"info clearfix\"><span>评分 "+sc+"</span><span>|</span><span>起送价 ￥"+price_tosend[0].firstChild.nodeValue+"</span></div>"
				+"</div>";
			$(".food-result-rest").append(search_title);
			update_Search_Food_List(id,search);
		}
	});
}
function update_Search_Food_List(id,search){
	$.ajax({
		url:"code/search_get_Food_Info.jsp",
		type:"get",
		data:{id:id , search:search},
		dataType:"xml",
		success:function(data){
			//alert("111");
			var dish_name=$(data).find("dish_name");
			var price = $(data).find("price");
			var sell_num = $(data).find("sell_num");
			//alert(dish_name.length);
			for(var i=0;i<dish_name.length;++i){	
				var search_item="<div class=\"result-item\">"
					+"<a href=\"ItemList.jsp?store_id="+id+"\" target=\"_blank\">"
					+"<div class=\"result-item-row clearfix\">"
					+"<span class=\"name fl\"><b>"+dish_name[i].firstChild.nodeValue+"</b></span><span class=\"price fl\">" 
					+"单价"+price[i].firstChild.nodeValue+"</span><span class=\"sold fl\">"
					+"销量"+sell_num[i].firstChild.nodeValue+"单</span><span class=\"buy fr\">购买</span>"
					+"</div></a></div>";
				//alert(search_item);
				$("#"+id).after(search_item);
			}
		}
	});
}
function update_Food_List(search){
	$.ajax({
		url:"code/search_Shop.jsp",
		data:{search:search,lng: getCookie('lng'), lat: getCookie('lat')},
		type:"get",
		success:function(data){
			var store_id = $(data).find("store_id");
			//alert(store_id.length);
			for(var i=0;i<store_id.length;++i)
			{
				var id=store_id[i].firstChild.nodeValue;
				update_Search_Shop_List(id,search);
			}
		}
	})
}
function go_search_page(search_name){
	if(search_name!=""){
		$(".food-result-rest").empty();
		/*$(".restaurant-type").hide();
		$(".sort-filter").hide();
		$(".shop-list").hide();
		$(".divider").hide();
		//$(".space").hide();
		$(".tab-bar").show();
		$(".text-field").show();
		$("#tab-container").show();
		*/
		$("#search_name").text(search_name);
		update_List("","",search_name);
		update_Food_List(search_name);
		$("#nowpage").hide();
		$("#searchpage").show();
		pg=0;
	}
}

/*$(function(){
	$("#place").text(getCookie('place'));
})*/
$(function(){
	$("#search_txt1").keydown(function(event){
		if (event.keyCode == 13){
			//alert(getCookie('place')+getCookie('lng')+getCookie('lat'));
			var search_name=$("#search_txt1").val();
			go_search_page(search_name.trim());
		}
	});
	$("#search_txt2").keydown(function(event){
		if (event.keyCode == 13){
			var search_name=$("#search_txt2").val()
			go_search_page(search_name.trim());
		}
	});
	$("#search_bnt1").bind("click",function(){
		//alert("1");
		var search_name=$("#search_txt1").val()
		go_search_page(search_name.trim());
		//alert($("#search_txt1").val());
	});

	$("#search_bnt2").bind("click",function(){
		var search_name=$("#search_txt2").val()
		go_search_page(search_name.trim());
		//alert($("#search_txt2").val());
	});
})