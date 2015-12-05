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
<link href="css/review.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<script charset="utf-8" src="js/ajax.js"></script>
<title>申请审核</title>
</head>
<body>
	<%@ include file='Header.jsp' %>
	<%      
		String username = (String)session.getAttribute("username");
		System.out.println(username);
		if(username==null||!username.equals("admin"))
		{
			System.out.println("Lodin_outoftime");
			request.getRequestDispatcher("Signup.jsp").forward(request, response);
		}
	%>
	<div class="container content">
		<div class="row">
			<div class="col-md-10 col-md-offset-1 shadowed">
				<hr class="space">
				<div class="row">
					<div class="col-md-10 col-md-offset-1 ">
						<div class="table-responsive">
							<table class="table table-striped table-hover table-bordered" id="app_table">
								<tr><th>申请日期</th><th>店铺名</th><th>经营品类</th><th>店铺的详细地址</th><th>审核状态</th></tr>
							</table>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-2 col-md-offset-5">
						<button class="btn btn-primary" id="app_submit">提交</button>
						<button class="btn btn-default" onclick="back()" >返回</button>
					</div>
				</div>
				<hr class="space">
			</div>
		</div>
		
	</div>
	<div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="exampleModalLabel">详细信息</h4>
	      </div>
	      <div class="modal-body">
	      	<div class="container-fluid">
		      	<div class="row"><div class="col-md-6"><label id="shopname"></label></div><div class="col-md-6"><label id="date"></label></div></div>
		      	<div class="row"><div class="col-md-6"><label id="type1"></label></div><div class="col-md-6"><label id="type2"></label></div></div>
		      	<div class="row"><div class="col-md-12"><label id="address"></label></div></div>
		      	<div class="row"><div class="col-md-12"><label id="description"></label></div></div>
		      	<div class="row"><div class="col-md-12"><label id="owner"></label></div></div>
		      	<div class="row"><div class="col-md-12"><label id="phone"></label></div></div>
		      	<div class="row"><div class="col-md-12"><label id="license"></label></div></div>
	      	</div>
	      </div>
	      <div class="modal-footer">
	      	<button type="button" class="btn btn-success" data-dismiss="modal" id="app_agree">同意</button>
	      	<button type="button" class="btn btn-danger" data-dismiss="modal" id="app_disagree">不同意</button>
	        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
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
	<script charset="utf-8" src="js/review.js"></script>
</body>
</html>