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
<link href="css/animate.css" rel="stylesheet">
<link href="css/mystyle.css" rel="stylesheet">
<link href="css/shoplist.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<script charset="utf-8" src="js/ajax.js"></script>

<title>附近店铺</title>
</head>
<body>
	<%@ include file='Header.jsp' %>
	<div id="searchbar">
		
	</div>
	<div class="content">
		<hr class="space">
		<div class="restaurant-type clearfix">
			<div class="left-part clearfix">
				<div class="type-title">
					餐厅分类
				</div>
			</div>
			<div class="right-part clearfix">
					<span class="rest-type"><a href="#" >全部</a></span>
					<%for(int i=0;i<11;i++) { %>
						<span class="rest-type"> <a href="#" >快餐小吃</a></span>
					<%} %>
			</div>
		</div>
		<hr>
		<div class="discount-filter clearfix">
			<div class="left-part clearfix">
				<div class="discount-title">
					优惠筛选
				</div>
			</div>
			<div class="right-part clearfix">
					<span class="discount-type"><a href="#" >全部</a></span>
					<%for(int i=0;i<11;i++) { %>
						<span class="discount-type"> <a href="#" >快餐小吃</a></span>
					<%} %>
			</div>
		</div>
		<div class="divider"></div>
		<div class="sort-filter clearfix">
			<div class="sort"> <a href="http://www.baidu.com">默认排序</a></div>
			<div class="sort"> <a href="http://www.baidu.com">销量 </a><span class="glyphicon glyphicon-sort-by-attributes-alt"></span></div>
			<div class="sort"> <a href="http://www.baidu.com">评价</a><span class="glyphicon glyphicon-sort-by-attributes-alt"></span></div>
			<div class="sort"> <a href="http://www.baidu.com">送餐速度</a><span class="glyphicon glyphicon-sort-by-attributes"></span></div>
		</div>
		<div class="shop-list clearfix">
			<ul>
				<%
				for (int i=0;i<10;i++){
				%>
				<li class = "restaurant fl clearfix">	
					<a class="restaurant-link" href="https://www.baidu.com" target="_blank">
						<div class="outer">
							<div class = "top-content">
								<div class="shop-preview">
									<img alt="preview"  src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=398990237,3888602267&fm=58">
								</div>
								<div class="shop-content clearfix">
									<div class="clearfix"><span class="shopname">这里是店铺的名字</span></div>
									<div class="clearfix"><span class="fl">评分</span><span class="fr">销量</span></div>
									<div class="clearfix"><span class="fl">起送价</span><span class="fr">配送时间</span></div>
								</div>
							</div>
							<div class="other">
								<span>折扣信息</span>
							</div>
						</div>
					</a>
				</li>
				<%} %>
			</ul>
		</div>
	</div>
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	<script charset="utf-8" type="text/javascript" src="js/headroom.min.js"></script>
	<script src="js/jQuery.headroom.min.js"></script>
	<script charset="utf-8" type="text/javascript" src="js/shoplist.js"></script>
</body>
</html>