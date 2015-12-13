<%@page import="java.util.* "%>
<%@page import="com.takeaway.store_Info"%>
<%@page import="com.takeaway.store_Bean"%>
<%
	double lng = Double.parseDouble(request.getParameter("lng"));
	double lat = Double.parseDouble(request.getParameter("lat"));
	String type = request.getParameter("type");
	String order = request.getParameter("order");
	String pg = request.getParameter("page");
	String search = request.getParameter("search");
	int pgnum=-1;
	if(pg!=null)
		pgnum=Integer.parseInt(pg);
	System.out.println(pgnum);
	store_Bean bean = new store_Bean();
	ArrayList<store_Info> data = new ArrayList<store_Info>();
	boolean result = bean.get_allstore_info(data, lng, lat,type,order,pgnum,search);
	Iterator<store_Info> iter = data.iterator();
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
    out.println( "<result>" + result + "</result>" );
	while(iter.hasNext())
	{
		store_Info info = iter.next();
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
	}
    out.println("</type_data>");
	
%>