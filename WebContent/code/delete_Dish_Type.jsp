<%@page import="com.takeaway.dish_Bean"%>
<%
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	int type_id = Integer.parseInt(request.getParameter("type_id"));
	dish_Bean bean =new dish_Bean();
	boolean result = bean.delete_DishType(store_id, type_id);
	out.print(result);
%>