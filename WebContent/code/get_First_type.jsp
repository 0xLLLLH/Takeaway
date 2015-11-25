<%@page import="java.util.*"%>
<%@page import="com.takeaway.store_Bean"%>
<%
	ArrayList<String> data = new ArrayList<String>();
	store_Bean bean = new store_Bean();
	boolean result = bean.get_firsttype(data);
	Iterator<String> iter = data.iterator();
	response.setContentType("text/xml; charset=UTF-8");  
	response.setHeader("Cache-Control","no-cache"); 
	out.println("<result>");
	out.println( "<result_code>"+result+"</result_code>" );
	System.out.println(result);
	while(iter.hasNext())
	{
		String type = iter.next();
		out.println( "<first_type>" + type + "</first_type>" );
	}
	out.println("</result>");
%>