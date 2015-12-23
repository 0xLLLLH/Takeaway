<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<link href="css/commonheader.css" rel="stylesheet">
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<%
	String username = (String)session.getAttribute("username");
	System.out.println(username);
%>
<input type="text" style='display:none' id="isLogin" value="<%if(username==null) out.println("0");else out.println("1");%>"/>
<div id="commonheader" class="headerbar">
	<div class="header-content">
		<span class="glyphicon glyphicon-map-marker" style="margin:0;font-size:13px;line-height:1.5em;text-indent:2em;" id="place"> </span><a href="./LocationSelect.jsp">[切换地址]</a>
		<div class="account-area fr">
			<div class="account-link" style="display: block" id="notlg"><a href="#" id="rg_bnt">注册</a>|<a href="#" id="lg_bnt">登录</a></div>
			<div class="account-link">
				<div class="dropdown">
					<a id="dLabel" data-target="#"  style="display: none" href="Signup.jsp" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">欢迎你，<%out.println(username);%><span class="caret"></span></a>
					<ul class="dropdown-menu" aria-labelledby="dLabel">
						<li><a href="#">我的订单</a></li>
						<li role="separator" class="divider"></li>
						<li><a href="#" id="outlg">退出</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="search-area">
	<div class="search-content clearfix">
		<div class="img-area fl"><img class="img-responsive" alt="homepage" src="images/zafu.png"></div>		
		<div class="linkarea fl">
			<a href="ShopList.jsp" class="headerlink"><span>首页 </span></a>
			<span class="vertical-line">|</span>
			<a href="#" class="headerlink"><span>我的外卖</span></a>
			<span class="vertical-line">|</span>
			<a href="#" class="headerlink"><span>加盟合作</span></a>
		</div>
		<form class="search-box-bordered fr clearfix">
			<input type="text" style='display:none' />  <!-- 取消回车自动提交表单 -->
			<input class="fl clearfix" type="text" placeholder="搜索商家,美食" id="search_txt1">
			<input class="fl clearfix" type="button" value="搜索" id="search_bnt1">
		</form>
	</div>
</div>
<!-- //////////// -->
 <div id="searchpage" style="display:none">
      <div class="search_content">
		<hr class="space">
		<div class="tab-bar" >
			<button class="button-active" data-toggle="rest">餐厅</button>
			<button data-toggle="food">美食</button>
		</div>
		<div class="text-field"><label>搜索"<span id="search_name" style="color:#27AE60">*</span>"的<span style="color:#27AE60">餐厅</span>结果</label></div>
		<div id="tab-container" class="shop-list clearfix">
			<div id="rest" class="rest-result clearfix" >
				<ul class="rest-result-list clearfix" id="search_shop_List">
					
				</ul>
			</div>
			<div id="food" class="food-result">
				<%-- <%for (int i=0;i<10;i++){ %> --%>
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
						</a>
					</div>
				</div>
				<%-- <%} %> --%>
			</div>
		</div><!-- end of tab-container -->
		</div>
	</div>
<script src="js/commonheader.js"></script>