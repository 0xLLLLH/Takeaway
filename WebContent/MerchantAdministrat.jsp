<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet">



<!-- Custom styles for this template -->
<link href="css/MerchantAdministrat.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<script charset="utf-8" src="js/MerchantAdministrat.js"></script>
<title>我的店铺</title>
</head>
<!-- #27AE60 -->
<body>
<div id="zhezhao" style="position:absolute;z-index:1;width:100%;height:100%;background-color:silver;display:none;opacity:.2;">
<!--zhezhao end-->
</div>
<div style="z-index:0;">                     		  <!-- 总 -->
  	  <div class="header">           			  <!-- 黄白 page-header-->
        <div class="top-nav">			  <!-- 黄 top-nav -->
          <div class="topnav-wrap">       
            <div class="fr">              <!-- 右 -->
    		  <div id="is-login" class="fl">
      			<span class="fl">欢迎你，亲</span>
    		  </div>
            </div>
                   
              <span class="fl" id="address">
                <span id="curr-location" class="fl">当前位置</span>
                <div class="fl" id="changePosition">
                  <a href="LocationSelect.jsp" class="change-link">
                    <span class="fl">-[切换地址]</span>
                  </a>
                </div>
              </span>
            
          </div>
        </div>
        <div class="middle-nav">          <!-- 白 -->
          <div class="middlenav-wrap">
            <h1 class="logo fl">
              <img class="img-responsive" alt="homepage" src="http://2a.zol-img.com.cn/product/61/566/ceP9S3zQbVvj6.jpg">
            </h1>
            <div class="desire fl">			<!-- 左 -->
              <a href="" class="ca-lightgrey"><span>首页</span></a>
              <span class="vertical-line">|</span>
              <a href="" class="ca-lightgrey" rel="nofollow"><span>我的外卖</span></a>
              <span class="vertical-line">|</span>
              <a href="" class="ca-lightgrey"><span>加盟合作</span></a>
            </div>
          </div>
        </div>
      </div>
      
<div id="loginDiv" class="window col-md-10 col-md-offset-1 shadowed">
	<h4 class="modal-title" style="line-height: 2.5;">详细信息</h4>
   <div class="modal-footer">
	<div class="field-group fl">
	 <label class="text">当前</label><label style="padding-right:48px">用户名：</label><label>小香猪</label>
    </div>
    <div class="field-group fl">
	 <label for="new-username">新</label><label style="padding-right:40px">用户名：</label>
	 <input type="text" name="username" id="new-username" class="f-text">
    </div>
    <div style="margin-top:125px;">
	 <button type="button" class="btn btn-success fl" style="margin-left:150px;">修改</button>
	 <button type="button" class="btn btn-default fr"  style="margin-right:150px;" onclick="hidLogin()">关闭</button>
	</div>
   </div>
</div>

      <div class="page-wrap">             <!-- 主体 -->
        <div class="inner-wrap">		<!-- 左留白 -->

<div class="orders-cont">		<!-- orders-cont clearfix -->

<div id="btn" class="orders-tab fl">
    <ul>
      <li><a href="javascript:void(0)" index='0' class="tab_btn curr_btn">订单中心</a></li>
      <li><a href="javascript:void(0)" index='1' class="tab_btn">餐厅管理</a></li>
      <li><a href="javascript:void(0)" index='2' class="tab_btn">菜品管理</a></li>
    </ul>
