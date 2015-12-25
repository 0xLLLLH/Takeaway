/**
 * 
 */
function getCookie(c_name){
	if (document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1){ 
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end))
			} 
		}
	return "";
}
      function getClass(className) { //className指class的值
       
                var tagname = document.getElementsByTagName('*');  //获取指定元素
                var tagnameAll = [];     //这个数组用于存储所有符合条件的元素
                for (var i = 0; i < tagname.length; i++) {     //遍历获得的元素
                    if (tagname[i].className.indexOf(className)>=0){     //如果获得的元素中的class的值等于指定的类名，就赋值给tagnameAll
                        tagnameAll[tagnameAll.length] = tagname[i];
                    }
                }
                return tagnameAll;
             
        }
 
 
 
        window.onload=function(){//载入事件
            var btn=getClass('tab_btn');//获取按钮数组
            var div=getClass('tab_div');//获取div数组
            var index=0;
            for(i=0;i<btn.length;i++){
                btn[i].onclick=function(){//按钮点击事件
                    index=(this.getAttribute('index')-0);//获取是第几个按钮按下
                    if(btn[index].className.indexOf('curr_btn')>=0) return;//如果按下的按钮为当前选中的按钮则无反应
                    for(i=0;i<btn.length;i++){
                        if(index==i){
                            btn[i].className='tab_btn curr_btn';
                            div[i].className='tab_div curr_div';
                        }else{
                            btn[i].className='tab_btn';
                            div[i].className='tab_div';
                        }
                    }
                }
            }
            //alert("hello");
            var btnn=getClass('tabb_btn');//获取按钮数组
            var divv=getClass('tabb_div');//获取div数组
            //alert(div);
            for(i=0;i<btnn.length;i++){
                btnn[i].onclick=function(){//按钮点击事件
                    index=(this.getAttribute('index')-0);//获取是第几个按钮按下
                    if(btnn[index].className.indexOf('currr_btn')>=0) return;//如果按下的按钮为当前选中的按钮则无反应
                    for(i=0;i<btnn.length;i++){
                        if(index==i){
                        	if(i==1){
                        		btnn[i].className='tabb_btn currr_btn';
                                divv[i].className='tabb_div currr_div message-box';
                        	}
                        	else{
                            btnn[i].className='tabb_btn currr_btn';
                            divv[i].className='tabb_div currr_div';
                        	}
                        }else{
                            btnn[i].className='tabb_btn';
                            divv[i].className='tabb_div';
                        }
                    }
                }
            }
            //alert("hello");
            
          //alert("hello");
            var btnd=getClass('dan_btn');//获取按钮数组
            var divd=getClass('dan_div');//获取div数组
            //alert(div);
            for(i=0;i<btnd.length;i++){
                btnd[i].onclick=function(){//按钮点击事件
                    index=(this.getAttribute('index')-0);//获取是第几个按钮按下
                    if(btnd[index].className.indexOf('curdan_btn')>=0) return;//如果按下的按钮为当前选中的按钮则无反应
                    for(i=0;i<btnd.length;i++){
                        if(index==i){
                        	if(i==1){
                        		btnd[i].className='dan_btn curdan_btn';
                                divd[i].className='dan_div curdan_div message-box';
                        	}
                        	else{
                            btnd[i].className='dan_btn curdan_btn';
                            divd[i].className='dan_div curdan_div';
                        	}
                        }else{
                            btnd[i].className='dan_btn';
                            divd[i].className='dan_div';
                        }
                    }
                }
            }
            //alert("hello");
        };
        
        
 /*华丽的三八线*/
        

