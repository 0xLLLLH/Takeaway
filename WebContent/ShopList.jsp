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
<link href="css/normalize.css" rel="stylesheet">
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
	<input value="" id="type" style="display:none">
	<input value="" id="order" style="display:none">
	<div id="top"></div>
	<div class="fixed-button">
		<a href="#top">
			<div class="return-top"></div>
		</a>
	</div>
	<%@ include file='CommonHeader.jsp' %>
	<div id="searchbar" class="searchbar header--fixed">
		<div class="img-area"></div>
		<form class="search-box center-block">
			<input type="text" style='display:none' />  <!-- 取消回车自动提交表单 -->
			<input class="fl" type="text" placeholder="搜索商家,美食" id="search_txt2">
			<input class="fl clearfix " type="button" value="搜索" id="search_bnt2">
		</form>
	</div>
	<div id="nowpage">
	<div class="content">
		<hr class="space">
		<div class="restaurant-type clearfix">
			<div class="left-part clearfix">
				<div class="type-title">
					<span class="glyphicon glyphicon-th-list"></span>
					餐厅分类
				</div>
			</div>
			<div class="right-part clearfix" id="shop_type">
					<span class="rest-type"><a href="#" class="shoptype">全部</a></span>
			</div>
		</div>
		<div class="divider"></div>
		<div class="sort-filter clearfix">
			<div class="sort"> <a href="#" class="sortway">默认排序</a></div>
			<div class="sort"> <a href="#" class="sortway">销量<span class="glyphicon glyphicon-sort-by-attributes-alt "></span></a></div>
			<div class="sort"> <a href="#" class="sortway">评价<span class="glyphicon glyphicon-sort-by-attributes-alt "></span></a></div>
			<div class="sort"> <a href="#" class="sortway">送餐速度<span class="glyphicon glyphicon-sort-by-attributes "></span></a></div>
		</div>
		<div class="shop-list clearfix" >
			<ul id="shop_list">
			
			</ul>
		</div><!-- end of shop-list -->
		<!-- search_result -->
	</div><!-- end of content -->
	</div>
	
	<div  id="load_div" style="display:none">
		<div  class="loading">玩命加载中...</div>
	</div>
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="js/jquery-1.11.3.min.js"></script><!-- 
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script> -->
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	<script charset="utf-8" type="text/javascript" src="js/headroom.min.js"></script>
	<script src="js/jQuery.headroom.min.js"></script>
	<script charset="utf-8" type="text/javascript" src="js/shoplist.js"></script>
</body>
</html>