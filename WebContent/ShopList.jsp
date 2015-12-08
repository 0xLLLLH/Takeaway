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
<%
	String place = request.getParameter("place");
	double lng = Double.parseDouble(request.getParameter("lng"));
	double lat = Double.parseDouble(request.getParameter("lat"));
	String maininfo="ShopList.jsp?place="+place+"&lng="+lng+"&lat="+lat;
%>
<title>附近店铺</title>
</head>
<body>	
	<input value="<%out.print(lng);%>" id="lng" style="display:none">
	<input value="<%out.print(lat);%>" id="lat" style="display:none">
	<input value="" id="type" style="display:none">
	<input value="" id="order" style="display:none">
	<div id="top"></div>
	<div class="fixed-button">
		<a href="#top">
			<div class="return-top"></div>
		</a>
	</div>
	<div id="commonheader" class="headerbar">
		<div class="header-content">
			当前位置:<%out.println(" "+place+" ");%><a href="./LocationSelect.jsp">[切换地址]</a>
		</div>
	</div>
	<div class="search-area">
		<div class="search-content">
			<div class="img-area fl"><img class="img-responsive" alt="homepage" src="images/zafu.png"></div>		
			<div class="linkarea fl">
				<a href="<%out.println(maininfo);%>" class="headerlink">首页</a>
				<span class="vertical-line">|</span>
				<a href="#" class="headerlink">我的外卖</a>
				<span class="vertical-line">|</span>
				<a href="ShopApplication.jsp" class="headerlink">加盟合作</a>
			</div>
			<form class="search-box-bordered fr">
				<input class="fl" type="text" placeholder="搜索商家,美食" id="search_txt1">
				<input class="fl clearfix " type="button" value="搜索" id="search_bnt1">
			</form>
		</div>
	</div>
	<div id="searchbar" class="searchbar header--fixed">
		<div class="img-area"></div>
		<form class="search-box center-block">
			<input class="fl" type="text" placeholder="搜索商家,美食" id="search_txt2">
			<input class="fl clearfix " type="button" value="搜索" id="search_bnt2">
		</form>
	</div>
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
		<!--
		<hr>
		<div class="discount-filter clearfix">
			<div class="left-part clearfix">
				<div class="discount-title">
					优惠筛选
				</div>
			</div>
			<div class="right-part clearfix">
					<span class="discount-type"><a href="#" class="selected">全部</a></span>
					<%for(int i=0;i<11;i++) { %>
						<span class="discount-type"> <a href="#" >快餐小吃</a></span>
					<%} %>
			</div>
		</div>
		-->
		<div class="divider"></div>
		<div class="sort-filter clearfix">
			<div class="sort"> <a href="#" class="sortway">默认排序</a></div>
			<div class="sort"> <a href="#" class="sortway">销量<span class="glyphicon glyphicon-sort-by-attributes-alt "></span></a></div>
			<div class="sort"> <a href="#" class="sortway">评价<span class="glyphicon glyphicon-sort-by-attributes-alt "></span></a></div>
			<div class="sort"> <a href="#" class="sortway">送餐速度<span class="glyphicon glyphicon-sort-by-attributes "></span></a></div>
		</div>
		<div class="shop-list clearfix" >
			<ul id="shop_list">
			<%-- 	<%
				for (int i=0;i<4;i++){
				%>
				<li class = "restaurant fl clearfix" data-delay='{"show": 432, "hide": 100 }' 
				data-toggle="popover" data-title="商家详情" data-placement="left auto" data-html="true"
				data-template="<div class='popover'  style='border:2px solid #5cb85c;' role='tooltip'><div class='arrow'  style='border-color:#5cb85c;'></div><h3 class='popover-title'></h3><div class='popover-content'></div></div>"
				data-content="<label style='color:#5cb85c;'>优惠信息</label><hr><p>优惠信息内容</p><label style='color:#5cb85c;'>商家地址</label><hr><p>商家地址内容</p><label style='color:#5cb85c;'>商家公告</label><hr><p>商家公告内容</p>" data-trigger="hover">	
					<a tabindex="0" class="restaurant-link" href="https://www.baidu.com" target="_blank">
						<div class="outer">
							<div class = "top-content">
								<div class="shop-preview">
									<img alt="preview"  src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=398990237,3888602267&fm=58">
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
				<%} %> --%>
			</ul>
		</div><!-- end of shop-list -->
	</div><!-- end of content -->
	<div  id="load_div" style="display:none">
		<div  class="loading">玩命加载中...</div>
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