<%@page import="com.takeaway.comment_Bean"%>
<%@page import="com.takeaway.count_Comments"%>
<%@page import="com.takeaway.comment_Info"%>
<%
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	comment_Bean bean =new comment_Bean();
	count_Comments count = bean.count_comments(store_id);
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
    out.println( "<one_star>" +count.getOne()+ "</one_star>" );
    out.println( "<two_star>" +count.getTwo()+ "</two_star>" );
    out.println( "<three_star>" +count.getThree()+ "</three_star>" );
    out.println( "<four_star>" +count.getFour()+ "</four_star>" );
    out.println( "<five_star>" +count.getFive()+ "</five_star>" );
    System.out.println( "<one_star>" +count.getOne()+ "</one_star>" );
    System.out.println( "<two_star>" +count.getTwo()+ "</two_star>" );
    System.out.println( "<three_star>" +count.getThree()+ "</three_star>" );
    System.out.println( "<four_star>" +count.getFour()+ "</four_star>" );
    System.out.println( "<five_star>" +count.getFive()+ "</five_star>" );
    
    out.println("</type_data>");
%>