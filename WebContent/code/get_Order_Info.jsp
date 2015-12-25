<%@page import="com.takeaway.store_Info"%>
<%@page import="com.takeaway.store_Bean"%>
<%@page import="com.takeaway.dish_Info"%>
<%@page import="com.takeaway.dish_Bean"%>
<%@page import="java.util.Iterator"%>
<%@page import="com.takeaway.order_Bean"%>
<%@page import="com.takeaway.order_Info"%>
<%@page import="java.util.ArrayList"%>
<%
	String username = request.getParameter("username");
	int nowpage = Integer.parseInt(request.getParameter("nowpage"));
	ArrayList<order_Info> data = new ArrayList<order_Info>();
	order_Bean bean  = new order_Bean();
	boolean result = bean.get_order_info(data, username,nowpage);
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
    out.println( "<result>" + result + "</result>" );
    Iterator<order_Info> iter = data.iterator();
    dish_Bean dish_bean = new dish_Bean();
    store_Bean store_bean = new store_Bean();
    while(iter.hasNext())
    {
    	order_Info elem = iter.next();
    	 String dish_id_string = elem.getDish_id_string();
    	 String []dish_and_num = dish_id_string.split("-");
    	 int count_dish = dish_and_num.length;
    	/*  int []dish_id = new int[count_dish];
    	 int []dish_num = new int[count_dish];
    	 double []dish_price = new double[count_dish];
    	 String []dish_name = new String[count_dish]; */
    	 for(int i=0;i<count_dish;++i){
    		 String temp[] = dish_and_num[i].split(":");
    		 int dish_id=Integer.parseInt(temp[0]);
    		 int dish_num=Integer.parseInt(temp[1]); 
    		 dish_Info info = dish_bean.get_Dishnameandprice(dish_id);
    		 String dish_name= info.getDish_name();
    		 double dish_price = info.getPrice() ;
    		 out.println( "<dish_id>" + dish_id + "</dish_id>" );
    		 out.println( "<dish_num>" + dish_num + "</dish_num>" );
    		 out.println( "<dish_name>" + dish_name + "</dish_name>" );
    		 out.println( "<dish_price>" + dish_price + "</dish_price>" );
    		 //System.out.println( "<dish_id>" + dish_id + "</dish_id>" );
    		 //System.out.println( "<dish_num>" + dish_num + "</dish_num>" );
    		 //System.out.println( "<dish_name>" + dish_name + "</dish_name>" );
    		 //System.out.println( "<dish_price>" + dish_price + "</dish_price>" );
    	 }
    	 store_Info store = store_bean.get_shopNamebyid(elem.getStore_id());
    	 out.println( "<id>" + elem.getId() + "</id>" );
    	 out.println( "<shop_name>" + store.getShop_name() + "</shop_name>" );
    	 out.println( "<name>" + elem.getName()+ "</name>" );
    	 out.println( "<phone>" + elem.getPhone()+ "</phone>" );
    	 out.println( "<discount>" + store.getDiscount() + "</discount>" );
    	 out.println( "<shop_phone>" + store.getShop_phone()+ "</shop_phone>" );
    	 out.println( "<dish_count>" +count_dish+ "</dish_count>" );
    	 out.println( "<address_id>" + elem.getAddress_id() + "</address_id>" );
    	 //out.println( "<dish_id_string>" + result + "</dish_id_string>" );
    	 out.println( "<payment_type>" + elem.getPayment_type() + "</payment_type>" );
    	// out.println( "<receiving_time>" + elem.getReceiving_time() + "</receiving_time>" );
    	 out.println( "<remark>" + elem.getRemark() + "</remark>" );
    	 out.println( "<setorder_time>" + elem.getSetorder_time() + "</setorder_time>" );
    	 out.println( "<state>" + elem.getState() + "</state>" );
    	 out.println( "<store_id>" + elem.getStore_id()+ "</store_id>" );
    	 out.println( "<time_from_setorder>" + elem.getTime_from_setorder() + "</time_from_setorder>" );
    	 out.println( "<address>" + elem.getAddress()+ "</address>" );
    }
    out.println("</type_data>"); 
%>