/**
 * 
 */
window.onload=function()
{
	//页面载入时查询第一经营类别
	loadXMLDoc("code/get_First_type.jsp?timestamp="+new Date().getTime(),
			function()
			{
				 if (xmlhttp.readyState==4 && xmlhttp.status==200)
				 {
					 var result = xmlhttp.responseXML.getElementsByTagName( "result_code" )[0].firstChild.nodeValue;
					 if(result=="true")
					 {
						 var first_type=xmlhttp.responseXML.getElementsByTagName("first_type");
						 var select_first = document.getElementById("select_first_type");
						 for(var i=0;i<first_type.length;++i)
						 {
							 var value=first_type[i].firstChild.nodeValue;
							 select_first.options.add(new Option(value,value));
						 }
						 show_Second_type();//第二经营类别初始化
					 }
					 else
					 {
						 alert("读取错误");
					 }
				 }
			});
}
function getFocus(inform1,inform2){
	inform1.style.display="none";
	inform2.style.display="none";
}
function loseFocus(txt,inform){
	if (txt.value==""){
		inform.style.display="block";
	}
}
function show_Second_type()
{
	var first_type=document.getElementById("select_first_type").value;
	loadXMLDoc("code/get_Second_type.jsp?first_type="+first_type+"&timestamp="+new Date().getTime(),
			function()
			{
				 if (xmlhttp.readyState==4 && xmlhttp.status==200)
				 {
					 var result = xmlhttp.responseXML.getElementsByTagName( "result_code" )[0].firstChild.nodeValue;
					 if(result=="true")
					 {
						 var second_type=xmlhttp.responseXML.getElementsByTagName("second_type");
						 var select_second = document.getElementById("select_second_type");
						/* while( select_first.options.length>3)
						 {
							 select_first.options.remove(select_first.options.length-1);
						 }*/
						 select_second.options.length=0
						 for(var i=0;i<second_type.length;++i)
						 {
							 var value=second_type[i].firstChild.nodeValue;
							 select_second.options.add(new Option(value,value));
						 }
					 }
					 else
					 {
						 alert("读取错误");
					 }
				 }
			});
}
function submit_store_info()
{
	var form=document.getElementById("ApplyForm");
	 var shop_name=form.shop_name.value;
	 var shop_address=form.shop_address.value;
	 var longitude=form.longitude.value;
	 var latitude=form.latitude.value;
	 var shop_description=form.shop_description.value;
	 var shop_owner=form.shop_owner.value;
	 var shop_phone=form.shop_phone.value;
	 var shop_license=form.shop_license.value;
	 var first_type=form.select_first_type.value;
	 var second_type=form.select_second_type.value;
	 loadXMLDoc("code/submit_Store_Info.jsp?shop_name="+shop_name
			 +"&shop_address="+shop_address
			 +"&longitude="+longitude
			 +"&latitude="+latitude
			 +"&shop_description="+shop_description
			 +"&shop_owner="+shop_owner
			 +"&shop_phone="+shop_phone
			 +"&shop_license="+shop_license
			 +"&first_type="+first_type
			 +"&second_type="+second_type
			 +"&timestamp="+new Date().getTime(),
				function()
				{
					 if (xmlhttp.readyState==4 && xmlhttp.status==200)
					 {
						 var result = xmlhttp.responseXML.getElementsByTagName( "result_code" )[0].firstChild.nodeValue;
						 if(result=="true")
						 {
							 alert("您的申请已提交!");
							 window.history.back(-1);
						 }
						 else
						 {
							 alert("提交失败");
						 }
					 }
				});
	 
}
function goBack()
{
	window.history.back(-1);
}
function checkApplicationRepeat()
{
	$.ajax({
		url: "code/check_Application_Repeat.jsp",
		 type:"get",
		 dataType:"text",
		 success: function(data)
		 {
			if(data.trim()=="repeat")
			{
				alert("请勿重复提交申请！");
			}
			else if(data.trim()=="norepeat")
			{
				submit_store_info();
			}
		 }
	});
}
function isSubmitLegal()
{
	 var form=document.getElementById("ApplyForm");
	 var shop_name=form.shop_name.value;
	 var shop_address=form.shop_address.value;
	 var longitude=form.longitude.value;
	 var latitude=form.latitude.value;
	 var shop_description=form.shop_description.value;
	 var shop_owner=form.shop_owner.value;
	 var shop_phone=form.shop_phone.value;
	 var shop_license=form.shop_license.value;
	 
	 if(shop_name!=""&&shop_address!=""&&longitude!=""&&latitude!=""&&shop_owner!=""&&shop_phone!=""&&shop_license!="")
	 {
		 checkApplicationRepeat();  
	 }
	 else
	 {
		 if(shop_name=="") document.getElementById("alert_shopname").style.display="block";
		 if(shop_address=="") document.getElementById("alert_shopaddress").style.display="block";
		 if(longitude==""||latitude=="") document.getElementById("alert_shopplace").style.display="block";
		 if(shop_owner=="") document.getElementById("alert_shopowner").style.display="block";
		 if(shop_phone=="") document.getElementById("alert_shopphone").style.display="block";
		 if(shop_license=="") document.getElementById("alert_shoplicense").style.display="block";
	 }
}

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
function setPlace(){
	map.clearOverlays();    //清除地图上所有覆盖物
	function myFun(){
		var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
		map.centerAndZoom(pp, 18);
		var marker=new BMap.Marker(pp);
		map.addOverlay(marker);    //添加标注
		//marker.addEventListener("click", function(){          
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
		setPlace();
}