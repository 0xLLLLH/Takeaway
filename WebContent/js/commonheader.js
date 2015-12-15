//$("#dLabel").mouseover(function (){
	//$('.dropdown').dropdown();
//});

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