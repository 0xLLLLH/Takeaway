<%@page import="com.takeaway.store_Bean"%>
<%
	double price_tosend = Double.parseDouble(request.getParameter("pricetosend"));
	double cut1 = Double.parseDouble(request.getParameter("cut1"));
	double cut2 = Double.parseDouble(request.getParameter("cut2"));
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	store_Bean bean = new store_Bean();
	boolean result = bean.set_store_price(price_tosend, cut1, cut2,store_id);
	System.out.print(result);
%>