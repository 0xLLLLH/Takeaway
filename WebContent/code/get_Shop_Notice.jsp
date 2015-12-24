<%@page import="com.takeaway.store_Bean"%>
<%
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	store_Bean bean = new store_Bean();
	String result = bean.get_Shop_Notice(store_id);
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
	out.print("<notice>"+result+"</notice>");
	out.println("</type_data>");
%>