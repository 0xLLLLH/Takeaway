<%@page import="java.util.*"%>
<%@page import="com.takeaway.store_Bean"%>
<%
	String first_type = request.getParameter("first_type");
	ArrayList<String> data = new ArrayList<String>();
	store_Bean bean = new store_Bean();
	boolean result = bean.get_secondtype(data, first_type);
	Iterator<String> iter = data.iterator();
	response.setContentType("text/xml; charset=UTF-8");  
	response.setHeader("Cache-Control","no-cache"); 
	out.println("<result>");
	out.println( "<result_code>"+result+"</result_code>" );
	System.out.println(result);
	while(iter.hasNext())
	{
		String type = iter.next();
		out.println( "<second_type>" + type + "</second_type>" );
	}
	out.println("</result>");
%>