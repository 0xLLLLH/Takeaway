<%@page import="com.takeaway.customer_Info"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.apache.catalina.filters.AddDefaultCharsetFilter"%>
<%@page import="com.takeaway.customer_Bean"%>
<%@page import="com.takeaway.address_Info"%>
<%
	String username = request.getParameter("username");
	String name = request.getParameter("name");
	String phone =request.getParameter("phone");
	String place = request.getParameter("place");
	customer_Bean bean =new customer_Bean();
	int result = bean.insert_Address(username, name, phone, place);
	out.print(result);
%>