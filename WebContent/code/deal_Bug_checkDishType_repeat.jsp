<%@page import="com.takeaway.dish_Bean"%>
<%
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	String type = request.getParameter("type");
	dish_Bean bean = new dish_Bean();
	int repeat_id = bean.is_dishtypename_repeat(store_id, type);
	if(repeat_id==-1)
	{
		out.print("norepeat");
		System.out.println("norepeat");
	}
	else 
	{
		out.print("repeat");
		System.out.println("repeat");
	}
%>