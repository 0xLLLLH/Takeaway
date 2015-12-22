<%@page import="com.takeaway.store_Bean"%>
<%
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	String notice = request.getParameter("notice");
	store_Bean bean =new store_Bean();
	
	boolean result = bean.set_Shop_Notice(store_id, notice);
	out.print(result);
%>