function addbind(id){
	$(".type_list").hide();
	$("#"+id+"zt").bind("click",function(){
		var pt=$(this).find(".glyphicon");
		if(pt.hasClass("glyphicon-chevron-down"))
		{
			$(this).parent().parent().find("#"+id).slideDown("slow",function(){
				pt.removeClass("glyphicon-chevron-down");
				pt.addClass("glyphicon-chevron-up");
			});
		}
		else
		{
			$(this).parent().parent().find("#"+id).slideUp("slow",function(){
				pt.removeClass("glyphicon-chevron-up");
				pt.addClass("glyphicon-chevron-down");
			});
		}
	});
}
$(function(){
	$.ajax({
		url:"code/get_store_id.jsp",
		type:"get",
		data:{username:$("#username").val()},
		success:function(data){
			if(data.trim()=="-1"){
				//alert("请先申请您的店铺");
				window.location.href="ShopApplication.jsp";
			}
			$("#store_id").val(data.trim());
			//alert($("#store_id").val());
			$.ajax({
				url:"code/get_Shop_price.jsp",
				type:"get",
				data:{store_id:$("#store_id").val()},
				success:function(data){
					var pricetsd = $(data).find("price_tosend");
					var cut1 = $(data).find("cut1");
					var cut2 = $(data).find("cut2");
					//alert(pricetsd[0].firstChild.nodeValue);
					$("#pricetosnd").val(pricetsd[0].firstChild.nodeValue);
					$("#cut1").val(cut1[0].firstChild.nodeValue);
					$("#cut2").val(cut2[0].firstChild.nodeValue);
					
				}
			});
			$.ajax({
				url:"code/get_Shop_Notice.jsp",
				type:"get",
				data:{store_id:$("#store_id").val()},
				success:function(data){
					//alert(data);
					var notice = $(data).find("notice");
					$("#shop_notice").val(notice[0].firstChild.nodeValue);
				}
			});
		}
	})
	$("#price_smt").on("click",function(){
		//alert("11");
		$pricetosend=$("#pricetosnd").val().trim();
		$cut1=$("#cut1").val().trim();
		$cut2=$("#cut2").val().trim();
		//alert($pricetosend+" "+$cut1+" "+$cut2);
		$.ajax({
			url:"code/set_Shop_price.jsp",
			type:"get",
			data:{pricetosend:$pricetosend,cut1:$cut1,cut2:$cut2,store_id:$("#store_id").val()},
			success:function(){
				alert("已更新！");
			}
		});
	});
	$("#notice_smt").on("click",function(){
		$.ajax({
			url:"code/set_Shop_Notice.jsp",
			type:"get",
			data:{notice:$("#shop_notice").val(),store_id:$("#store_id").val()},
			success:function(){
				alert("已更新！");
			}
		});
	});
})

