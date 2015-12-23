<%@page import="com.takeaway.dish_Bean"%>
<%
	int type_id = Integer.parseInt(request.getParameter("type_id"));
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	String dish_name = request.getParameter("dish_name");
	double dish_price = Double.parseDouble(request.getParameter("dish_price"));
	dish_Bean bean = new dish_Bean();
	int isDishRepeat=bean.is_Dish_repeat(type_id, dish_name);
	if(isDishRepeat==-1)
	{
		System.out.println("norepeat");
		int dish_id=bean.insertDish_getID(type_id, dish_name, dish_price,store_id);
		out.print(dish_id);
	}
	else 
	{
		System.out.println("repeat");
		out.print("repeat");
	}
%>
