<%@page import="com.takeaway.order_Bean"%>
<% 
	String order_id=request.getParameter("order_id");
	int state = Integer.parseInt(request.getParameter("state"));
	order_Bean bean =new order_Bean();
	boolean result = bean.change_state(order_id, state);
	out.print(result);
%>