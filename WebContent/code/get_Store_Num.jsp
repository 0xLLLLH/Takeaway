<%@page import="com.takeaway.store_Bean"%>
<%@page import="java.util.* "%>
<%
	double lng = Double.parseDouble(request.getParameter("lng"));
	double lat = Double.parseDouble(request.getParameter("lat"));
	store_Bean bean =new store_Bean();
	int num =bean.get_store_num(lng, lat);
	out.println(num);
	System.out.println(num);
%>