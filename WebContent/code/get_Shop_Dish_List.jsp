<%@page import="com.takeaway.dish_Info"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.takeaway.dish_Type_Info"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.takeaway.store_Bean"%>
<%@page import="com.takeaway.dish_Bean"%>
<%
	System.out.println("111");
	dish_Bean bean = new dish_Bean();
	store_Bean store =new store_Bean();
	int store_id=Integer.parseInt(request.getParameter("store_id"));
	ArrayList<dish_Type_Info> type = new ArrayList<dish_Type_Info>();
	bean.get_dish_type(type, store_id);
	Iterator<dish_Type_Info> type_iter=type.iterator();
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
	while(type_iter.hasNext())
	{
		dish_Type_Info elem = type_iter.next();
		out.println("<type_id>"+elem.getId()+"</type_id>");
		out.println("<type>"+elem.getType()+"</type>");
		//System.out.println("<type_id>"+elem.getId()+"</type_id>");
		//System.out.println("<type>"+elem.getType()+"</type>");
		ArrayList<dish_Info> dish = new ArrayList<dish_Info>();
		bean.get_dish_Info_by_type_id(dish, elem.getId());
		Iterator<dish_Info> dish_iter = dish.iterator();
		out.println("<dish_num>"+dish.size()+"</dish_num>");
		while(dish_iter.hasNext())
		{
			dish_Info info = dish_iter.next();
			out.println("<dish_id>"+info.getId()+"</dish_id>");
			out.println("<dish_name>"+info.getDish_name()+"</dish_name>");
			out.println("<price>"+info.getPrice()+"</price>");
			out.println("<sell_num>"+info.getSell_num()+"</sell_num>");
			//System.out.println("<dish_id>"+info.getId()+"</dish_id>");
			//System.out.println("<dish_name>"+info.getDish_name()+"</dish_name>");
		}
	}
	 out.println("</type_data>");
%>