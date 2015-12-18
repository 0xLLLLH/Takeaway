<%@page import="com.takeaway.dish_Bean"%>
<%
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	String type = request.getParameter("type");
	dish_Bean bean = new dish_Bean();
	int repeat_id = bean.is_dishtypename_repeat(store_id, type);
	if(repeat_id==-1)
	{
		System.out.println("norepeat");
		int type_id=bean.inertType_and_getId(type, store_id);
		out.println(type_id);
	}
	else 
	{
		System.out.println("repeat");
		out.println(repeat_id);
	}
%>