<%@page import="java.util.Iterator"%>
<%@page import="com.takeaway.comment_Info"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.takeaway.comment_Bean"%>
<%
	int store_id = Integer.parseInt(request.getParameter("store_id"));
	String cmt_type = request.getParameter("cmt_type");
	int nowpage = Integer.parseInt(request.getParameter("nowpage"));
	System.out.println(cmt_type);
	comment_Bean bean =new comment_Bean();
	ArrayList< comment_Info> data = new ArrayList<comment_Info>();
	boolean result = bean.get_Comments(data, store_id, cmt_type,nowpage);
	Iterator<comment_Info> iter = data.iterator();
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
    out.println( "<result>" + result + "</result>" );
	while(iter.hasNext())
	{
		comment_Info info = iter.next();
		 out.println( "<score>" + info.getScore() + "</score>" );
		 out.println( "<time>" + info.getTime() + "</time>" );
		 out.println( "<username>" + info.getUsername()+ "</username>" );
		 out.println( "<comments>" + info.getComments() + "</comments>" );
	}
	 out.println("</type_data>");
%>