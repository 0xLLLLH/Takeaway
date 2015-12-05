<%@page import="com.takeaway.customer_Bean"%>
<%
	String username = request.getParameter("username");
	username=username.trim();
	String password = request.getParameter("password");
	password=password.trim();
	customer_Bean bean = new customer_Bean();
	boolean result = bean.check_Account_Repeat(username);
	if(result)
	{
		boolean psrt = bean.check_Login(username, password);
		if(psrt)
		{
			session.setMaxInactiveInterval(60);//设置过期时间
			session.setAttribute("username", username);
			boolean isadmin = bean.isAdmin(username);
			if(isadmin)
			{
				response.setContentType("text/xml; charset=UTF-8");  
				response.setHeader("Cache-Control","no-cache"); 
		 		out.println("<result>");
		    	out.println( "<result_code>username_exitandpassword_right1</result_code>" );
		    	out.println("</result>");
			}
			else
			{
				response.setContentType("text/xml; charset=UTF-8");  
				response.setHeader("Cache-Control","no-cache"); 
			 	out.println("<result>");
			   	out.println( "<result_code>username_exitandpassword_right0</result_code>" );
				out.println("</result>");
			}
		}
		else
		{
			response.setContentType("text/xml; charset=UTF-8");  
	 		response.setHeader("Cache-Control","no-cache"); 
	 		out.println("<result>");
	    	out.println( "<result_code>username_exitbutpassword_error</result_code>" );
			out.println("</result>");
		}
	}
	else 
	{
		response.setContentType("text/xml; charset=UTF-8");  
		response.setHeader("Cache-Control","no-cache"); 
		out.println("<result>");
		out.println( "<result_code>username_notexit</result_code>" );
		out.println("</result>");
	}
%>