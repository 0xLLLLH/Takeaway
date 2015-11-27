
<%@page import="com.takeaway.store_Info"%>
<%@page import="com.takeaway.store_Bean"%>
<%
	String shop_name=request.getParameter("shop_name");
	String shop_address=request.getParameter("shop_address");
	String longitude=request.getParameter("longitude");
	String latitude=request.getParameter("latitude");
	String shop_description=request.getParameter("shop_description");
	String shop_owner=request.getParameter("shop_owner");
	String shop_phone=request.getParameter("shop_phone");
	String shop_license=request.getParameter("shop_license");
	String first_type=request.getParameter("first_type");
	String second_type=request.getParameter("second_type");
	String username = (String)session.getAttribute("username");
	store_Bean bean = new store_Bean();
	store_Info info = new store_Info(username,shop_name,shop_address,shop_phone,first_type,second_type,shop_owner,Double.parseDouble(longitude),Double.parseDouble(latitude),shop_license,shop_description);
	boolean result = true;
	if(!bean.submit_store_info(info))
		result=false;
	if(!bean.submit_application(username))
		result=false;
	response.setContentType("text/xml; charset=UTF-8");  
	response.setHeader("Cache-Control","no-cache"); 
	out.println("<result>");
	out.println( "<result_code>"+result+"</result_code>" );
	out.println("</result>");
%>