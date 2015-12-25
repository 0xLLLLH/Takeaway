<%@page import="com.takeaway.order_Bean"%>
<%
	String username = request.getParameter("username");
	order_Bean bean =new order_Bean();
	int num = bean.get_Order_num(username);
	out.print(num);
%>