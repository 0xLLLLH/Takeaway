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
<link href="css/mystyle.css" rel="stylesheet">


<!-- Custom styles for this template -->
<link href="css/MerchantAdministrat.css" rel="stylesheet">
<!-- <script src="../../assets/js/ie-emulation-modes-warning.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    
<title>商家页面</title>
</head>
<!-- #27AE60 -->
<body>
<input type="text" id="store_id" style="display:none">
<div id="zhezhao" style="position:absolute;z-index:1;width:100%;height:100%;background-color:silver;display:none;opacity:.2;">
<!--zhezhao end-->
</div>
<%@ include file='Header.jsp' %>
<%@ include file='isLoginTLE.jsp' %>
<div style="z-index:0;" class="container content">                     		  <!-- 总 -->

      <div class=" shadowed">             <!-- 主体 -->

<div class="orders-cont">		<!-- orders-cont clearfix -->

<div id="btn" class="orders-tab fl">
    <ul>
      <li><a href="javascript:void(0)" index='0' class="tab_btn curr_btn">订单中心</a></li>
      <li><a href="javascript:void(0)" index='1' class="tab_btn">餐厅管理</a></li>
      <li><a href="javascript:void(0)" index='2' class="tab_btn">菜品管理</a></li>
    </ul>
</div>


  <div class="orders-list ">
	<div id="order" class="tab_div curr_div">
	<div style="min-height:200px;">
	 <h3 class="ct-commonblack">订单中心</h3>
	 	<hr>
	 <div class="tabs">
    	<ul class="clearfix">
      		<li index='0' class="dan_btn curdan_btn"><a href="javascript:void(0)" >订单</a></li>
      		<li index='1' class="dan_btn"><a href="javascript:void(0)" >退单</a></li>
   		</ul>
	</div>
	<hr>
	<div class="dan_div curdan_div">
	 <table class="table table-striped table-hover table-bordered" id="app_table">
		 <tr><th>下单时间</th><th>菜名</th><th>收货姓名</th><th>手机号码</th><th>收货地址</th><th>操作</th></tr>
	 <% for(int i =0;i<8;i++){%>
		<tr><td>15:19</td><td>黄焖鸡米饭x2+米饭+可口可乐</td><td>小香猪</td><td>13251013453</td><td>浙江农林大学学10</td>
		<td style="width:160px"><nobr><button type="button" class="btn-sm btn btn-success" style="width:80px;">接单</button>
		<button type="button" class="btn-sm btn btn-danger" style="width:80px">拒绝</button>
		</nobr></td></tr>
	<% }%>
	 </table>
	</div>
	
	<div class="dan_div">
	 <table class="table table-striped table-hover table-bordered" id="app_table">
		<tr><th>申请时间</th><th>菜名</th><th>收货姓名</th><th>手机号码</th><th>退单理由</th><th>操作</th></tr>
		<% for(int i =0;i<8;i++){%>
		<tr><td>15:19</td><td>黄焖鸡米饭x2+米饭+可口可乐</td><td>小香猪</td><td>13251013453</td><td>不想要了</td>
		<td style="width:160px"><nobr><button type="button" class="btn-sm btn btn-success" style="width:80px;">同意退单</button>
		<button type="button" class="btn-sm btn btn-danger" style="width:80px">拒绝</button>
		</nobr></td></tr>
	<% }%>
	 </table>
	</div>
	
	</div>
	</div>
	<div id="restaurant" class="tab_div ticket-list">
	 <h3 class="ct-commonblack">餐厅管理</h3>
	 	<hr>
	 <div class="tabs">
    	<ul class="clearfix">
      		<li index='0' class="tabb_btn currr_btn"><a href="javascript:void(0)" >起送价<span> | </span>优惠活动</a></li>
      		<li index='1' class="tabb_btn"><a href="javascript:void(0)" >发布通告</a></li>
   		</ul>
	</div>
	<div>
		<hr>
	 <div id="first" class="tabb_div currr_div">
	 <div  class="mid">
	 <div style="width:980px;height: 100px;">
	  <div style="width:370px;height: 40px;margin-bottom: 13px;" class="fl">
	  	<div class="fl">
		<span class="glyphicon glyphicon-new-window fl" style="padding-right:15px;font-weight:bold"> 起送价: </span>
		<input type="text" class="form-control fl" style="width: 100px; height: 25px;" id="price" />
		<label for="price" style="padding-left:5px">元</label>
		</div>
		<div class="informerr fr" id="inform_price" style="display:none">
		 <div role="alert">
		 <span aria-hidden="true"></span>
		 </div>
		</div>
	  </div>
	  
	  <div style="width:370px;height: 40px;margin-bottom: 13px;">
	  	<div class="fl">
		<span class="glyphicon glyphicon-bullhorn fl" style="padding-right:15px;font-weight:bold"> 订单额满: </span>
		<input type="text" class="form-control fl" style="width:100px;height: 25px;" id="cut1" />
		<label for="cut" class="fl" style="padding-left:5px">元</label>
		
		<label for="cut" class="fl" style="padding-right:5px;padding-left:5px">减</label>
		<input type="text" class="form-control fl" style="width:100px;height: 25px;" id="cut2" />
		<label for="cut" class="fl" style="padding-left:5px">元</label>
		
		</div>
		<div class="informerr fr" id="inform_cut" style="display:none">
		 <div role="alert">
		 <span aria-hidden="true"></span>
		 </div>
		</div>
	  </div>
	  </div>
	  <br><br>
	  <button type="button" class="btn-sm btn btn-success" style="width:80px;">提交</button>
	 </div>
	 </div>
	 <div id="second" class="message-box tabb_div">
	  <form>
	  <div class="mid">
	  <div class="black">
	  <span class="glyphicon glyphicon-list-alt" style="line-height:3.5;font-weight:bold;font-size:20px"> 订餐必读&商家公告</span>
	  <textarea name="feedback" style="height:200px;margin:0 auto"></textarea>
	  </div>
	  <button type="button" class="btn-sm btn btn-success" style="width:80px;margin-top:15px">提交</button>
	  </div>
	  </form>
	 </div>
	</div>
	</div>
	<div id="dishes" class="tab_div" >
	<!-- <div ><button type="button" class="button gray fr">添加标签</button></div> -->
	 <h3 class="ct-commonblack">菜品管理</h3>
	 	<hr>
	 	<div class="add_center center-block">
	 	 	<a href="javascript:void(0)" class=" add_type_bnt"><span class="plus fl">+</span><span class="fl">新增分类</span></a>
	 	</div>
	 <div class="result-list">			<!-- 一个标签 -->
	 
      <!-- <a href="javascript:void(0)" class="type_title"> -->
     <!-- <div class="poi-info">
        <input type="text" class="form-control new-type-text fl"  placeholder="新的分类名称">
        <a href="javascript:void(0)"><span class="glyphicon glyphicon-ok fl type-sel-yes"></span></a>
        <a href="javascript:void(0)"><span class="glyphicon glyphicon-remove fl type-sel-no"></span></a>
     </div>
     
     
     <div class="add_center center-block" style="margin-top:10px">
  			 <a href="javascript:void(0)"><span class="plus fl">+</span><span class="fl">新增菜</span></a>
   	</div>
   	<div>
     <ul class="food-list">	
     <li class="clearfix">
      	 <a href="javascript:void(0)" class="food fl">
      	 <p class="details fl ">
       		 <input type="text" class="form-control fl" style="width:150px;height:26px;margin-left:85px" placeholder="新的菜名">
         </p>
       	<div class="food-div fl"><span class="fl">￥    </span><input type="text" class="form-control fl" style="width:80px;height:26px;" placeholder="菜的价格"><span class="fl" style="margin-left:5px">元</span></div>
       	</a>
       	菜删改按钮
        <a href="javascript:void(0)"><span class="glyphicon glyphicon-ok fl food-sel-yes" ></span></a>
        <a href="javascript:void(0)"><span class="glyphicon glyphicon-remove fl food-sel-no"></span></a>
      </li>
     </ul>
     </div>
     </a>
     
	<div style="height:1px;color:white"></div> -->
	 
	 
	 
