<%@page import="com.takeaway.dish_Bean"%>
<%
	int dish_id= Integer.parseInt(request.getParameter("dish_id"));
	dish_Bean bean = new dish_Bean();
	out.println(bean.deleteDish(dish_id));
%>