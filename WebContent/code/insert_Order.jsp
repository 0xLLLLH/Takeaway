<%@page import="com.takeaway.order_Bean"%>
<%@page import="com.takeaway.order_Info"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.*"%>
<%
	int store_id=Integer.parseInt(request.getParameter("store_id"));
	int state =1;
	String time_from_setorder = "0";
	int address_id = Integer.parseInt(request.getParameter("address_id"));
	String dish_id_string = request.getParameter("dish_id_string").trim();
	String remark = request.getParameter("remark");
	int payment_type=Integer.parseInt(request.getParameter("payment_type"));
	String username =request.getParameter("username").trim();
	String discount_result= request.getParameter("discount_result").trim();
	double total_price = Double.parseDouble(request.getParameter("total_price"));
	SimpleDateFormat s = new SimpleDateFormat("yyyyMMddHHmmss");
	Date now  = new Date();
	String id = s.format(now);
	order_Bean bean =new order_Bean();
	boolean result = bean.insert_Order(id, state, time_from_setorder, address_id, dish_id_string, store_id, remark, payment_type, username, discount_result, total_price);
	out.print(result);
/* 	System.out.println(store_id);
	System.out.println(state);
	System.out.println(time_from_setorder);
	System.out.println(address_id);
	System.out.println(dish_id_string);
	System.out.println(payment_type);
	System.out.println(username);
	System.out.println(discount_result);
	System.out.println(total_price);
	System.out.println(remark); */
	
%>