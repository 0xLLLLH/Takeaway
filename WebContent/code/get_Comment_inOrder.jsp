<%@page import="com.takeaway.comment_Info"%>
<%@page import="com.takeaway.order_Bean"%>
<%@page import="com.takeaway.order_Info"%>
<% 
	String order_id =request.getParameter("order_id");
	order_Bean bean =new order_Bean();
	comment_Info info = bean.get_comment_inorder(order_id);
	order_Info order = bean.get_receiving_time(order_id);
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache");
    out.println("<type_data>");
    out.println( "<comments>" +info.getComments()+ "</comments>" );
    out.println( "<score>" +info.getScore()+ "</score>" );
    out.println( "<receiving_time>" +order.getReceiving_time()+ "</receiving_time>" );
    out.println("</type_data>");
%>