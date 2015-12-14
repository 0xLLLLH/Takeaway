<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.takeaway.dish_Info"%>
<%@page import="com.takeaway.dish_Bean"%>
<%
	String search = request.getParameter("search");
	int id = Integer.parseInt(request.getParameter("id"));
	dish_Bean bean = new dish_Bean();
	ArrayList<dish_Info> data = new ArrayList<dish_Info>();
	boolean result=bean.get_search_dish_info(data, search, id);
	Iterator<dish_Info> iter = data.iterator();
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
    out.println( "<result>" + result + "</result>" );
    if(result)
    {	
    	while(iter.hasNext())
    	{
    		dish_Info elem = iter.next();
    		out.println("<dish_name>"+elem.getDish_name()+"</dish_name>");
    		out.println("<price>"+elem.getPrice()+"</price>");
    		out.println("<sell_num>"+elem.getSell_num()+"</sell_num>");
    	}
    }
    out.println("</type_data>");
%>