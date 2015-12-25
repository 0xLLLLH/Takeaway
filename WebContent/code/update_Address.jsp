<%@page import="com.takeaway.customer_Info"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.apache.catalina.filters.AddDefaultCharsetFilter"%>
<%@page import="com.takeaway.customer_Bean"%>
<%@page import="com.takeaway.address_Info"%>
<%
	int address_id = Integer.parseInt(request.getParameter("address_id"));
	String name = request.getParameter("name");
	String phone =request.getParameter("phone");
	String place = request.getParameter("place");
	customer_Bean bean =new customer_Bean();
	boolean result = bean.update_Address(address_id, name, phone, place);
	out.println(result);
%>