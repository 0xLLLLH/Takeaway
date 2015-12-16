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
<link href="css/itemlist.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<title>这里修改为店铺名</title>
</head>
<body>
	<%@ include file='CommonHeader.jsp' %>
	<div class="tab-container">
		<div class="tab-item">
			<div class="cart"><!-- 购物车 -->
				<div class="cart-title">购物车<div class="clear fr"><span class="glyphicon glyphicon-trash"></span>清空</div></div>
				<div class="cart-body">
					<table id="cart-items" class="table table-hover" style="margin:0;">
						<tr><th>菜品</th><th>份数</th><th>单价</th></tr>
						<%for(int i=0;i<3;i++) { %>
						<tr data-id="<%= i%>"><td>菜品名</td><td><span class="plus fl">-</span><input type="text" class="count fl" value="99"/><span class="plus fl">+</span></td><td>&yen;121</td></tr>
						<%} %>
					</table>
				</div>
				<div class="cart-footer">
					<div class="total-price fl">
						<span class="glyphicon glyphicon-shopping-cart"></span>共&yen;10元
					</div>
					<div class="buy fr"><a style="color:white;">去下单</a></div>
				</div>
			</div>
		</div>
	</div>
	<div class="content clearfix">
		<div class="shop-summary clearfix">
			<div class="detail-block fl" style="position: relative;"></div><!-- 占位用 -->
			<div class="detail fl">
				<div class="top clearfix">
					<div  class="pic"><img class="img-responsive" src="http://p0.meituan.net/120.0/xianfu/bdcafce11742063f3d3091dd389bb49e414723.jpg"></div>
					<div class="title fl"><label>这里是店铺名,可以取得很长,比如现在这个</label></div>
					<div class="fl"></div>
				</div>
				<div class="dropdown-info">
					<p><b>商家地址:</b>aaaaaaaaa</p>
					<p><b>商家电话:</b>aaaaaaaaaaa</p>
					<p><b>营业执照:</b>aaaaaaaaaaaa</p>
				</div>
			</div>
			<div class="score-bar fl clearfix">
				<div class="avg fl">
					<div class="score"><strong>4.5</strong><span class="desc">分</span></div>
					<div class="desc">商家评分</div>
				</div>
				<div class="vertical-line-text fl"></div>
				<div  class="avg fl">
					<div class="score"><strong>39</strong>分钟</div>
					<div class="desc">平均送餐时间</div>
				</div>
				<div class="vertical-line-text fl"></div>
				<div class="avg fl">
					<div class="score"><strong>64</strong>%</div>
					<div class="desc">及时送餐率</div>
				</div>
			</div>
			<div class="extra-part fl">
				<div class="fold-3d fl"></div>	
				<div class="favor fl"></div>
			</div>
		</div>
		<div class="left-part">
			<div class="tab-area">
				<div class="tab-bar"><button class="button-pressed" data-target="tab-item">菜单</button><button data-target="tab-comment" >评价</button></div>	
				<div class="tab-container">
					<div class="tab-item">
						<div class="food-type clearfix">
							<div class="type" ><a class="selected" href="#">当前菜品分类</a></div>
							<%for (int i=0;i<10;i++) { %>
								<div class="type" ><a href="#">菜品分类</a></div>
							<%} %>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-container">
				<div class="tab-item">
					<div class="item-list">
						<div class="list-title">这里是标题</div>
						<div class="list-desc">这里是描述，可选</div>
						<div class="list-content">
							<%for (int i=0;i<10;i++) { %>
							<div class="list-item" data-id="<%= i%>">
								<div class="title fl">菜品名称</div>
								<div class="sold fr">总销量1231</div>
								<div class="plus fr">+</div>
								<div class="price fr">&yen;15元/份</div>
							</div>
							<%} %>
						</div>
					</div>
				</div>
				<div class="tab-comment" style="display: none;">
					<div class="comment-list clearfix">
						<div class="title clearfix">
							<form>
								<label class="filter selected"><input type="radio" checked="checked" name="inlineRadioOptions"/>全部评价(4703)</label>
								<label class="filter"><input type="radio" name="inlineRadioOptions"/>好评(4029)</label>
								<label class="filter"><input type="radio" name="inlineRadioOptions"/>中评(503)</label>
								<label class="filter last-filter"><input type="radio" name="inlineRadioOptions"/>差评(171)</label>
							</form>
						</div>
						<div class="comments">
							<ul>
								<%for (int i=0;i<10;i++){ %>
								<li class="comment">
									<div class="info clearfix">
										<span class="field clearfix">
											<span class="name fl">用户名</span>
											<span class="fl">总体评价</span>
											<i class="icon i-star"></i>
								        	<i class="icon i-star"></i>
								        	<i class="icon i-star"></i>
								        	<i class="icon i-star"></i>
								        	<i class="icon i-star-empty"></i>
											<span class="feel fl">中评</span>
											<span class="fr">评价时间</span>
										</span>
									</div>
									<div class="comment-content">
										这里是评价内容,这里是评价内容这里是评价内容这里是评价内容这里是评价内容这里是评价内容这里是评价内容
									</div>
								</li>
								<%} %>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!-- end of left-part -->
		<div class="right-part">
			<div class="tab-container">
				<div class="tab-item">
					<div class="wiget broadcast">
						<div class="broadcast-title">
							<label>订餐必读&amp;商家公告</label>
						</div>
						<div  class="broadcast-body">
							<p>这里是公告的内容，这里是公告的内容，这里是公告的内容，</p>
							<p>这里是公告的内容，这里是公告的内容，这里是公告的内容，这里是公告的内容，这里是公告的内容</p>
						</div>
					</div>
					<div class="wiget discount">
						在此处显示各类优惠信息
						在此处显示各类优惠信息
						在此处显示各类优惠信息
						在此处显示各类优惠信息
					</div>
				</div>
				<div class="tab-comment" style="display: none;">
					<div class="wiget score-board">
						<div class="score-board-title">(当前店铺名)总体评分</div>
						<div class="score-board-subtitile">(共收到10418份美食评价)</div>
						<div class="score-avg clearfix">
							<strong class="fl">4.5</strong>
							<span class="star-ranking fl">
								<span class="star-score" style="width: 110px"></span>
							</span>
							
						</div>
						<div class="score-board-detail">
							    <div class="field clearfix">
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
								      <span class="fl bar" style="width: 40px"></span>
								  	<span class="fl percent">87%</span>
							      </div>
							    <div class="field clearfix">
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
							          <i class="icon i-star-empty"></i>
							      <span class="fl bar" style="width: 10px"></span>
							      <span class="fl percent">13%</span>
							    </div>
							    <div class="field clearfix">
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
							          <i class="icon i-star-empty"></i>
							          <i class="icon i-star-empty"></i>
							      <span class="fl bar" style="width: 0px"></span>
							      <span class="fl percent" >0%</span>
							    </div>
							    <div class="field clearfix">
							          <i class="icon i-star"></i>
							          <i class="icon i-star"></i>
							          <i class="icon i-star-empty"></i>
							          <i class="icon i-star-empty"></i>
							          <i class="icon i-star-empty"></i>
							      <span class="fl bar" style="width: 0px"></span>
							      <span class="fl percent">0%</span>
							    </div>
							    <div class="field clearfix">
							          <i class="icon i-star"></i>
							          <i class="icon i-star-empty"></i>
							          <i class="icon i-star-empty"></i>
							          <i class="icon i-star-empty"></i>
							          <i class="icon i-star-empty"></i>
							      <span class="fl bar" style="width: 0px"></span>
							      <span class="fl percent">0%</span>
							    </div>
							</div>
					</div>
				</div>
			</div>
		</div><!-- end of right-part -->
	</div>
	
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	<script src="js/itemlist.js"></script>
</body>
</html>