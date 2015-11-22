<%@page import="java.sql.*"%>
<%@page import="java.util.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Custom styles for this template -->
<link href="css/signup.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<script charset="utf-8" src="js/ajax.js"></script>
<title>Login Page</title>
<script type="text/javascript">
	function getFocus(inform1,inform2){
		inform1.style.display="none";
		inform2.style.display="none";
	}
	function loseFocus(txt,inform){
		if (txt.value==""){
			inform.style.display="block";
		}
	}
	function loseFocusCheck(txt,inform){
		var pass=document.getElementById("password").value;
		if (txt.value!=pass){
			inform.style.display="block";
		}
	}
	function checkAccount(txt,inform)
	{
		var username=txt.value;
		loadXMLDoc("code/check_Account.jsp?username="+username
				+"&timestamp="+new Date().getTime(),
				function()
				{
					 if (xmlhttp.readyState==4 && xmlhttp.status==200)
					 {
						 var result = xmlhttp.responseXML.getElementsByTagName( "result_code" )[0].firstChild.nodeValue;
						 if( result == "repeat" )
						 {
							 inform.style.display="block";
						  }
						  else
						  {
							  inform.style.display="none";
						  }
					 }
				});
	}
 	function isEnterLegal()
	{
 		var form=document.getElementById("RegForm");
		var username=form.username.value;
		var password=form.password.value;
		var confirmpass=form.confirmpass.value;
		var phone=form.phone.value;
		if(username!=""&&password!=""&&confirmpass==password&&document.getElementById("inform_account_exit").style.display=="none"&&phone!="")
		{
			submitAccount();
		}
		else
		{
			if(username=="")
				document.getElementById("inform_account").style.display="block";
			if(password=="")
				document.getElementById("inform_password").style.display="block";
			if(confirmpass!=password)
				document.getElementById("confirmpass").style.display="block";
			if(phone=="")
				document.getElementById("inform_phone").style.display="block";
		}
	} 
	function submitAccount()
	{
	    var form=document.getElementById("RegForm");
		var username=form.username.value;
		var password=form.password.value;
		var confirmpass=form.confirmpass.value;
		var phone=form.phone.value; 
		loadXMLDoc("code/submit_Account.jsp?username="+username
				+"&password="+password
				+"&phone="+phone
				+"&timestamp="+new Date().getTime(),
				function()
				{
					 if (xmlhttp.readyState==4 && xmlhttp.status==200)
					 {
						 var result = xmlhttp.responseXML.getElementsByTagName( "result_code" )[0].firstChild.nodeValue;
						 if( result == "success" )
						 {
							  alert( "注册成功" );
						  }
						  else
						  {
							  alert( "注册失败" );
						  }
					 }
				});
	}
</script>
</head>
<body>
	<div class="homepage">
		<img class="img_header" alt="homepage" src="http://2a.zol-img.com.cn/product/61/566/ceP9S3zQbVvj6.jpg">
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<img alt="intro" src="https://s0.meituan.com/bs/file/?f=fs:fe-sso-fs/build/page/static/banner/www.jpg">
			</div>
			<div class="col-md-4">
				<div class="row">
					<div class="col-md-8"><p class="text-left txt">用户注册</p></div>
					<div class="col-md-4"><a><p class="text-right">立即登录</p></a></div>
				</div>
				<div class="row">
					<form class="" id="RegForm">
						<div class="form-group">
							<span class="inform">*</span>
							<label for="username">账号</label>
							<input class="form-control" type="text" id="username" placeholder="用户名" onfocus="getFocus(inform_account,inform_account_exit)" onblur="loseFocus(this,inform_account);checkAccount(this,inform_account_exit)"/>
							<span class="inform" id="inform_account" style="display:none">用户名不能为空</span>
							<span class="inform" id="inform_account_exit" style="display:none">该用户名已存在</span>
						</div>
						<div class="form-group">
							<span class="inform">*</span>
							<label for="password">密码</label>
							<input class="form-control" type="password" id="password" placeholder="密码" onfocus="getFocus(inform_password)" onblur="loseFocus(this,inform_password)"/>
							<span class="inform" id="inform_password" style="display:none">密码不能为空</span>
						</div>
						<div class="form-group">
							<span class="inform">*</span>
							<label for="confirmpass">密码确认</label>
							<input class="form-control" type="password" id="confirmpass"  placeholder="密码确认"  onfocus="getFocus(inform_check)" onblur="loseFocusCheck(this,inform_check)"/>
							<span class="inform" id="inform_check" style="display:none">两次密码不一致</span>
						</div>
						<div class="form-group">
							<span class="inform">*</span>
							<label for="phone">手机号码</label>
							<input class="form-control" type="text" id="phone" placeholder="手机号码"  onfocus="getFocus(inform_phone)" onblur="loseFocus(this,inform_phone)"/>
							<span class="inform" id="inform_phone" style="display:none">手机号码不能为空</span>
						</div>
						<div class="form-group">
							<input class="form-control btn btn-success " type="button" id="regsubmit" value="注册"  onclick="isEnterLegal()"/>
						</div>
					</form>
				</div>
				
			</div>
		</div>
	</div>
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
</body>
</html>