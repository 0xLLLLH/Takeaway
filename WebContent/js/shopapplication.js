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
							 alert("提交成功")
						 }
						 else
						 {
							 alert("提交失败");
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
		 submit_store_info();
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