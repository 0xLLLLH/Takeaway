<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.apache.catalina.filters.AddDefaultCharsetFilter"%>
<%@page import="com.takeaway.customer_Bean"%>
<%@page import="com.takeaway.address_Info"%>
<%
	String username = request.getParameter("username");
	customer_Bean bean =new customer_Bean();
	ArrayList<address_Info> data = new ArrayList<address_Info>();
	boolean result = bean.get_AddressByusername(data,username);
	Iterator<address_Info> iter = data.iterator();
	
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
	out.println( "<result_code>"+result+"</result_code>" );
	while(iter.hasNext())
	{
		address_Info elem = iter.next();
		out.println("<address_id>"+elem.getId()+"</address_id>");
		out.println("<name>"+elem.getName()+"</name>");
		out.println("<phone>"+elem.getPhone()+"</phone>");
		out.println("<address>"+elem.getAddress()+"</address>");
	}
	out.println("</type_data>");
%>