function un_change_del(){
	$(".change_type").unbind("click");
	$(".delete_type").unbind("click");
	$(".change_food").unbind("click");
	$(".delete_food").unbind("click");
}
function change_del(){
	$(".chang_type").unbind("click");
	$(".delete_type").unbind("click");
	$(".chang_food").unbind("click");
	$(".delete_food").unbind("click");
	$(".change_type").bind("click",function(){
		var bf_name=$(this).parent().prev().find(".name").text();
		if(bf_name!=""){//防止点两次修改出现bug
			$(".update_type_bnt_yes").unbind("click");
			$(".update_type_bnt_no").unbind("click");
		
			$it=$(this);
			var  add_div="<div> <div class=\"poi-info\">"
				+"<input type=\"text\" class=\"form-control new-type-text fl\" value=\""+bf_name+"\">"
				+"<a href=\"javascript:void(0)\" class=\"update_type_bnt_yes fl type-sel-yes\"><span class=\"glyphicon glyphicon-ok \" style=\"color:green\"></span></a>"
				+"<a href=\"javascript:void(0)\" class=\"update_type_bnt_no  fl type-sel-no\"><span class=\"glyphicon glyphicon-remove\" style=\"color:red\"></span></a>"
				+"</div><div style=\"height:1px;color:white\"></div></div>";
				$temp = $(this).parent().prev();
				var type_id =$(this).parent().attr("id");
				$(this).parent().prev().replaceWith(add_div);
				$(".update_type_bnt_yes").bind("click",function(){
					var newname =$(this).prev().val().trim();
					if(newname==""){
						alert("名称不能为空");
					}
					else{
						$iter=$(this);
						$.ajax({
							url:"code/deal_Bug_checkDishType_repeat.jsp",
							data:{type:newname,store_id:$("#store_id").val()},
							type:"get",
							success:function(data){
								//alert(data);
								if(data.trim()=="repeat")
									alert("已经存在该标签");
								else{
									//alert("1");
									var add_type_list="<div><a href=\"javascript:void(0)\" class=\"type_title\" id=\""+type_id+"zt"+"\">"
									+"<div class=\"poi-info\" >"
									+"<h3 class=\"name fl\">"+newname+"</h3><span style=\"display:block;margin-right:20px;margin-top:20px;color:black;\" class=\"glyphicon glyphicon-chevron-up fr\"></span>"
									+"</div></a><div style=\"height:1px;color:white\"></div></div>"
									$iter.parent().parent().replaceWith(add_type_list);
									//重新绑定展开动画
									$("#"+type_id+"zt").bind("click",function(){
										var pt=$(this).find(".glyphicon");
										if(pt.hasClass("glyphicon-chevron-down"))
										{
											$(this).parent().parent().find("#"+type_id).slideDown("slow",function(){
												pt.removeClass("glyphicon-chevron-down");
												pt.addClass("glyphicon-chevron-up");
											});
										}
										else
										{
											$(this).parent().parent().find("#"+type_id).slideUp("slow",function(){
												pt.removeClass("glyphicon-chevron-up");
												pt.addClass("glyphicon-chevron-down");
											});
										}
									});
									$.ajax({
										url:"code/update_Dish_Type.jsp",
										type:"get",
										data:{type_id:type_id,type:newname},
										success:function(data){
											//alert("changed");
										}
									});
								}
							}
						});
					}
				});
				$(".update_type_bnt_no").bind("click",function(){
					var bf_id=$(this).parent().parent().next().attr("id");//获取之前类型的id
					$(this).parent().parent().replaceWith($temp);
					//重新绑定展开动画
					$("#"+bf_id+"zt").bind("click",function(){
						var pt=$(this).find(".glyphicon");
						if(pt.hasClass("glyphicon-chevron-down"))
						{
							$(this).parent().parent().find("#"+bf_id).slideDown("slow",function(){
								pt.removeClass("glyphicon-chevron-down");
								pt.addClass("glyphicon-chevron-up");
							});
						}
						else
						{
							$(this).parent().parent().find("#"+bf_id).slideUp("slow",function(){
								pt.removeClass("glyphicon-chevron-up");
								pt.addClass("glyphicon-chevron-down");
							});
						}
					});
				});
				//alert($(this).parent().prev().find(".name").text()); 修改前的类型名
				//alert($(this).parent().attr("id"));/*类型修改按钮*/
		}
	});
	$(".delete_type").bind("click",function(){
		if(confirm("该标签的所有菜都会被删除，确定删除吗？")){
			$it=$(this);
			$.ajax({
				url:"code/delete_Dish_Type.jsp",
				type:"get",
				data:{store_id:$("#store_id").val(),type_id:$(this).parent().attr("id")},
				success:function(data){
					$it.parent().slideUp("slow",function(){
						$(this).prev().hide("slow");
					});
				}	
			});
		}
		//alert($(this).parent().attr("id"));/*类型删除按钮*/
	});
	$(document).on("click",".change_food",function(){
		$bf_dish_name=$(this).prev().find(".food-name").text();
		$bf_dish_price=$(this).prev().find(".food-price").text();
		if($bf_dish_name!=""){//防止多次点击修改
		$(".update_food_bnt_yes").unbind("click");
		$(".update_food_bnt_no").unbind("click");
		//alert($(this).attr("id").replace("fcg",""));
		$dish_id=$(this).attr("id").replace("fcg","");
		$bf_dish_price=$bf_dish_price.replace("￥","");
		$bf_dish_price=$bf_dish_price.replace("元","");
		$bf_dish_price=$bf_dish_price.trim();
		//alert($dish_id);
		//alert($bf_dish_name+" "+$bf_dish_price);
		var add_div="<div><ul class=\"food-list\"><li class=\"clearfix\">"
			+"<a href=\"javascript:void(0)\" class=\"food fl\">"
			+"<p class=\"details fl \">"
			+"<input type=\"text\" class=\"form-control fl in_dish_name\" style=\"width:150px;height:26px;margin-left:85px\" placeholder=\"新的菜名\" value=\""+$bf_dish_name+"\">"
			+"</p><div class=\"food-div fl\"><span class=\"fl\">￥    </span><input type=\"text\" class=\"form-control fl in_dish_price\" style=\"width:80px;height:26px;\" placeholder=\"菜的价格\" value=\""+$bf_dish_price+"\"><span class=\"fl\" style=\"margin-left:5px\">元</span></div></a>"
			+"<a href=\"javascript:void(0)\" class=\"update_food_bnt_yes fl food-sel-yes\"><span class=\"glyphicon glyphicon-ok\" style=\"color:green\"></span></a>"
			+"<a href=\"javascript:void(0)\" class=\"update_food_bnt_no food-sel-no\"><span class=\"glyphicon glyphicon-remove \" style=\"color:red\"></span></a>"
			+"</li></ul></div>";
		$temp=$(this).parent().parent().parent();
		$(this).parent().parent().parent().replaceWith(add_div);
		$(".update_food_bnt_yes").bind("click",function(){
			$new_dish_name=$(this).prev().find(".in_dish_name").val();
			$new_dish_price=$(this).prev().find(".in_dish_price").val();
			$type_id=$(this).parent().parent().parent().parent().attr("id");
			$iter=$(this).parent().parent().parent();
			//alert($new_dish_name+" "+$new_dish_price+" "+$type_id);
			$.ajax({
				url:"code/update_Dish.jsp",
				type:"get",
				data:{dish_name:$new_dish_name,dish_price:$new_dish_price,dish_id:$dish_id},
				success:function(data){
					if(data.trim()=="repeat")
						alert("这个分类已经有这道菜了");
					else{
						var add_dish_list="<div><ul class=\"food-list\"><li class=\"clearfix\">"
							+"<a href=\"javascript:void(0)\" class=\"food fl\">"
							+"<p class=\"details fl \">"
							+"<span class=\"food-name\">"+$new_dish_name+"</span></p>"
							+"<span class=\"food-price fl\">￥    "+$new_dish_price+"元</span></a>"
							+"<a href=\"javascript:void(0) \" style=\"color:black;\" class=\"change_food\" id=\""+$dish_id+"fcg"+"\"><span class=\"glyphicon glyphicon-edit\" ></span></a>"
							+"<span> | </span>"
							+"<a href=\"javascript:void(0)\" style=\"color:black;\" class=\"delete_food\" id=\""+$dish_id+"fdel"+"\"><span class=\"glyphicon glyphicon-trash\"></span></a>"
							+"</li></ul></div>";
						$iter.replaceWith(add_dish_list);
					}
				}
			});
		});
		$(".update_food_bnt_no").on("click",function(){
			$(this).parent().parent().parent().replaceWith($temp);
		});
		}
	});
	$(".delete_food").bind("click",function(){
		$it=$(this);
		$dish_id=$(this).attr("id").replace("fdel","");
		//alert($(this).attr("id").replace("fdel",""));
		$.ajax({
			url:"code/delete_Dish.jsp",
			type:"get",
			data:{dish_id:$dish_id},
			success:function(data){
				//alert(data);
				$it.parent().parent().parent().hide("slow",function(){
					$(this).remove();
				});
			}
		});
	});
}

