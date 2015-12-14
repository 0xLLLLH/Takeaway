/**
 * 
 */
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
        function getFocus(inform1,inform2){
    		inform1.style.display="none";
    		inform2.style.display="none";
    	}
    	function loseFocus(txt,inform){
    		if (txt.value==""){
    			inform.style.display="block";
    		}
    	}
    	
    	
    	
    	//弹窗
    	function showLogin() {
            var loginDiv = document.getElementById("loginDiv");
            var zhezhao = document.getElementById("zhezhao");
            var clientx = document.documentElement.clientWidth;
            var clienty = document.documentElement.clientHeight;
            var l_margin = (clientx - parseInt(loginDiv.style.width)) / 2;
            var t_margin = (clienty - parseInt(loginDiv.style.height)-200) / 2
            loginDiv.style.left = l_margin + "px";
            loginDiv.style.top = t_margin +"px";
            loginDiv.style.display = "block";
            zhezhao.style.display = "block";
        }
        function hidLogin() {
            var loginDiv = document.getElementById("loginDiv");
            var zhezhao = document.getElementById("zhezhao");
            loginDiv.style.display = "none";
            zhezhao.style.display = "none";
        }
        