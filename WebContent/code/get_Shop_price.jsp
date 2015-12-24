<%@page import="com.takeaway.store_Info"%>
<%@page import="com.takeaway.store_Bean"%>
<%
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	store_Bean bean = new store_Bean();
	store_Info info = new store_Info();
	boolean result = bean.get_shop_price(info, store_id);
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
    out.println( "<result>" + result + "</result>" );
    String discount = info.getDiscount();
    if(discount!=null)
    {
    	String []arr=discount.split("-");
    	if(result)
    	{
    		out.println( "<price_tosend>" +info.getPrice_tosend()+ "</price_tosend>" );
    		out.println( "<cut1>" +arr[0]+ "</cut1>" );
    		out.println( "<cut2>" +arr[1]+ "</cut2>" );
    		System.out.println( "                <price_tosend>" +info.getPrice_tosend()+ "</price_tosend>" );
    		System.out.println( "                <cut1>" +arr[0]+ "</cut1>" );
    		System.out.println( "                 <cut2>" +arr[1]+ "</cut2>" );
    	}
    }
    else
    {
    	if(result)
    	{
    		out.println( "<price_tosend>" +info.getPrice_tosend()+ "</price_tosend>" );
    		out.println( "<cut1> </cut1>" );
    		out.println( "<cut2> </cut2>" );
    		System.out.println( "                       <price_tosend>" +info.getPrice_tosend()+ "</price_tosend>" );

    	}
    }
	out.println("</type_data>");
%>
