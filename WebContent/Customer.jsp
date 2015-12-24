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
<link href="css/customer.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<script charset="utf-8" src="js/ajax.js"></script>

<title>我的外卖</title>
</head>
<body>
	<%@ include file='CommonHeader.jsp' %>
	<%@ include file='isLoginTLE.jsp' %>
	<div id="nowpage">
	<div class="content clearfix">
		<div class="tab-left">
			<div class="tab-group">
				<label>订单查询</label>
				<a class="selected tab-button"data-toggle="order-list">全部订单</a>
			</div>
			<div class="tab-group">
				<label>账号管理</label>
				<a class="tab-button" data-toggle="account">我的账号</a>
				<a class="tab-button" data-toggle="favorite">我的收藏</a>
			</div>
		</div>
		<div class="right-part">
			<div class="tab-container">
				<div class="order-list">
<!-- 订单开始-->		<%-- <%for (int i=0;i<0;i++) { %>
					<div class="order">
						<a class="order-another btn btn-success">再来一单</a>
						<div class="intro">
							<a class="preview fl" href="#">
								<img class="img-responsive" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=398990237,3888602267&fm=58">
							</a>
							<div class="info">
								<div class="info-row">
									<a href="#">这里是店铺的名字</a><span>商家电话：18806529323.619323</span>
								</div>
								<div class="info-row">
									<span>订单号：321313213213</span><span>下单时间：2015-12-23</span><a style="width: auto;margin-left:150px;"><span style="width: auto;">投诉商家</span></a>
								</div>
							</div>
						</div>
						<div class="detail clearfix"  style="display: none;">
							<div class="detail-left">
								<div class="field">菜品共1份，总价&yen;15元</div>
								<div class="field">
									<div class="clearfix"><div class="fl">菜名</div><div class="fr">&yen;15*1</div></div>
									<div class="clearfix"><div class="fl">菜名</div><div class="fr">&yen;15*1</div></div>
									<div class="clearfix"><div class="fl">菜名</div><div class="fr">&yen;15*1</div></div>
									<div class="clearfix"><div class="discount fl">满减优惠</div><div class="discount fr">-&yen;15*1</div></div>
								</div>
								<div class="field">
									<p>地址：浙江农林大学B4号 (浙江农林大学b4)</p>
									<p>姓名：林立豪(先生)</p>
									<p>电话：18806529323</p>
									<p>备注：b4+619323</p>
								</div>
							</div>
							<div class="detail-right">
	<!--  progress-area-->
								<div class="progress-area" style="display:block">
									<div class="step">
										<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单提交成功，等待付款</span><span class="fr">2015-12-23 11:14</span></p>
										<p><i class="i-orderarrow fl"></i><button class="btn btn-success">去付款</button>&nbsp;&nbsp;<button class="btn btn-default">取消订单</button></p>
								
									</div>
									<div class="step">
										<p class="clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-weight: bold;">订单取消</span><span class="fr">2015-12-23 11:14</span></p>
										<p><i class="i-orderarrow fl"></i><button class="btn btn-success">选择其他商家</button>&nbsp;&nbsp;<button class="btn btn-default">订单反馈</button></p>
									</div>
									<div class="step">
										<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">支付成功，等待商家接单</span><span class="fr">2015-12-23 11:14</span></p>
										<p><i class="i-orderarrow fl"></i><button class="btn btn-success">修改收货地址</button>&nbsp;&nbsp;<button class="btn btn-default">取消订单</button></p>
									</div>
									<div class="step">
										<p class="clearfix"><i class="icon i-ordernotok fl"></i><span class="fl" style="font-weight: bold;">商家拒绝接单，已退款到余额</span><span class="fr">2015-12-23 11:14</span></p>
										<p><i class="i-orderarrow fl"></i><button class="btn btn-success">选择其他商家</button>&nbsp;&nbsp;<button class="btn btn-default">取消订单</button></p>
									</div>
									<div class="step">
										<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">商家接单，制作配送中</span><span class="fr">2015-12-23 11:14</span></p>
										<p><i class="i-orderarrow fl"></i><button class="btn btn-success">确认收货</button>&nbsp;&nbsp;<button class="btn btn-default">我要催单</button>&nbsp;&nbsp;<button class="btn btn-default">申请退款</button></p>
									</div>
									<div class="step">
										<p class="clearfix"><i class="icon i-orderetyok fl"></i><span class="fl" style="font-weight: bold;">订单完成</span><span class="fr">2015-12-23 11:14</span></p>
									</div>
								</div><!-- end of progress-area -->
	<!-- end of progress-area -->
	<!-- commet-area-->					
								<div class="comment-area" style="display:none;">
									<div class="onerow clearfix"><i class="icon i-orderok fl"></i><span class="fl" style="font-size: 20px;">收货成功，赏个评价吧！</span></div>
									<div class="onerow clearfix"><label>评价</label></div>
									<div class="onerow clearfix">
										<span class="fl"><span class="color_red">*</span>总体评价：</span>
										<span class="stars-rank fl" data-rank="0">
						                	<i class="fl icon i-star-empty-n"></i>
						                	<i class="fl icon i-star-empty-n"></i>
						                	<i class="fl icon i-star-empty-n"></i>
						                	<i class="fl icon i-star-empty-n"></i>
						                	<i class="fl icon i-star-empty-n"></i>
						              	</span>
						              	<span class="inform fl">点击星星打分</span>
									</div>
									<div class="onerow clearfix">
									<span class="fl"><span class="color_red">*</span>送达时间：当天</span>
									<div class="dropdown fl">
									<button class="btn btn-default btn-xs dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
									请选择时间<span class="caret"></span>
									  </button>
									  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
									    <li><a href="#">Action</a></li>
									    <li><a href="#">Another action</a></li>
									    <li><a href="#">Something else here</a></li>
									    <li><a href="#">Separated link</a></li>
									  </ul>
									</div>
									<span class="fl">送达</span>
									</div>
									<div class="onerow clearfix">
										<span class="fl"><span class="color_red" style="visibility: hidden;">*</span>补充评价：</span>
										<textarea rows="5" cols="45"></textarea>
									</div>
									<div class="onerow submitbar">
										<button class="btn btn-success">提交</button>
										<span class="inform">提交之后不能修改哦~</span>
									</div>
									<div class="comment-footer">
										<span class="footer-inform">商家没有送餐？您可以致电客服<span class="color_green">400-233-3333</span>或 <a href="#" class="color_green">投诉商家</a>。</span>
									</div>
								</div><!-- end of comment-area -->
	<!--end of   comment-area -->					
	<!--comment-result  -->							
								<div class="comment-result" style="display: none;">
									<div class="onerow clearfix"><label style="font-size: 18px;">我的评价</label></div>
									<div class="onerow clearfix">
										<label class="fl"><span class="color_red">*</span>总体评价：</label>
										<span class="stars-rank fl" data-rank="0">
						                	<i class="fl icon i-star-empty-n"></i>
						                	<i class="fl icon i-star-empty-n"></i>
						                	<i class="fl icon i-star-empty-n"></i>
						                	<i class="fl icon i-star-empty-n"></i>
						                	<i class="fl icon i-star-empty-n"></i>
						              	</span>
									</div>
									<div class="onerow clearfix">
									<span class="fl"><span class="color_red">*</span><label>送达时间：</label>2015-12-22 18:50</span>
									</div>
									<div class="onerow clearfix">
										<span class="fl"><span class="color_red" style="visibility: hidden;">*</span><label>补充评价：</label></span>
										<div class="comment fl">评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价
										评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价评价</div>
									</div>
								</div><!-- end of comment-result -->
<!--end of comment-result  -->	
							</div>		
						</div>
					</div>
	<!--订单结束-->		<%} %> --%>
				</div><!-- end of order-list -->
			</div><!-- end of tab-container -->
			
		</div>
	</div>
	<div class="pagebar">
		<nav>
		  <ul class="pager">
		  	<li><a href="#" id="first"><< 首页</a></li>
		    <li><a href="#" id="prev">< 上一页</a></li>
		    <li><a href="#" id="next">下一页 ></a></li>
		    <li><a href="#" id="last">尾页 >></a></li>
		  </ul>
		</nav>
	</div>
	</div>
	<div  id="load_div" style="display:none"  >
		<div  class="loading">玩命加载中...</div>
	</div>
	
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	<script src="js/customer.js"></script>
</body>
</html>