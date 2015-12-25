<%@page import="com.takeaway.store_Info"%>
<%@page import="com.takeaway.order_Bean"%>
<%
	String username =request.getParameter("username");
	double score = Double.parseDouble(request.getParameter("score"));
	String comments = request.getParameter("comments");
	int send_time = Integer.parseInt(request.getParameter("send_time"));
	int store_id=Integer.parseInt(request.getParameter("store_id"));
	String order_id = request.getParameter("order_id");
	order_Bean bean =new order_Bean();
	bean.insert_Comments(comments, username, score, order_id, store_id,send_time);
	bean.change_state(order_id, 3);
	store_Info store = bean.get_store_NumandScore(store_id);
	int sell_num = store.getSell_num();
	double store_score=store.getScore();
	int ave_sendtime = store.getAve_sendtime();
	if(ave_sendtime!=3650)
		ave_sendtime = (ave_sendtime*sell_num+ave_sendtime)/(sell_num+1);
	else 
		ave_sendtime=send_time;
	if(store_score==-1)
		store_score=0;
	double new_score = (store_score*sell_num+score)/(sell_num+1);
	sell_num++;
	bean.update_store_NumandScore(store_id, sell_num, new_score,ave_sendtime);
	out.println("ok");
%>