<%-- 	 <a href="javascript:void(0)" class="type_title">
     <div class="poi-info">
        <h3 class="name fl">黄焖鸡米饭</h3><span style="display:block;margin-right:20px;margin-top:20px;color:black;" class="glyphicon glyphicon-chevron-down fr"></span>
     </div>
     </a>
     <!-- 类型删改按钮 -->
     <div class="type_list">
   	 	<a href="javascript:void(0)" style="margin-left:20px;color:black;"><span class="glyphicon glyphicon-edit"></span> </a>
   	 	<span> | </span>
    	 <a href="javascript:void(0)" style="color:black;"><span class="glyphicon glyphicon-trash"> </span></a> 
     
     
   		 <div class="add_center center-block" style="margin-top:10px">
  			 <a href="javascript:void(0)"><span class="plus fl">+</span><span class="fl">新增菜</span></a>
   		</div>
    	<div>				<!-- 标签内的菜品 -->
     	<ul class="food-list">				<!-- 内容 -->
      
      <!-- <li class="clearfix">
       <div class="fl" style="padding:10px;padding-left:120px">
        <input type="text" class="food-name" style="height:25px">
       </div>
       <div class="fl" style="padding:10px;padding-left:15px">
        <input type="text" class="food-price fl" style="height:25px;width:50px">
       </div>
      </li>
       -->
      	<%for(int i =0;i<6;++i) {%>
      	<li class="clearfix">
      	 <a href="javascript:void(0)" class="food fl">
      	 <p class="details fl ">
       	 <span class="food-name">小份黄焖鸡+米饭（醇香）</span>
       	</p>
       	 <span class="food-price fl">￥    16元</span>
       	</a>
       	<!-- 菜删改按钮 -->
        	<a href="javascript:void(0) " style="color:black;"><span class="glyphicon glyphicon-edit" ></span></a>
        	<span> | </span>
     		<a href="javascript:void(0)" style="color:black;"><span class="glyphicon glyphicon-trash"></span></a> 
      	</li>
      	<%} %>
    	</ul>
    	</div>
 	 </div>
 </div>
 
 
  <a href="javascript:void(0)" class="type_title">
     <div class="poi-info">
        <h3 class="name fl">黄焖鸡米饭</h3><span style="display:block;margin-right:20px;margin-top:20px;color:black;" class="glyphicon glyphicon-chevron-down fr"></span>
     </div>
     </a>
 <div class="type_list">
   	 	<a href="javascript:void(0)" style="margin-left:20px;color:black;"><span class="glyphicon glyphicon-edit"></span> </a>
   	 	<span> | </span>
    	 <a href="javascript:void(0)" style="color:black;"><span class="glyphicon glyphicon-trash"> </span></a> 
     
     
   		 <div class="add_center center-block" style="margin-top:10px">
  			 <a href="javascript:void(0)"><span class="plus fl">+</span><span class="fl">新增菜</span></a>
   		</div>
    	<div>				
     	<ul class="food-list">			
    
      	<li class="clearfix">
      	 <a href="javascript:void(0)" class="food fl">
      	 <p class="details fl ">
       	 <span class="food-name">小份黄焖鸡+米饭（醇香）</span>
       	</p>
       	 <span class="food-price fl">￥    16元</span>
       	</a>
       	<!-- 菜删改按钮 -->
        	<a href="javascript:void(0) " style="color:black;"><span class="glyphicon glyphicon-edit" ></span></a>
        	<span> | </span>
     		<a href="javascript:void(0)" style="color:black;"><span class="glyphicon glyphicon-trash"></span></a> 
      	</li>
    	</ul>
    	</div>
 	 </div>
 </div> --%> 


      </div>
    </div>
  </div>
 

<!--loginDiv end :z-index:2-->
<!--zhezhao start: z-index:1-->

  	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<!-- <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script> -->
	<script src="js/jquery-1.11.3.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	<script charset="utf-8" type="text/javascript" src="js/headroom.min.js"></script>
	<script src="js/jQuery.headroom.min.js"></script>
	<script charset="utf-8" src="js/MerchantAdministrat.js"></script>
</body>
</html>