</div>


  <div class="orders-list">
	<div id="order" class="tab_div curr_div">
	<div style="min-height:200px;">
	 <h3 class="ct-commonblack">订单中心</h3>
	 <div class="tabs">
    	<ul class="clearfix">
      		<li index='0' class="dan_btn curdan_btn"><a href="javascript:void(0)" >订单</a></li>
      		<li index='1' class="dan_btn"><a href="javascript:void(0)" >退单</a></li>
   		</ul>
	</div>
	<hr>
	<div class="dan_div curdan_div">
	 <table class="table table-striped table-hover table-bordered" id="app_table">
		<tr><th>下单时间</th><th>用户名</th><th>用户地址</th><th>操作</th></tr>
		<tr><td>15:19</td><td>小香猪</td><td>学十</td>
		<td style="width:160px"><nobr><button type="button" class="button gray" style="width:80px">接单</button>
		<button type="button" class="button gray" style="width:80px">拒绝</button>
		</nobr></td></tr>
		
		<tr><td>15:13</td><td>小香猪</td><td>学十</td>
		<td style="width:160px"><nobr><button type="button" class="button gray" style="width:80px">接单</button>
		<button type="button" class="button gray" style="width:80px">拒绝</button>
		</nobr></td></tr>
		
		<tr><td>15:11</td><td>小香猪</td><td>学十</td>
		<td style="width:160px"><nobr><button type="button" class="button gray" style="width:80px">接单</button>
		<button type="button" class="button gray" style="width:80px">拒绝</button>
		</nobr></td></tr>
	 </table>
	</div>
	
	<div class="dan_div">
	 <table class="table table-striped table-hover table-bordered" id="app_table">
		<tr><th>退单时间</th><th>用户名</th><th>用户地址</th><th>操作</th></tr>
		<tr><td>15:19</td><td>小香猪</td><td>学十</td>
		<td style="width:160px"><nobr><button type="button" class="button gray" style="width:80px">接单</button>
		<button type="button" class="button gray" style="width:80px">拒绝</button>
		</nobr></td></tr>
		
		<tr><td>15:13</td><td>小香猪</td><td>学十</td>
		<td style="width:160px"><nobr><button type="button" class="button gray" style="width:80px">接单</button>
		<button type="button" class="button gray" style="width:80px">拒绝</button>
		</nobr></td></tr>
		
		<tr><td>15:11</td><td>小香猪</td><td>学十</td>
		<td style="width:160px"><nobr><button type="button" class="button gray" style="width:80px">接单</button>
		<button type="button" class="button gray" style="width:80px">拒绝</button>
		</nobr></td></tr>
		
		<tr><td>15:01</td><td>小香猪</td><td>学十</td>
		<td style="width:160px"><nobr><button type="button" class="button gray" style="width:80px">接单</button>
		<button type="button" class="button gray" style="width:80px">拒绝</button>
		</nobr></td></tr>
	 </table>
	</div>
	
	</div>
	</div>
	<div id="restaurant" class="tab_div ticket-list">
	 <h3 class="ct-commonblack">餐厅管理</h3>
	 <div class="tabs">
    	<ul class="clearfix">
      		<li index='0' class="tabb_btn currr_btn"><a href="javascript:void(0)" >优惠活动</a></li>
      		<li index='1' class="tabb_btn"><a href="javascript:void(0)" >发布通告</a></li>
     		<li index='2' class="tabb_btn"><a href="javascript:void(0)" >修改信息</a></li>
   		</ul>
	</div>
	<div>
	 <div id="first" class="tabb_div currr_div">
	 <div  class="mid">
	 <div style="width:980px;height: 100px;">
	  <div style="width:370px;height: 40px;margin-bottom: 13px;" class="fl">
	  	<div class="fl">
		<span class="inform fl">*</span>
		<label for="price" class="fl">起送价：</label>
		<input type="text" class="form-control fl" style="width: 50px;height: 23px;" id="price" onfocus="getFocus(inform_price)" onblur="loseFocus(this,inform_price)"/>
		<label for="price" style="padding-left:5px">元</label>
		</div>
		<div class="informerr fr" id="inform_price" style="display:none">
		 <div role="alert">
		 <span aria-hidden="true"></span>
		 <span class="sr-only">Error:</span>
			起送价不能为空
		 </div>
		</div>
	  </div>
	  
	  <div style="width:370px;height: 40px;margin-bottom: 13px;">
	  	<div class="fl">
		<span class="inform fl">*</span>
		<label for="cut" class="fl" style="padding-right:5px">销售额满</label>
		<input type="text" class="form-control fl" style="width: 50px;height: 23px;" id="cut1" onfocus="getFocus(inform_cut)" onblur="loseFocus(this,inform_cut)"/>
		<label for="cut" class="fl" style="padding-left:5px">元</label>
		
		<label for="cut" class="fl" style="padding-right:5px;padding-left:5px">减</label>
		<input type="text" class="form-control fl" style="width: 50px;height: 23px;" id="cut2" onfocus="getFocus(inform_cut)" onblur="loseFocus(this,inform_cut)"/>
		<label for="cut" class="fl" style="padding-left:5px">元</label>
		
		</div>
		<div class="informerr fr" id="inform_cut" style="display:none">
		 <div role="alert">
		 <span aria-hidden="true"></span>
		 <span class="sr-only">Error:</span>
			价额不能为空
		 </div>
		</div>
	  </div>
	  </div>
	  <br><br>
	  <button type="button" class="button gray">提交</button>
	 </div>
	 </div>
	 <div id="second" class="message-box tabb_div">
	  <form>
	  <div class="mid">
	  <div class="black">
	  <textarea name="feedback"></textarea>
	  </div>
	  <button type="button" class="button gray">提交</button>
	  </div>
	  </form>
	 </div>
	 <div id="third" class="tabb_div">
	     <form>
            <div class="form-field ">
                <label>店铺名称：</label>
                    <span ><%="店铺名称" %></span>
                    <span class="inline-link"><a href="javascript:showLogin()">更换</a></span>
            </div>

            <div class="form-field">
                <label>详细地址：</label>
                    <span ><%="详细地址" %></span>
                    <span class="inline-link "><a href="javascript:showLogin()">更换</a></span>
            </div>
            
            <div class="form-field">
                <label>联系人：</label>
                    <span ><%="联系人" %></span>
                    <span class="inline-link"><a href="javascript:showLogin()">更换</a></span>
            </div>
            
            <div class="form-field">
                <label>联系电话：</label>
                    <span ><%="联系电话" %></span>
                    <span class="inline-link"><a href="javascript:showLogin()">更换</a></span>
            </div>
        </form>
	 </div>
	</div>

	</div>
	<div id="dishes" class="tab_div">
	<div ><button type="button" class="button gray fr">添加标签</button></div>
	 <h3 class="ct-commonblack">菜品管理</h3>
	 
	 <div class="result-list">			<!-- 一个标签 -->
     <div class="poi-info" style="padding:10px;">
        <input type="text" class="fl" style="height:30px">
     </div>
     </div>
	 <hr>
	 
	 <div class="result-list">			<!-- 一个标签 -->
	 <a href="">
     <div class="poi-info">
        <h3 class="name fl">黄焖鸡米饭</h3>
     </div>
     </a>
    <div class="mid" style="margin-top:10px;height:20px"><button type="button" class="button gray">添加菜品</button></div>
    <div>				<!-- 标签内的菜品 -->
     <ul class="food-list">				<!-- 内容 -->
      <li class="clearfix">
       <div class="fl" style="padding:10px;padding-left:120px">
        <input type="text" class="food-name" style="height:25px">
       </div>
       <div class="fl" style="padding:10px;padding-left:15px">
        <input type="text" class="food-price fl" style="height:25px;width:50px">
       </div>
      </li>
      <li class="clearfix">
       <a href="" class="food fl">
       <p class="details fl ">
        <span class="food-name">小份黄焖鸡+米饭（醇香）</span>
       </p>
        <span class="food-price fl">￥    16元</span>
       </a>
      </li>
      
      <li class="clearfix">
       <a href="" class="food fl">
       <p class="details fl">
        <span class="food-name">小份黄焖鸡+米饭（醇香）</span>
       </p>
        <span class="food-price fl">￥    16元</span>
       </a>
      </li>
      
      <li class="clearfix">
       <a href="" class="food fl">
       <p class="details fl ">
        <span class="food-name">小份黄焖鸡+米饭（醇香）</span>
       </p>
        <span class="food-price fl">￥    16元</span>
       </a>
      </li>
    </ul>
    </div>
  </div>
  
  <hr>
  
  <div class="result-list">			<!-- 一个标签 -->
	 <a href="">
     <div class="poi-info">
        <h3 class="name fl">黄焖鸡米饭</h3>
     </div>
     </a>
    <div class="mid" style="margin-top:10px;height:20px"><button type="button" class="button gray">添加菜品</button></div>
    <div>				<!-- 标签内的菜品 -->
     <ul class="food-list">				<!-- 内容 -->
      <li class="clearfix">
       <a href="" class="food fl">
       <p class="details fl ">
        <span class="food-name">小份黄焖鸡+米饭（醇香）</span>
       </p>
        <span class="food-price fl">￥    16元</span>
       </a>
      </li>
    </ul>
    </div>
  </div>
  </div>
</div>



      </div>
    </div>
  </div>
 

<!--loginDiv end :z-index:2-->
<!--zhezhao start: z-index:1-->

  	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
</body>
</html>