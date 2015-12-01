/**
 * 
 */
$(function()
{
	newApp_list();
})
function newApp_list()
{
	loadXMLDoc("code/get_Application_info.jsp?timestamp="+new Date().getTime(),
			function()
			{
				 if (xmlhttp.readyState==4 && xmlhttp.status==200)
				 {
					 var result = xmlhttp.responseXML.getElementsByTagName( "result" )[0].firstChild.nodeValue;
					 var id = xmlhttp.responseXML.getElementsByTagName( "id" );
					 var shop_name =  xmlhttp.responseXML.getElementsByTagName( "shop_name" );
				     var shop_address = xmlhttp.responseXML.getElementsByTagName( "shop_address" );
				     var shop_description =xmlhttp.responseXML.getElementsByTagName( "shop_description" );
				     var shop_owner = xmlhttp.responseXML.getElementsByTagName( "shop_owner" );
				     var shop_phone =xmlhttp.responseXML.getElementsByTagName( "shop_phone" );
				     var shop_license =xmlhttp.responseXML.getElementsByTagName( "shop_license" );
				     var submit_time = xmlhttp.responseXML.getElementsByTagName( "submit_time" );
				     var first_type =xmlhttp.responseXML.getElementsByTagName( "first_type" );
				     var second_type = xmlhttp.responseXML.getElementsByTagName( "second_type" );
				     $("#app_table tr:gt(0)").remove();//clear
				     for(var i=0;i<id.length;++i)
				     {
				    	 var $trline="<tr "+"data-toggle='modal' data-target='#detailModal' data-date='"+submit_time[i].firstChild.nodeValue
				    	 +"' data-shopname='"+shop_name[i].firstChild.nodeValue
				    	 +"' data-address='"+shop_address[i].firstChild.nodeValue
				    	 +"' data-type1='"+first_type[i].firstChild.nodeValue
				    	 +"' data-type2='"+second_type[i].firstChild.nodeValue
				    	 +"' data-description='"+shop_description[i].firstChild.nodeValue
				    	 +"' data-owner='"+shop_owner[i].firstChild.nodeValue
				    	 +"' data-phone='"+shop_phone[i].firstChild.nodeValue
				    	 +"' data-license='"+shop_license[i].firstChild.nodeValue+"' >"
				    	 +"<td>"+submit_time[i].firstChild.nodeValue
				    	 +"</td><td>"+shop_name[i].firstChild.nodeValue
				    	 +"</td><td>"+first_type[i].firstChild.nodeValue+"-"+second_type[i].firstChild.nodeValue
				    	 +"</td><td>"+shop_address[i].firstChild.nodeValue
				    	 +"</td><td><span class='label label-default'>未审核</span></td>"
				    	 +"<td style='display:none' id='app_id'>"+id[i].firstChild.nodeValue+"</td>"
				    	 +"<td style='display:none' id='state'>2</td>"
				    	 +"</tr>";
				    	 $("#app_table").append($trline);
				     }
				 }
			});
}
$('#detailModal').on('show.bs.modal', function(event) {
	//alert(event.relatedTarget);
	$tr = $(event.relatedTarget); // Button that triggered the modal
	
	$("#app_agree").bind("click",function()
			{
				$tr.find("span").removeClass().addClass("label label-success").html("通过");
				$tr.find("#state").html("1");
	})
	$("#app_disagree").bind("click",function()
			{
				$tr.find("span").removeClass().addClass("label label-danger").html("未通过");
				$tr.find("#state").html("0");
	})
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this);

	//modal.find('.modal-title').text('New message to ' + recipient);
	modal.find("#shopname").html("店铺名："+$tr.data("shopname")); // Extract info from data-* attributes
	modal.find("#date").html("申请日期："+$tr.data("date"));
	modal.find("#type1").html("经营品类 ①："+$tr.data("type1"));
	modal.find("#type2").html("经营品类 ②："+$tr.data("type2"));
	modal.find("#address").html("详细地址："+$tr.data("address"));
	modal.find("#description").html("详细描述："+$tr.data("description"));
	modal.find("#owner").html("联系人："+$tr.data("owner"));
	modal.find("#phone").html("联系电话："+$tr.data("phone"));
	modal.find("#license").html("营业执照号："+$tr.data("license"));
})

$('#detailModal').on('hide.bs.modal', function(event) {
	$("#app_agree").unbind("click");
	$("#app_disagree").unbind("click");
})

$("#app_submit").bind("click",function(){
	if($("#app_table").find("tr").length>1)
	{
		var idstr="";
		$("#app_table tr:gt(0)").each(function(i){
			if(i!=0) idstr+=",";
			idstr+=$(this).children("td").eq(5).text();
			idstr+="-";
			idstr+=$(this).children("td").eq(6).text();
			//alert($(this).html());
		});
		loadXMLDoc("code/review_Application.jsp?idstr="+idstr+"&timestamp="+new Date().getTime(),
				function()
				{
					if (xmlhttp.readyState==4 && xmlhttp.status==200)
					{
						var result = xmlhttp.responseXML.getElementsByTagName( "result_code" )[0].firstChild.nodeValue;
						if(result=="true")
						{
							newApp_list();
						}
						else 
						{
							alert("提交错误");
						}
					}
				});
	}
	else 
	{
		alert("你已处理完所有请求！");
	}
})
function back()
{
	window.location.href="Signup.jsp";
}
