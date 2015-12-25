<%@page import="com.takeaway.customer_Bean"%>
<%@page import="com.takeaway.customer_Info"%>
<%
	int id = Integer.parseInt(request.getParameter("id"));
	customer_Bean bean =new customer_Bean();
	boolean result =bean.delete_Address(id);
	out.println(result);
%>