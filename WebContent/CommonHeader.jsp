<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<link href="css/commonheader.css" rel="stylesheet">
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script src="js/commonheader.js"></script>
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