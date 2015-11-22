<%@page import="com.takeaway.customer_Bean"%>
<%@page import="com.takeaway.customer_Info"%>
<%
	String username = request.getParameter("username");
	String password = request.getParameter("password");
	//String name = request.getParameter("name");
	String phone = request.getParameter("phone");
	System.out.println(username+password+phone);
	customer_Info info = new customer_Info(username,password,phone);
	customer_Bean bean = new customer_Bean();
	boolean result = bean.insert_Info(info);
	if(result)
	{
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