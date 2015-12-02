<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
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
<link href="css/mystyle.css" rel="stylesheet">
<link href="css/signup.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<script charset="utf-8" src="js/ajax.js"></script>
<script charset="utf-8" src="js/Signup.js"></script>
<title>登录|注册</title>
</head>
<body>
	<%@ include file='Header.jsp' %>
	<div class="container content">
	<div class="row">
	<div class="col-md-10 col-md-offset-1">
		<div class="row">
			<div class="col-md-8">
				<img class="img-responsive" alt="intro" src="https://s0.meituan.com/bs/file/?f=fs:fe-sso-fs/build/page/static/banner/www.jpg">
			</div>
			<div class="col-md-4 login-regiseter">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<ul class="nav nav-tabs" role="tablist">
							    <li role="presentation" class="active"><a href="#LoginDiv" id="logintab" aria-controls="login" role="tab" data-toggle="tab">  登录   </a></li>
							    <li role="presentation"><a href="#RegDiv" id="regtab" aria-controls="profile" role="tab" data-toggle="tab">  注册  </a></li>
							</ul>
						</div>
					</div>
					<div class="row"><hr/></div>
					<div class="tab-content">
						<div class="row tab-pane active" role="tabpanel" id="LoginDiv">
							<div class="row">
								<div class="col-sm-4 col-md-offset-4">
									<img class="img-circle img-responsive " alt="homepage" src="http://2a.zol-img.com.cn/product/61/566/ceP9S3zQbVvj6.jpg">
								</div>
							</div>
							<form class="" id="LoginForm">
								<div class="form-group">
									<label for="login_username">用户名</label>
									<input type="text" class="form-control" placehoder="用户名" id="login_username" onfocus="getFocus(inform_account_login,inform_account_notexit)" onblur="loseFocus(this,inform_account_login)"></input>
                                    <div class="inform" id="inform_account_login" style="display:none">
                                    	<div class="alert alert-danger" role="alert">
										  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
										  <span class="sr-only">Error:</span>
											用户名不能为空
										</div>
                                    </div>
                                    <div class="inform" id="inform_account_notexit" style="display:none">
                                    	<div class="alert alert-danger" role="alert">
										  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
										  <span class="sr-only">Error:</span>
											该用户尚未注册
										</div>
                                    </div>								
								</div>
								<div class="form-group">
									<label for="login_password">密码</label>
									<input type="password" class="form-control" placehoder="密码" id="login_password" onfocus="getFocus(inform_password_login,inform_password_error)" onblur="loseFocus(this,inform_password_login)"></input>
									<div class="inform" id="inform_password_login" style="display:none">
										<div class="alert alert-danger" role="alert">
										  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
										  <span class="sr-only">Error:</span>
											密码不能为空
										</div>
									</div>
									<div class="inform" id="inform_password_error" style="display:none">
										<div class="alert alert-danger" role="alert">
										  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
										  <span class="sr-only">Error:</span>
											您输入的密码有误，请确认后重新输入
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="checkbox">
										<label><input type="checkbox" id="remember">记住密码</label>
								    </div>
								</div>
								
									<input type="button" class="form-control btn btn-success" value="登录" onclick="isLoginLegal()"/>
								
							</form>
						</div>
						<div class="row tab-pane" role="tabpanel" id="RegDiv">
							<form  id="RegForm">
								<div class="form-group">
									<span class="inform">*</span>
									<label for="username">账号</label>
									<input class="form-control" type="text" id="username" placeholder="用户名" onfocus="getFocus(inform_account,inform_account_exit)" onblur="loseFocus(this,inform_account);checkAccount(this,inform_account_exit)"/>
									<div class="inform" id="inform_account" style="display:none">
										<div class="alert alert-danger" role="alert">
										  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
										  <span class="sr-only">Error:</span>
											用户名不能为空
										</div>
									</div>
									<div class="inform" id="inform_account_exit" style="display:none">
										<div class="alert alert-danger" role="alert">
										  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
										  <span class="sr-only">Error:</span>
											该用户名已被使用
										</div>
									</div>
								</div>
								<div class="form-group">
									<span class="inform">*</span>
									<label for="password">密码</label>
									<input class="form-control" type="password" id="password" placeholder="密码" onfocus="getFocus(inform_password)" onblur="loseFocus(this,inform_password)"/>
									<div class="inform" id="inform_password" style="display:none">
										<div class="alert alert-danger" role="alert">
										  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
										  <span class="sr-only">Error:</span>
											密码不能为空
										</div>
									</div>
								</div>
								<div class="form-group">
									<span class="inform">*</span>
									<label for="confirmpass">密码确认</label>
									<input class="form-control" type="password" id="confirmpass"  placeholder="密码确认"  onfocus="getFocus(inform_check)" onblur="loseFocusCheck(this,inform_check)"/>
									<div class="inform" id="inform_check" style="display:none">
										<div class="alert alert-danger" role="alert">
										  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
										  <span class="sr-only">Error:</span>
											两次密码不一致
										</div>
									</div>
								</div>
								<div class="form-group">
									<span class="inform">*</span>
									<label for="phone">手机号码</label>
									<input class="form-control" type="text" id="phone" placeholder="手机号码"  onfocus="getFocus(inform_phone)" onblur="loseFocus(this,inform_phone)"/>
									<div class="inform" id="inform_phone" style="display:none">
										<div class="alert alert-danger" role="alert">
										  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
										  <span class="sr-only">Error:</span>
											手机号码不能为空
										</div>
									</div>
								</div>
								<div class="form-group">
									<input class="form-control btn btn-success" type="button" id="regsubmit" value="注册"  onclick="isEnterLegal()"/>
								</div>
							</form>
						</div>
					</div><!-- end of tab content -->
				</div>
			</div><!-- end of login-register -->
		</div>
		</div>
		</div>
	</div><!-- end of container -->
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
</body>
</html>