<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<link href="css/commonheader.css" rel="stylesheet">
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script src="js/commonheader.js"></script>
<div id="commonheader" class="headerbar">
	<div class="header-content">
<<<<<<< HEAD
		<span class="glyphicon glyphicon-map-marker" style="margin:0;font-size:13px;line-height:1.5em;text-indent:2em;"><%out.println(place);%> </span><a href="./LocationSelect.jsp">[切换地址]</a>
		<div class="account-area fr">
			<div class="account-link" style="display: none"><a href="#">注册</a>|<a href="#">登录</a></div>
			<div class="account-link">
				<div class="dropdown">
					<a id="dLabel" data-target="#" href="Signup.jsp" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">用户名<span class="caret"></span></a>
					<ul class="dropdown-menu" aria-labelledby="dLabel">
						<li><a href="#">我的订单</a></li>
						<li role="separator" class="divider"></li>
						<li><a href="#">退出</a></li>
					</ul>
				</div>
			</div>
		</div>
=======
		<span class="glyphicon glyphicon-map-marker" style='margin:0;font-size:13px;line-height:1.5;text-indent:2em;'><%out.println(place);%> </span><a href="./LocationSelect.jsp">[切换地址]</a>
>>>>>>> refs/remotes/ZT837606704/master
	</div>
</div>


<div class="search-area">
	<div class="search-content clearfix">
		<div class="img-area fl"><img class="img-responsive" alt="homepage" src="http://2a.zol-img.com.cn/product/61/566/ceP9S3zQbVvj6.jpg"></div>		
		<div class="linkarea fl">
			<a href="<%out.println(maininfo);%>" class="headerlink">首页</a>
			<span class="vertical-line">|</span>
			<a href="#" class="headerlink">我的外卖</a>
			<span class="vertical-line">|</span>
			<a href="#" class="headerlink">加盟合作</a>
		</div>
		<form class="search-box-bordered fr clearfix">
			<input type="text" style='display:none' />  <!-- 取消回车自动提交表单 -->
			<input class="fl clearfix" type="text" placeholder="搜索商家,美食" id="search_txt1">
			<input class="fl clearfix" type="button" value="搜索" id="search_bnt1">
		</form>
	</div>
</div>