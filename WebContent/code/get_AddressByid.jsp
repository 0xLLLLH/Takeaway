<%@page import="com.takeaway.customer_Info"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.apache.catalina.filters.AddDefaultCharsetFilter"%>
<%@page import="com.takeaway.customer_Bean"%>
<%@page import="com.takeaway.address_Info"%>
<%
	int address_id = Integer.parseInt(request.getParameter("address_id"));
	customer_Bean bean =new customer_Bean();
	address_Info elem = bean.get_AddressByid(address_id);
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
   	out.println("<type_data>");
	//out.println("<address_id>"+elem.getId()+"</address_id>");
	out.println("<name>"+elem.getName()+"</name>");
	out.println("<phone>"+elem.getPhone()+"</phone>");
	out.println("<address>"+elem.getAddress()+"</address>");
	out.println("</type_data>");
%>