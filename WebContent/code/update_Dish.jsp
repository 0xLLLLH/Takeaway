<%@page import="com.takeaway.dish_Bean"%>
<%@page import="com.takeaway.dish_Info"%>
<%
	String dish_name = request.getParameter("dish_name");
	double dish_price = Double.parseDouble(request.getParameter("dish_price"));
	int dish_id = Integer.parseInt(request.getParameter("dish_id"));
	dish_Bean bean = new dish_Bean();
	if(bean.update_Dish(dish_name, dish_price, dish_id)==false)
		out.print("repeat");
	else 
		out.print("yes");
%>