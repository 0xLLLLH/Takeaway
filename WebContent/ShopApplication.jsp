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
<title>商家入驻</title>
</head>
<body>
	<%@ include file='Header.jsp' %>
	<div class="container content-margin">
		<div class="row">
			<div class="col-md-10 col-md-offset-1 shadowed">
				<hr class="space">
				<form class="form-horizontal">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_name"><span class="color_red">*</span>店铺名称</label></div>
						<div class="col-md-8"><input type="text" id="shop_name" class="form-control" placeholder="填写您的店铺名称"></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label><span class="color_red">*</span>经营品类</label></div>
						<div class="col-md-4"><select class="form-control"></select></div>
						<div class="col-md-4"><select class="form-control"></select></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_address"><span class="color_red">*</span>详细地址</label></div>
						<div class="col-md-8"><input type="text" id="shop_address" class="form-control" placeholder="填写您的详细地址"></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label><span class="color_red">*</span>地理位置</label></div>
						<div class="col-md-1"><label for="longitude">经度</label></div>
						<div class="col-md-3"><input id="longitude" type="text" class="form-control" placeholder="经度"></div>
						<div class="col-md-1"><label for="latitude">纬度</label></div>
						<div class="col-md-3"><input id="latitude" type="text" class="form-control" placeholder="纬度"></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_description">&nbsp;店铺介绍</label></div>
						<div class="col-md-8"><textarea id="shop_description" class="form-control" placeholder="用简单的几句话介绍一下您的店铺吧"></textarea></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_owner"><span class="color_red">*</span>联系人</label></div>
						<div class="col-md-8"><input type="text" id="shop_owner" class="form-control" placeholder="您的姓名"></div>
					</div>
					<div class="form-group">
						<div class="col-md-8 col-md-offset-3"><span class="color_red">请如实填写您的信息，我们不会将您的信息透漏给任何第三方</span></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_phone"><span class="color_red">*</span>联系电话</label></div>
						<div class="col-md-8"><input type="text" id="shop_phone" class="form-control" placeholder="填写您的联系电话"></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-1"><label for="shop_license"><span class="color_red">*</span>营业许可证号</label></div>
						<div class="col-md-8"><input type="text" id="shop_license" class="form-control" placeholder="填写您的营业许可证号"></div>
					</div>
					<hr class="space">
					<div class="form-group">
						<div class="col-md-2 col-md-offset-3">
							<input type="button" class="form-control btn btn-success" value="提交申请">
						</div>
						<div class="col-md-2">
							<input type="button" class="form-control btn btn-default" value="返回">
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
</body>
</html>