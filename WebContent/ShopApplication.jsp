<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Custom styles for this template -->
<link href="css/mystyle.css" rel="stylesheet">
<link href="css/shopapplication.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<!-- <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> -->
<script charset="utf-8" src="js/ajax.js"></script>
<title>商家入驻</title>
</head>
<body>
	<%@ include file='Header.jsp' %>
	<input id="lng" type="text" style="display:none">
	<input id="lat" type="text" style="display:none">
	<div class="container content">
		<div class="row">
			<div class="col-md-10 col-md-offset-1 shadowed">
				<hr class="space">
				<div class="locationbar clearfix">
					<div style="float:left;width:20%"><label><span class="color_red">*</span>地理位置</label></div>
					<div style="float:left;width:80%" id="r-result"><input type="text" id="suggestId" size="20" class="form-control" onclick="getFocus(alert_shopplace,alert_shopplace)" onblur="loseFocus(this,alert_shopplace)" placeholder="填写位置并从下拉框中选择" /></div>
					<hr class="space">
				</div>
				
				<div>
					<div class="col-md-8 col-md-offset-3" id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
					<div id="l-map"></div>
				</div>
				<hr class="space">
				<div class="form-group" id="alert_shopplace" style="display:none">
					<div class="col-md-8 col-md-offset-3">
						<div class="alert alert-danger" role="alert">
						  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
						  <span class="sr-only">Error:</span>
							地理位置不能为空
						</div>
					</div>
				</div>
				<hr class="space">
				<form class="form-horizontal" id="ApplyForm">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_name"><span class="color_red">*</span>店铺名称</label></div>
						<div class="col-md-8"><input type="text" id="shop_name" class="form-control" onclick="getFocus(alert_shopname,alert_shopname)" onblur="loseFocus(this,alert_shopname)" placeholder="填写您的店铺名称"></div>
					</div>
					<div class="form-group" id="alert_shopname" style="display:none">
						<div class="col-md-8 col-md-offset-3">
							<div class="alert alert-danger" role="alert">
							  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
							  <span class="sr-only">Error:</span>
								店铺名称不能为空
							</div>
						</div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label><span class="color_red">*</span>经营品类</label></div>
						<div class="col-md-4"><select class="form-control" id="select_first_type" onclick="show_Second_type()" ></select></div>
						<div class="col-md-4"><select class="form-control" id="select_second_type" ></select></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_address"><span class="color_red">*</span>详细地址</label></div>
						<div class="col-md-8"><input type="text" id="shop_address" class="form-control"onclick="getFocus(alert_shopaddress,alert_shopaddress)" onblur="loseFocus(this,alert_shopaddress)" placeholder="填写您的详细地址"></div>
					</div>
					<div class="form-group" id="alert_shopaddress" style="display:none">
						<div class="col-md-8 col-md-offset-3">
							<div class="alert alert-danger" role="alert">
							  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
							  <span class="sr-only">Error:</span>
								详细地址不能为空
							</div>
						</div>
					</div>
					
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_description">&nbsp;店铺介绍</label></div>
						<div class="col-md-8"><textarea id="shop_description" class="form-control" placeholder="用简单的几句话介绍一下您的店铺吧"></textarea></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_owner"><span class="color_red">*</span>联系人</label></div>
						<div class="col-md-8"><input type="text" id="shop_owner" class="form-control" onclick="getFocus(alert_shopowner,alert_shopowner)" onblur="loseFocus(this,alert_shopowner)" placeholder="您的姓名"></div>
					</div>
					<div class="form-group" id="alert_shopowner" style="display:none">
						<div class="col-md-8 col-md-offset-3">
							<div class="alert alert-danger" role="alert">
							  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
							  <span class="sr-only">Error:</span>
								联系人姓名不能为空
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="col-md-8 col-md-offset-3"><span class="color_red">请如实填写您的信息，我们不会将您的信息透漏给任何第三方</span></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_phone"><span class="color_red">*</span>联系电话</label></div>
						<div class="col-md-8"><input type="text" id="shop_phone" class="form-control" onclick="getFocus(alert_shopphone,alert_shopphone_error)" onblur="loseFocus(this,alert_shopphone)" placeholder="填写您的联系电话"></div>
					</div>
					<div class="form-group" id="alert_shopphone" style="display:none">
						<div class="col-md-8 col-md-offset-3">
							<div class="alert alert-danger" role="alert">
							  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
							  <span class="sr-only">Error:</span>
								联系电话不能为空
							</div>
						</div>
					</div>
					<div class="form-group" id="alert_shopphone_error" style="display:none">
						<div class="col-md-8 col-md-offset-3">
							<div class="alert alert-danger" role="alert">
							  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
							  <span class="sr-only">Error:</span>
								请输入正确的手机号
							</div>
						</div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_license"><span class="color_red">*</span>营业许可证号</label></div>
						<div class="col-md-8"><input type="text" id="shop_license" class="form-control" onclick="getFocus(alert_shoplicense,alert_shoplicense)" onblur="loseFocus(this,alert_shoplicense)" placeholder="填写您的营业许可证号"></div>
					</div>
					<div class="form-group" id="alert_shoplicense" style="display:none">
						<div class="col-md-8 col-md-offset-3">
							<div class="alert alert-danger" role="alert">
							  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
							  <span class="sr-only">Error:</span>
								营业许可证不能为空
							</div>
						</div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-3">
							<input type="button" class="form-control btn btn-success" value="提交申请" onclick="isSubmitLegal()">
						</div>
						<div class="col-md-2">
							<input type="button" class="form-control btn btn-default" value="返回" onclick="goBack()">
						</div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-8 col-md-offset-3"><span class="color_red">填写的过程中有疑问您可以联系客服人员获得帮助<br>客服电话：400-233-3333</span></div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/jquery-1.11.3.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=2ExFwNEKQ8jBpq7abQWiU3sb"></script>
	<script charset="utf-8" src="js/shopapplication.js"></script>
	<script src="js/bootstrap.min.js"></script>
</body>
</html>