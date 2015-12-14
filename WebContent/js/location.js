
//百度地图API功能
var place;
var hasmove=0;
/*设置cookie*/
function setCookie(c_name, value, expiredays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}
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
$(function(){
	$(window).resize(function(){
		var height=$(window).height();
		$(".map").css("height",height*0.6);
		});
});
function G(id) {
	return document.getElementById(id);
}

	var map = new BMap.Map("l-map");
	map.centerAndZoom("北京",12);       // 初始化地图,设置城市和地图级别。
	map.setDefaultCursor("url('bird.cur')");
	var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{"input" : "suggestId"
		,"location" : map
	});
	
	ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
	var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if (e.fromitem.index > -1) {
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
		
		value = "";
		if (e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});
	
	var myValue;
	ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
	var _value = e.item.value;
		myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		place=myValue;
		setCookie('place',place,Number.MAX_SAFE_INTEGER);//add cookie
		setPlace();
	});
	//
/*	map.addEventListener("click",function(e){
		map.clearOverlays();    //清除地图上所有覆盖物
		map.centerAndZoom(e.point, 15);
		var marker = new BMap.Marker(e.point);  // 创建标注
		map.addOverlay(marker);               // 将标注添加到地图中
		marker.addEventListener("click", function(){          
				var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
			   this.openInfoWindow(infoWindow);
			   //图片加载完毕重绘infowindow
			   document.getElementById('imgDemo').onload = function (){
				   infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			   alert(e.point);
			   }
			});
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	});*/
//

function get_store_num(){
	var num=0;
	$.ajax({
		url:"code/get_Store_Num.jsp",
		async:false,
		type:"get",
		dataType:"text",
		data:{lng: $("#lng").val(), lat: $("#lat").val()},
		success:function(data){
			num=data;
		}
	});
	return num;
}
function setPlace(){
	map.clearOverlays();    //清除地图上所有覆盖物
	function myFun(){
		var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
		map.centerAndZoom(pp, 18);
		var marker=new BMap.Marker(pp);
		map.addOverlay(marker);    //添加标注
		//marker.addEventListener("click", function(){     
			//alert(place);
		$("#lng").val(pp.lng);
		$("#lat").val(pp.lat);
		//add cookie
		setCookie('lng',pp.lng+"",Number.MAX_SAFE_INTEGER);
		setCookie('lat',pp.lat+"",Number.MAX_SAFE_INTEGER);
			var href="ShopList.jsp?place="+place+"&lng="+pp.lng+"&lat="+pp.lat;
			var sContent = 
				"<div style='margin:0'>"+
				"<br><h4 style='margin:0;font-size:13px;color:gray';line-height:1.5;text-indent:2em>地址 : "+place+"</h4>" + 
				"<p style='margin:0;line-height:3.5;font-size:13px;float:left'>附近有</p><p style='margin:0;line-height:3.5;font-size:13px;float:left;color:green;font-weight:bold'>"+get_store_num()+"</p><p style='margin:0;line-height:3.5;font-size:13px'>家外卖餐厅</p>" + 
				"<a href="+href+" role='button' class='btn btn-success btn-sm'>立即点餐</a>"+
				"</div";	
			var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
			marker.openInfoWindow(infoWindow);
		//});
		marker.addEventListener("click", function(){          
			var href="ShopList.jsp?place="+place+"&lng="+pp.lng+"&lat="+pp.lat;
			var sContent = 
				"<div style='margin:0'>"+
				"<br><h4 style='margin:0;font-size:13px;color:gray';line-height:1.5;text-indent:2em>地址 : "+place+"</h4>" + 
				"<p style='margin:0;line-height:3.5;font-size:13px;float:left'>附近有</p><p style='margin:0;line-height:3.5;font-size:13px;float:left;color:green;font-weight:bold'>"+get_store_num()+"</p><p style='margin:0;line-height:3.5;font-size:13px'>家外卖餐厅</p>" + 
				"<a href="+href+" role='button' class='btn btn-success btn-sm'>立即点餐</a>"+
				"</div";	
			var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
			marker.openInfoWindow(infoWindow);
		});
	}
	var local = new BMap.LocalSearch(map, { //智能搜索
	  onSearchComplete: myFun
	});
	local.search(myValue);
}


function hideguider(){
	$("#tipclose").fadeTo(0,0);
	$(".guider").fadeTo(0,0);
}
function search(){
	if($("#l-map").hasClass("map"))
	{
		setPlace();
	}
	else if(!hasmove)
	{
		hasmove=1;
		hideguider();
		$("#r-result").animate(
			{
				left:"-=220px",
				top:"-=200px"
			},
			1500,
			function()
			{
				//alert("213");
				//hideguider();
				$("#l-map").removeClass("map-min");
				$("#l-map").addClass("map");
				$(".map").css("height",$(window).height()*0.6);
				$("#l-map").animate({left:"-=100px",top:"-=230px"},0);
				setPlace();
			}
			)
	}
}
$("#suggestId").keydown(function(event){
	if (event.keyCode == 13){
		search();
		//alert(getCookie('place')+getCookie('lng')+getCookie('lat'));
	}
});
function getPositionByBrowser(){
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
			alert('您的位置：'+r.point.lng+','+r.point.lat);
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})
	//关于状态码
	//BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
	//BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
	//BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
	//BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
	//BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
	//BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
	//BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
	//BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
	//BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
}


/*
*	
*/