<%@page import="com.takeaway.customer_Bean"%>
<%@page import="com.takeaway.customer_Info"%>
<%
	String username = request.getParameter("username");
	username=username.trim();
	String password = request.getParameter("password");
	password=password.trim();
	//String name = request.getParameter("name");
	String phone = request.getParameter("phone");
	phone=phone.trim();
	//System.out.println(username+password+phone);
	customer_Info info = new customer_Info(username,password,phone);
	customer_Bean bean = new customer_Bean();
	boolean result = bean.insert_Info(info);
	if(result)
	{
		session.setMaxInactiveInterval(60);//设置过期时间
		session.setAttribute("username", username.trim());
		response.setContentType("text/xml; charset=UTF-8");  
		response.setHeader("Cache-Control","no-cache"); 
		out.println("<result>");
		out.println( "<result_code>success</result_code>" );
		out.println("</result>");
	}
	else 
	{
		response.setContentType("text/xml; charset=UTF-8");  
		response.setHeader("Cache-Control","no-cache"); 
		out.println("<result>");
		out.println( "<result_code>false</result_code>" );
		out.println("</result>");
	}
%>