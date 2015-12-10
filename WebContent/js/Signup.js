	window.onload=function()
	{
		var str = document.cookie;
		if(!(str == "")){
		var arrStr = document.cookie.split("; ");
		var temp = arrStr[0].split("=");
		document.getElementById("login_username").value=temp[0];
		document.getElementById("login_password").value=temp[1];
		LoginForm.remember.checked = true;
		}
	}
	function getFocus(inform1,inform2){
		inform1.style.display="none";
		inform2.style.display="none";
	}
	function loseFocus(txt,inform){
		if (txt.value==""){
			inform.style.display="block";
		}
	}
	function loseFocusCheck(txt,inform){
		var pass=document.getElementById("password").value;
		if (txt.value!=pass){
			inform.style.display="block";
		}
	}
	function checkAccount(txt,inform)
	{
		var username=txt.value;
		if(username!="")
		{
			loadXMLDoc("code/check_Account.jsp?username="+username
					+"&timestamp="+new Date().getTime(),
					function()
					{
						if (xmlhttp.readyState==4 && xmlhttp.status==200)
						{
							var result = xmlhttp.responseXML.getElementsByTagName( "result_code" )[0].firstChild.nodeValue;
							if( result == "repeat" )
							{
								inform.style.display="block";
							}
							else
							{
								inform.style.display="none";
							}
						}
					});
		}
	}
	/*手机号正则表达式*/
	 function isPhone(aPhone) {  
          var bValidate = RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/).test(aPhone);  
          if (bValidate) {  
              return true;  
          }  
          else  
              return false;  
     } 
 	function isEnterLegal()
	{
 		var form=document.getElementById("RegForm");
		var username=form.username.value;
		var password=form.password.value;
		var confirmpass=form.confirmpass.value;
		var phone=form.phone.value;
		if(username!=""&&password!=""&&confirmpass==password&&document.getElementById("inform_account_exit").style.display=="none"&&phone!=""&&isPhone(phone))
		{
			submitAccount();
		}
		else
		{
			if(username=="")
				document.getElementById("inform_account").style.display="block";
			if(password=="")
				document.getElementById("inform_password").style.display="block";
			if(confirmpass!=password)
				document.getElementById("confirmpass").style.display="block";
			if(phone=="")
				document.getElementById("inform_phone").style.display="block";
			if(isPhone(phone)==false&&phone!="")
				document.getElementById("inform_phone_error").style.display="block";
		}
	} 
	function submitAccount()
	{
	    var form=document.getElementById("RegForm");
		var username=form.username.value;
		var password=form.password.value;
		var confirmpass=form.confirmpass.value;
		var phone=form.phone.value; 
		loadXMLDoc("code/submit_Account.jsp?username="+username
				+"&password="+password
				+"&phone="+phone
				+"&timestamp="+new Date().getTime(),
				function()
				{
					 if (xmlhttp.readyState==4 && xmlhttp.status==200)
					 {
						 var result = xmlhttp.responseXML.getElementsByTagName( "result_code" )[0].firstChild.nodeValue;
						 if( result == "success" )
						 {
							 // alert( "注册成功" );
							 window.location.href="LocationSelect.jsp";
						  }
						  else
						  {
							  alert( "注册失败" );
						  }
					 }
				});
	}
	function isLoginLegal()
	{
		 var form=document.getElementById("LoginForm");
		 var username=form.login_username.value;
		 var password=form.login_password.value;
		 if(username!=""&&password!="")
		 {
			 var inform_username = document.getElementById("inform_account_notexit");
			 var inform_password = document.getElementById("inform_password_error");
			 checkLogin(username,password,inform_username,inform_password);
		 }
		 else
		 {
			 if(username=="") document.getElementById("inform_account_login").style.display="block";
			 if(password=="") document.getElementById("inform_password_login").style.display="block";
		 }
	}
	function addCookie(objName,objValue,objHours){//添加cookie
		var str = objName + "=" + escape(objValue);
		if(objHours > 0){//为0时不设定过期时间，浏览器关闭时cookie自动消失
		var date = new Date();
		var ms = objHours*3600*1000;
		date.setTime(date.getTime() + ms);
		str += "; expires=" + date.toGMTString();
		}
		document.cookie = str;
		//alert("添加cookie成功");
	}
	function fun(m,n){
		return document.forms[m].elements[n].value;
	}
	function  checkLogin(username,password,inform_username,inform_password)
	{
		loadXMLDoc("code/check_Login.jsp?username="+username
				+"&password="+password+"&timestamp="+new Date().getTime(),
				function()
				{
					 if (xmlhttp.readyState==4 && xmlhttp.status==200)
					 {
						 var result = xmlhttp.responseXML.getElementsByTagName( "result_code" )[0].firstChild.nodeValue;
						 if( result == "username_notexit" )
						 {
							 inform_username.style.display="block";
						  }
						  else if(result== "username_exitbutpassword_error")
						  {
							  inform_username.style.display="none";
							  inform_password.style.display="block";
						  }
						  else if(result== "username_exitandpassword_right0")
						  {
							  inform_username.style.display="none";
							  inform_password.style.display="none";
							  //alert("登陆成功");
							  var str = document.cookie;
							  if(!(str == "")){
								  var arrStr = document.cookie.split("; ");
								  for(var i = 0;i < arrStr.length;i ++){
								  var temp = arrStr[i].split("=");
								  var date = new Date();
								  date.setTime(date.getTime() - 10000);
								  document.cookie = temp[0] + "=a; expires=" + date.toGMTString();
							  	}
							  }
							  if(LoginForm.remember.checked)
							  {
								  var cookie_name = fun("LoginForm","login_username");
								  var cookie_value = fun("LoginForm","login_password");
								  addCookie(cookie_name,cookie_value,3);
								  //alert("登陆成功");
							  }
							  window.location.href="LocationSelect.jsp";
						  }
						  else if(result=="username_exitandpassword_right1")
						  {
							  inform_username.style.display="none";
							  inform_password.style.display="none";
							  window.location.href="ReviewApplication.jsp";
						  }
					 }
				});
	}