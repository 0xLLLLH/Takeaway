
//百度地图API功能
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
function setPlace(){
	map.clearOverlays();    //清除地图上所有覆盖物
	function myFun(){
		var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
		map.centerAndZoom(pp, 18);
		var marker=new BMap.Marker(pp);
		map.addOverlay(marker);    //添加标注
		//marker.addEventListener("click", function(){          
			var sContent =
				"<div style='margin:0'>"+
				"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>立即点餐</h4>" + 
				"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'></p>" + 
				"<a href='Signup.jsp' role='button' class='btn btn-success btn-sm'>查看附近商家</a>"+
				"</div";	
			var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
			marker.openInfoWindow(infoWindow);
		//});
		marker.addEventListener("click", function(){          
			var sContent =
				"<div style='margin:0'>"+
				"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>立即点餐</h4>" + 
				"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'></p>" + 
				"<a href='www.baidu.com'>查看附近商家</a>"+
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
	$("#tipclose").hide();
	$(".guider").hide();
}

function search(){
	hideguider();
	$("#l-map").removeClass("map-min");
	$("#l-map").addClass("map");
	setPlace();
}

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