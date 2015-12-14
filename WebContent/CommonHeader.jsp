<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<link href="css/commonheader.css" rel="stylesheet">
<div id="commonheader" class="headerbar">
	<div class="header-content">
		<span class="glyphicon glyphicon-map-marker" style='margin:0;font-size:13px';line-height:1.5;text-indent:2em><%out.println(place);%> </span><a href="./LocationSelect.jsp">[切换地址]</a>
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