<%@page import="com.takeaway.dish_Bean"%>
<%
	int type_id = Integer.parseInt(request.getParameter("type_id"));
	String type= request.getParameter("type");
	dish_Bean bean = new dish_Bean();
	boolean result = bean.update_DishType(type_id, type);
%>