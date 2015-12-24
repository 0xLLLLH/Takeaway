<%@page import="com.takeaway.store_Bean"%>
<%
	String username = request.getParameter("username");
	store_Bean bean = new store_Bean();
	int result=bean.get_store_id(username);
	out.print(result);
	
%>