function bind_bnt(){//绑定按钮
	change_del();
	//增加标签按钮
	$(".add_type_bnt").bind("click",function(){
		$(".add_type_bnt_remove").unbind("click");
		$(".add_type_bnt_yes").unbind("click");
		
		var add_div="<div> <div class=\"poi-info\">"
			+"<input type=\"text\" class=\"form-control new-type-text fl\"  placeholder=\"新的分类名称\">"
			+"<a href=\"javascript:void(0)\" class=\"add_type_bnt_yes fl type-sel-yes\"><span class=\"glyphicon glyphicon-ok \" style=\"color:green\"></span></a>"
			+"<a href=\"javascript:void(0)\" class=\"add_type_bnt_remove  fl type-sel-no\"><span class=\"glyphicon glyphicon-remove\" style=\"color:red\"></span></a>"
			+"</div><div style=\"height:1px;color:white\"></div></div>";
		$(".result-list").children("div:first").before(add_div);
		$(".result-list").children("div:first").find("input").focus();//焦点
		$(".add_type_bnt_remove").bind("click",function(){
			$(this).parent().parent().remove();
		});
		$(".add_type_bnt_yes").bind("click",function(){
			$it=$(this);
			if($(this).prev().val().trim()!=""){
				$.ajax({
					url:"code/check_Dish_Type_Repeat.jsp",
					type:"get",
					data:{store_id:$("#store_id").val(),type:$(this).prev().val().trim()},
					success:function(data){
						//alert(data);
						if(document.getElementById(data.trim())!=null){
							alert("已经存在该标签！");
						}
						else {
							var title_id=data.trim()+"zt";
							//alert(title_id);
							var add_type_list="<div><a href=\"javascript:void(0)\" class=\"type_title\" id=\""+title_id+"\">"
							+"<div class=\"poi-info\" >"
							+"<h3 class=\"name fl\">"+$it.prev().val()+"</h3><span style=\"display:block;margin-right:20px;margin-top:20px;color:black;\" class=\"glyphicon glyphicon-chevron-down fr\"></span>"
							+"</div></a><div style=\"height:1px;color:white\"></div></div>"
							+"<div class=\"type_list\"  id=\""+data.trim()+"\">"
							+"<a href=\"javascript:void(0)\" style=\"margin-left:20px;color:black;\" class=\"change_type\"><span class=\"glyphicon glyphicon-edit\"></span> </a>"
							+"<span> | </span>"
							+"<a href=\"javascript:void(0)\" style=\"color:black;\" class=\"delete_type\"><span class=\"glyphicon glyphicon-trash\"> </span></a>"
							+"<div class=\"add_center center-block\" style=\"margin-top:10px\">"
							+"<a href=\"javascript:void(0)\" class=\"add_food_bnt\" ><span class=\"plus fl\">+</span><span class=\"fl\">新增菜</span></a>"
							+"</div>";
							$it.parent().parent().replaceWith(add_type_list);//打勾替换内容
							un_change_del()
							change_del();//绑定click
							
							$("#"+data.trim()).hide();
							$("#"+data.trim()+"zt").bind("click",function(){
								var pt=$(this).find(".glyphicon");
								if(pt.hasClass("glyphicon-chevron-down"))
								{
									$(this).parent().parent().find("#"+data.trim()).slideDown("slow",function(){
										pt.removeClass("glyphicon-chevron-down");
										pt.addClass("glyphicon-chevron-up");
									});
								}
								else
								{
									$(this).parent().parent().find("#"+data.trim()).slideUp("slow",function(){
										pt.removeClass("glyphicon-chevron-up");
										pt.addClass("glyphicon-chevron-down");
									});
								}
							});
						}
					}
				});
			}
			else alert("名称不能为空");
			//$(this).prev().val();
		});
		
	});

	//增加菜品按钮
	$(document).on("click",".add_food_bnt",function(){
		$(".add_food_bnt_remove").unbind("click");//解绑
		$(".add_food_bnt_yes").unbind("click");
		var add_div="<div><ul class=\"food-list\"><li class=\"clearfix\">"
			+"<a href=\"javascript:void(0)\" class=\"food fl\">"
			+"<p class=\"details fl \">"
			+"<input type=\"text\" class=\"form-control fl in_dish_name\" style=\"width:150px;height:26px;margin-left:85px\" placeholder=\"新的菜名\">"
			+"</p><div class=\"food-div fl\"><span class=\"fl\">￥    </span><input type=\"text\" class=\"form-control fl in_dish_price\" style=\"width:80px;height:26px;\" placeholder=\"菜的价格\"><span class=\"fl\" style=\"margin-left:5px\">元</span></div></a>"
			+"<a href=\"javascript:void(0)\" class=\"add_food_bnt_yes fl food-sel-yes\"><span class=\"glyphicon glyphicon-ok\" style=\"color:green\"></span></a>"
			+"<a href=\"javascript:void(0)\" class=\"add_food_bnt_remove food-sel-no\"><span class=\"glyphicon glyphicon-remove \" style=\"color:red\"></span></a>"
			+"</li></ul></div>";
		$(this).parent().after(add_div);
		$(this).parent().next().find(".in_dish_name").focus();//焦点
		//新增行的取消按钮x
		$(".add_food_bnt_remove").bind("click",function(){
			$(this).parent().parent().parent().remove();
		});
		//新增行的确认按钮√
		$(".add_food_bnt_yes").bind("click",function(){
			$dish_name = $(this).prev().find(".in_dish_name").val().trim();
			$dish_price = $(this).prev().find(".in_dish_price").val().trim();
			$father_type_id=$(this).parent().parent().parent().parent().attr("id");
			//alert($father_type_id);
			$it=$(this);
			//alert($dish_name+" "+$dish_price);
			if($dish_name =="") alert("菜名不能为空");
			else if($dish_price=="") alert("价格不能为空");
			else{
				$.ajax({
					url:"code/check_Dish_Repeat.jsp",
					type:"get",
					data:{type_id:$father_type_id,dish_name:$dish_name,dish_price:$dish_price,store_id:$("#store_id").val()},
					success:function(data){
						if(data.trim()=="repeat")
							alert("这个分类已经添加了这道菜");
						else{
							//alert(data);
							var add_dish_list="<div><ul class=\"food-list\"><li class=\"clearfix\">"
								+"<a href=\"javascript:void(0)\" class=\"food fl\">"
								+"<p class=\"details fl \">"
								+"<span class=\"food-name\">"+$dish_name+"</span></p>"
								+"<span class=\"food-price fl\">￥    "+$dish_price+"元</span></a>"
								+"<a href=\"javascript:void(0) \" style=\"color:black;\" class=\"change_food\" id=\""+data.trim()+"fcg"+"\"><span class=\"glyphicon glyphicon-edit\" ></span></a>"
								+"<span> | </span>"
								+"<a href=\"javascript:void(0)\" style=\"color:black;\" class=\"delete_food\" id=\""+data.trim()+"fdel"+"\"><span class=\"glyphicon glyphicon-trash\"></span></a>"
								+"</li></ul></div>";
							$it.parent().parent().parent().replaceWith(add_dish_list);
							change_del();
						}
					}
				});
				
			}
		});
		
	});
	
}
$(function(){
	$.ajax({
		url:"code/get_Shop_dishList.jsp",
		type:"get",
		data:{username:$("#username").val()},
		success:function(data){
			var type_id=$(data).find("type_id");
			var type=$(data).find("type");
			var dish_num=$(data).find("dish_num");
			var dish_id=$(data).find("dish_id");
			var dish_name=$(data).find("dish_name");
			var price=$(data).find("price");
			var store_id=$(data).find("store_id");
			$("#store_id").val(store_id[0].firstChild.nodeValue);
			//alert($("#store_id").val());
			for(var i=0,s=0;i<type_id.length;++i){
				var add_type_list="<div><a href=\"javascript:void(0)\" class=\"type_title\" id=\""+type_id[i].firstChild.nodeValue+"zt"+"\">"
				+"<div class=\"poi-info\" >"
				+"<h3 class=\"name fl\">"+type[i].firstChild.nodeValue+"</h3><span style=\"display:block;margin-right:20px;margin-top:20px;color:black;\" class=\"glyphicon glyphicon-chevron-down fr\"></span>"
				+"</div></a><div style=\"height:1px;color:white\"></div></div>"
				+"<div class=\"type_list\" id=\""+type_id[i].firstChild.nodeValue+"\">"
				+"<a href=\"javascript:void(0)\" style=\"margin-left:20px;color:black;\" class=\"change_type\"><span class=\"glyphicon glyphicon-edit\"></span> </a>"
				+"<span> | </span>"
				+"<a href=\"javascript:void(0)\" style=\"color:black;\" class=\"delete_type\"><span class=\"glyphicon glyphicon-trash\"> </span></a>"
				+"<div class=\"add_center center-block\" style=\"margin-top:10px\">"
				+"<a href=\"javascript:void(0)\" class=\"add_food_bnt\" ><span class=\"plus fl\">+</span><span class=\"fl\">新增菜</span></a>"
				+"</div>";
				$(".result-list").append(add_type_list);
				addbind(type_id[i].firstChild.nodeValue);
				for(var j =0;j<dish_num[i].firstChild.nodeValue;++j,++s){
					var add_dish_list="<div><ul class=\"food-list\"><li class=\"clearfix\">"
						+"<a href=\"javascript:void(0)\" class=\"food fl\">"
						+"<p class=\"details fl \">"
						+"<span class=\"food-name\">"+dish_name[s].firstChild.nodeValue+"</span></p>"
						+"<span class=\"food-price fl\">￥    "+price[s].firstChild.nodeValue+"元</span></a>"
						+"<a href=\"javascript:void(0) \" style=\"color:black;\" class=\"change_food\" id=\""+dish_id[s].firstChild.nodeValue+"fcg"+"\"><span class=\"glyphicon glyphicon-edit\" ></span></a>"
						+"<span> | </span>"
						+"<a href=\"javascript:void(0)\" style=\"color:black;\" class=\"delete_food\" id=\""+dish_id[s].firstChild.nodeValue+"fdel"+"\"><span class=\"glyphicon glyphicon-trash\"></span></a>"
						+"</li></ul></div>";
					$("#"+type_id[i].firstChild.nodeValue).append(add_dish_list);
				}
			}
			bind_bnt();
			/*
			 * 类别加载完后再加载当前订单
			 */
			$(function(){
				//alert($("#store_id").val());
				$.ajax({
					url:"code/get_Store_Orders.jsp",
					type:"get",
					data:{shop_id:$("#store_id").val(),state:11},
					success:function(data){
						//alert($("#store_id").val());
						var order_id=$(data).find("id");
						var name=$(data).find("name");
						var phone=$(data).find("phone");
						var address=$(data).find("address");
						var payment_type=$(data).find("payment_type");
						var remark=$(data).find("remark");
						var ordertime=$(data).find("setorder_time");
						var state=$(data).find("state");
						var store_id=$(data).find("store_id");
						var dishes=$(data).find("dishes");
						
						
						for(var i=0,s=0;i<order_id.length;i++){
							var new_row='<tr data-state="11" data-id="'+order_id[i].firstChild.nodeValue+'">'
							+'<td>'+ordertime[i].firstChild.nodeValue.substr(0,ordertime[i].firstChild.nodeValue.length-5)+'</td>'
							+'<td>'
							+dishes[i].firstChild.nodeValue
							+'</td>'
							+'<td>'+name[i].firstChild.nodeValue+'</td>'
							+'<td>'+phone[i].firstChild.nodeValue+'</td>'
							+'<td>'+address[i].firstChild.nodeValue+'</td>'
							+'<td style="width: 160px"><nobr>'
							+'<button type="button" class="btn-sm btn btn-success btn-agree"'
							+'style="width: 80px;">接单</button>'
							+'<button type="button" class="btn-sm btn btn-danger btn-disagree"'
							+'style="width: 80px">拒绝</button>'
							+'</nobr></td>'
							+'</tr>'
							$(".table-1").append($(new_row));
							if($(".table-1").find("tr").length>8)
								$(".table-1").find("tr:gt(7)").hide();
						}
					}
				});
			});
			/*
			 * 加载完后再加载当前退单订单
			 */
			$(function(){
				//alert($("#store_id").val());
				$.ajax({
					url:"code/get_Store_Orders.jsp",
					type:"get",
					data:{shop_id:$("#store_id").val(),state:1110},
					success:function(data){
						//alert($("#store_id").val());
						var order_id=$(data).find("id");
						var name=$(data).find("name");
						var phone=$(data).find("phone");
						var address=$(data).find("address");
						var payment_type=$(data).find("payment_type");
						var remark=$(data).find("remark");
						var ordertime=$(data).find("setorder_time");
						var state=$(data).find("state");
						var store_id=$(data).find("store_id");
						var dishes=$(data).find("dishes");
						for(var i=0,s=0;i<order_id.length;i++){
							var new_row='<tr data-state="1110" data-id="'+order_id[i].firstChild.nodeValue+'">'
							+'<td>'+ordertime[i].firstChild.nodeValue.substr(0,ordertime[i].firstChild.nodeValue.length-5)+'</td>'
							+'<td>'
							+dishes[i].firstChild.nodeValue
							+'</td>'
							+'<td>'+name[i].firstChild.nodeValue+'</td>'
							+'<td>'+phone[i].firstChild.nodeValue+'</td>'
							//+'<td>'+address[i].firstChild.nodeValue+'</td>'
							+'<td style="width: 160px"><nobr>'
							+'<button type="button" class="btn-sm btn btn-success btn-agree"'
							+'style="width: 80px;">同意</button>'
							+'<button type="button" class="btn-sm btn btn-danger btn-disagree"'
							+'style="width: 80px">拒绝</button>'
							+'</nobr></td>'
							+'</tr>'
							$(".table-2").append($(new_row));
							if($(".table-2").find("tr").length>8)
								$(".table-2").find("tr:gt(7)").hide();
						}
					}
				});
			});
		}
		
	});
})

$(document).on("click",".btn-agree",function(){
	var $tr=$(this).parents("tr");
	var id=$tr.data("id");
	var state=$tr.data("state")+"1";
	$.ajax({
		url:"code/update_State.jsp",
		type:"get",
		data:{order_id:id,state:state},
		success:function(data){
				$tr.parent().find("tr:eq(8)").show();
				$tr.remove();
			}
		});
})

$(document).on("click",".btn-disagree",function(){
	var $tr=$(this).parents("tr");
	var id=$tr.data("id");
	var state=$tr.data("state")+"0";
	$.ajax({
		url:"code/update_State.jsp",
		type:"get",
		data:{order_id:id,state:state},
		success:function(data){
			$tr.parent().find("tr:eq(8)").show();
			$tr.remove();
			}
		});
})


        