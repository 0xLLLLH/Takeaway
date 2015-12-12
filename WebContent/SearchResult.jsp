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
<link href="css/searchresult.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<title>搜索结果</title>
</head>
<body>
	<%@ include file='CommonHeader.jsp' %>
	<div class="content">
		<div class="tab-bar">
			<button class="button-active" data-toggle="rest">餐厅</button>
			<button data-toggle="food">美食</button>
		</div>
		<div class="text-field"><label>搜索<span style="color:#27AE60">***</span>的<span style="color:#27AE60">餐厅</span>结果</label></div>
		<div id="tab-container">
			<div id="rest" class="rest-result clearfix">
				<ul id="rest-result-list clearfix">
					<%
					for (int i=0;i<10;i++){
					%>
					<li class = "restaurant fl clearfix" data-delay='{"show": 432, "hide": 100 }' 
					data-toggle="popover" data-title="商家详情" data-placement="left auto" data-html="true"
					data-template="<div class='popover'  style='border:2px solid #5cb85c;width:300px;' role='tooltip'><div class='arrow'  style='border-color:#5cb85c;'></div><h3 class='popover-title'></h3><div class='popover-content'></div></div>"
					data-content="<label style='color:#5cb85c;'>优惠信息</label><hr><p>优惠信息内容</p><label style='color:#5cb85c;'>商家地址</label><hr><p>商家地址内容</p><label style='color:#5cb85c;'>商家公告</label><hr><p>商家公告内容</p>" data-trigger="hover">	
						<a tabindex="0" class="restaurant-link" href="https://www.baidu.com" target="_blank">
							<div class="outer">
								<div class = "top-content">
									<div class="shop-preview">
										<img alt="preview"  src="http://p1.meituan.net/208.0/xianfu/e1bcdafeb2a17c7db0115ab062109372112900.jpg">
									</div>
									<div class="shop-content clearfix">
										<div class="clearfix"><span class="shopname">这里是店铺的名字</span></div>
										<div class="clearfix"><span class="fl">评分 5.4</span><span class="fr">销量123</span></div>
										<div class="clearfix"><span class="fl">起送价</span><span class="fr">配送时间</span></div>
									</div>
								</div>
								<div class="other">
									<span>折扣信息 【满-减】</span>
								</div>
							</div>
						</a>
					</li>
					<%} %>
				</ul>
			</div>
			<div id="food" class="food-result">
				<%for (int i=0;i<10;i++){ %>
				<div class="food-result-rest">
					<div class="result-title">
						<div class="name clearfix"><label class="fl"><b>这里是店铺名</b></label><div class="fl"><span>折扣信息 【满-减】</span></div></div>
						<div class="info clearfix"><span>评分 4.5</span><span>|</span><span>起送价</span></div>
					</div>
					<div class="result-item">
						<a href="#">
							<div class="result-item-row clearfix">
								<span class="name fl"><b>菜品的名字</b></span><span class="price fl">菜品的单价</span><span class="sold fl">月销0单</span><span class="buy fr">购买</span>
							</div>
							<div class="result-item-row clearfix">
								<span class="name fl"><b>菜品的名字</b></span><span class="price fl">菜品的单价</span><span class="sold fl">月销0单</span><span class="buy fr">购买</span>
							</div>
							<div class="result-item-row clearfix">
								<span class="name fl"><b>菜品的名字</b></span><span class="price fl">菜品的单价</span><span class="sold fl">月销0单</span><span class="buy fr">购买</span>
							</div>
							<div class="result-item-row clearfix">
								<span class="name fl"><b>菜品的名字</b></span><span class="price fl">菜品的单价</span><span class="sold fl">月销0单</span><span class="buy fr">购买</span>
							</div>
						</a>
					</div>
				</div>
				<%} %>
			</div>
		</div><!-- end of tab-container -->
		<div  id="load_div">
			<div  class="loading">玩命加载中...</div>
		</div>
	</div>
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	<script src="js/searchresult.js"></script>
</body>
</html>