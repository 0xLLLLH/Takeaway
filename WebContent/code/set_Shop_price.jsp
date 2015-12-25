<%@page import="com.takeaway.store_Bean"%>
<%
	double price_tosend = Double.parseDouble(request.getParameter("pricetosend"));
	String cut1 = request.getParameter("cut1");
	String cut2 = request.getParameter("cut2");
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	store_Bean bean = new store_Bean();
	boolean result = bean.set_store_price(price_tosend, cut1, cut2,store_id);
	System.out.print(result);
%>