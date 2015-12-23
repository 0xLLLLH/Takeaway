<%@page import="com.takeaway.store_Info"%>
<%@page import="com.takeaway.store_Bean"%>
<%
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	store_Bean bean = new store_Bean();
	store_Info info = new store_Info();
	info = bean.get_Shop_InfoByID(store_id);
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
   // out.println( "<result>" + result + "</result>" );
    out.println( "<id>" +info.getId()+ "</id>" );
	out.println( "<first_type>" +info.getFirst_type()+ "</first_type>" );
	out.println( "<second_type>" +info.getSecond_type()+ "</second_type>" );
	out.println( "<shop_address>" + info.getShop_address()+ "</shop_address>" );
	out.println( "<shop_description>" +info.getShop_description()+ "</shop_description>" );
	out.println( "<shop_license>" +info.getShop_license()+ "</shop_license>" );
	out.println( "<shop_name>" +info.getShop_name()+ "</shop_name>" );
	out.println( "<shop_owner>" +info.getShop_owner()+ "</shop_owner>" );
	out.println( "<shop_phone>" +info.getShop_phone()+ "</shop_phone>" );
	out.println( "<shop_notice>" +info.getShop_notice()+ "</shop_notice>" );
	out.println( "<score>" +info.getScore()+ "</score>" );
	out.println( "<sell_num>" +info.getSell_num()+ "</sell_num>" );
	out.println( "<price_tosend>" +info.getPrice_tosend()+ "</price_tosend>" );
	out.println( "<ave_sendtime>" +info.getAve_sendtime()+ "</ave_sendtime>" );
	out.println( "<discount>" +info.getDiscount()+ "</discount>" );
    out.println("</type_data>");
%>