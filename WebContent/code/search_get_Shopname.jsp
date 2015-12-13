<%@page import="java.util.Iterator"%>
<%@page import="com.takeaway.store_Info"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.takeaway.store_Bean"%>
<%
	int id = Integer.parseInt(request.getParameter("store_id"));
	store_Bean bean = new store_Bean();
	store_Info info =new store_Info();
	boolean result = bean.get_store_info_byid(info, id);
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
    out.println( "<result>" + result + "</result>" );
    if(result)
    {	
    		out.println("<shop_name>"+info.getShop_name()+"</shop_name>");
    		out.println("<price_tosend>"+info.getPrice_tosend()+"</price_tosend>");
    		out.println("<score>"+info.getScore()+"</score>");
    }
    out.println("</type_data>");
%>