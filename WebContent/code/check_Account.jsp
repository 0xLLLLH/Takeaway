<%@page import="com.takeaway.customer_Bean"%>
<%
	String username = request.getParameter("username");
	username=username.trim();
	customer_Bean bean = new customer_Bean();
	boolean result = bean.check_Account_Repeat(username);
	if(result)
	{
		response.setContentType("text/xml; charset=UTF-8");  
	 	response.setHeader("Cache-Control","no-cache"); 
	 	out.println("<result>");
	    out.println( "<result_code>repeat</result_code>" );
		out.println("</result>");
	}
	else 
	{
		response.setContentType("text/xml; charset=UTF-8");  
		response.setHeader("Cache-Control","no-cache"); 
		out.println("<result>");
		out.println( "<result_code>success</result_code>" );
		out.println("</result>");
	}
%>