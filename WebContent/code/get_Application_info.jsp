<%@page import="com.takeaway.store_Info"%>
<%@page import="java.util.*"%>
<%@page import="com.takeaway.store_Bean"%>
<%
	store_Bean bean =new store_Bean();
	ArrayList<store_Info> data = new ArrayList<store_Info>();
	boolean result = bean.get_application_info(data);
	
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
    out.println( "<result>" + result + "</result>" );
    Iterator<store_Info> iter = data.iterator();
    while( iter.hasNext() ){
    	store_Info info = iter.next();
    	out.println( "<id>" +info.getId()+ "</id>" );
    	out.println( "<shop_name>" +info.getShop_name()+ "</shop_name>" );
    	out.println( "<shop_address>" +info.getShop_address()+ "</shop_address>" );
    	out.println( "<shop_description>" + info.getShop_description()+ "</shop_description>" );
    	out.println( "<shop_owner>" +info.getShop_owner()+ "</shop_owner>" );
    	out.println( "<shop_phone>" +info.getShop_phone()+ "</shop_phone>" );
    	out.println( "<shop_license>" +info.getShop_license()+ "</shop_license>" );
    	out.println( "<submit_time>" +info.getSubmit_date()+ "</submit_time>" );
    	out.println( "<first_type>" +info.getFirst_type()+ "</first_type>" );
    	out.println( "<second_type>" +info.getSecond_type()+ "</second_type>" );

    }
    out.println("</type_data>");
%>