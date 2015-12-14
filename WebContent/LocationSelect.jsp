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
	<link href="css/location.css" rel="stylesheet">
	<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
	    <![endif]-->
	<title>选择位置</title>
</head>
<body>
	<%@ include file='Header.jsp' %>
	<input id="lng" style="display:none">
	<input id="lat" style="display:none">
	<div class="content">
			<a href="javascript:void(0);" class="cross" id="tipclose" onclick="hideguider()"></a>
			<div class="guider">
				<div class="choosecity"></div>
				<div class="choose-poi"></div>
				<div class="steps">
					<span class="s-1">1.选城市</span>
					<span class="s-2">2.搜位置</span>
					<span class="s-3">3.叫外卖</span>
					<span class="s-4">4.享美食</span>
					<span class="s-5">5.来评价</span>
				</div>
			</div>
			<!-- <div><button class="auto-get">自动定位</button></div> -->
			<div id="r-result">
				<form class="input-group">
					<input type="text" style='display:none' />  <!-- 取消回车自动提交表单 -->
					<input type="text" id="suggestId" size="20" class="form-control" placeholder="输入地址搜索周边美食" /><input type="button" class="input-group-addon" id="bnt_search" value="搜索" onclick="search()"/>
				</form>
			</div>
			<div id="l-map" class="map-min"></div>
			<div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
	</div>
	
	<%@ include file='Footer.jsp' %>
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>	
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=2ExFwNEKQ8jBpq7abQWiU3sb"></script>
	<script charset="utf-8" src="js/location.js"></script>
</body>
</html>