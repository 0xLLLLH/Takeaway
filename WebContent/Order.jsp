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
<link href="css/order.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<title>确认订单</title>
</head>
<body>
	<%@ include file='CommonHeader.jsp' %>
	<%@ include file='isLoginTLE.jsp' %>
	<%
	String []dish_id =request.getParameterValues("id");
	String []dish_name = request.getParameterValues("name");
	String []dish_num = request.getParameterValues("num");
	String []dish_price =request.getParameterValues("price");
	String discount = request.getParameter("discount");
	String store_id=request.getParameter("store_id");
	String []dc = discount.split("-");
	String shop_name = request.getParameter("shop_name");
	int cut1 = Integer.parseInt(dc[0]);
	int cut2 = Integer.parseInt(dc[1]);
	double ttprice = Double.parseDouble(request.getParameter("ttprice"));
	if(ttprice>=cut1){
		ttprice-=cut2;
	}
	%>
	<div class="content">
		<div class="content-header">
			<a href="ItemList.jsp?store_id=<%out.println(store_id);%>" ><%out.println(shop_name);%></a><span style="margin: 0 6px;">></span><span style="font-weight: bold;color: #333;">确认购买</span>
			<input type="text" style="display:none" id="shop_id" value="<%out.print(store_id);%>">;
		</div>
		<div class="left-part">
			<table class="table dishes" id="dish_table">
				<tr><th>菜品</th><th style="text-align: right;">价格/份数</th></tr>
				<%for(int i =0 ;i< dish_id.length;++i)
				{
					out.println("<tr data-id="+dish_id[i]+" data-num="+dish_num[i]+"><td>"+dish_name[i]+"</td><td style=\"text-align: right;\">¥"+dish_price[i]+" x "+dish_num[i]+"</td></tr>");
				}
				%>
				<!-- 
				<tr><td>水煮酸菜肥羊捞饭+时蔬</td><td style="text-align: right;">¥13</td></tr>
				<tr><td>水煮酸菜肥羊捞饭+时蔬</td><td style="text-align: right;">¥13</td></tr>
				<tr><td>水煮酸菜肥羊捞饭+时蔬</td><td style="text-align: right;">¥13</td></tr>  -->
				
				<tr><td class="color_green">满减优惠</td><td class="color_green" style="text-align: right;">-¥<%out.println(ttprice+cut2>=cut1?cut2:"不满足满减要求");%></td></tr>
				<tr><td style="font-size: 16px;font-weight: bold;">合计</td><td style="text-align: right;font-size: 16px;font-weight: bold;">¥<%out.println(ttprice);%></td></tr>				
			</table>
			<div class="ticket-age"></div>
		</div>
		
		<!-- end of  left-part-->
		
		<div class="right-part">
			<div class="right-body">
				<div class="address-head">
					<a href="#"  class="toggle-modal add_address" data-target="#myModal" data-title="添加新地址"><i class="order-icon i-add-addr"></i>添加新地址</a>
					<h4>送餐详情</h4>
				</div>
				<div class="address-body">
					<div></div><!--在没有数据的时候插入新地址需要这个div-->
				
				
				
					<%-- <div class="address address-selected">
						<span class="modify-box"><a class="toggle-modal update_address" data-target="#myModal" data-title="修改地址">修改</a>&nbsp;&nbsp;&nbsp;<a>删除</a></span>
						<p class="address-line">林立豪 : 18806529323</p>
						<p class="address-line no-border place">浙江农林大学B4号-浙江农林大学b4</p>
					</div>
					<%for (int i=0;i<3;i++) {%>
					<div class="address">
						<span class="modify-box"><a  class="toggle-modal"  data-target="#myModal" data-title="修改地址">修改</a>&nbsp;&nbsp;&nbsp;<a>删除</a></span>
						<p class="address-line"><%=i %> 先生 ： 18806529323</p>
						<p class="address-line no-border">浙江农林大学B4号&nbsp;&nbsp;浙江农林大学b4</p>
					</div>
					<%} %> --%>
					
					
					
				</div>
				<div class="address-footer">
					<button class="footer-btn">显示所有地址</button>
				</div>
				<div class="field"><span>给商家留言：</span><input type="text" class="form-control" id="remark" placeholder="不要辣，放盐等口味要求"></div>
				<div class="field"><span>付款方式:</span><a>餐到付款</a><a class="selected">在线支付</a></div>
			</div><!-- end of right-body -->
			<div class="right-footer">
				<div class="deliver-time">
					<span>期望送达时间：</span>
					<select>
						<option>立即送出</option>
					</select>
				</div>
				<div class="pay-area">
					<label>您需支付 <span class="color_green" style="font-size: 30px;" id="total_price">￥<%out.println(ttprice);%></span></label>
					<button class="btn btn-success fr" id="gobuy">去付款</button>
				</div>
			</div>
		</div>
	<!-- end of right-part -->
	</div>
	<!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">添加新地址</h4>
	      </div>
	      <div class="modal-body">
	      	<form class="form-horizontal">
	      		<div class="form-group">
	      			<div class="col-md-3 col-md-offset-1"><label><span class="color_red">*</span>联系人：</label></div>
	      			<div class="col-md-7"><input type="text" class="form-control modal_name"></div>
	      		</div>
	      		<div class="form-group">
	      			<div class="col-md-3 col-md-offset-1"><label><span class="color_red">*</span>手机号码：</label></div>
	      			<div class="col-md-7"><input type="text" class="form-control modal_phone"></div>
	      		</div>
	      		<div class="form-group">
	      			<div class="col-md-3 col-md-offset-1"><label><span class="color_red">*</span>收餐地址：</label></div>
	      			<div class="col-md-7"><input type="text" class="form-control modal_firstPlace" disabled="true"></div>
	      		</div>
	      		<div class="form-group">
	      			<div class="col-md-3 col-md-offset-1"><label><span class="color_red">*</span>详细地址：</label></div>
	      			<div class="col-md-7"><input type="text" class="form-control modal_secondPlace"></div>
	      		</div>
	      	</form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	        <button type="button" class="btn btn-primary smt_address"  data-dismiss="modal">保存</button>
	      </div>
	    </div>
	  </div>
	</div><!-- end of  Modal-->
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="js/jquery-1.11.3.min.js"></script><!-- 
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script> -->
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	<script charset="utf-8" type="text/javascript" src="js/order.js"></script>
</body>
</html>