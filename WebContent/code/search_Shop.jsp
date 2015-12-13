<%@page import="java.util.*"%>
<%@page import="com.takeaway.dish_Bean"%>
<%
	String search = request.getParameter("search");
	double lng = Double.parseDouble(request.getParameter("lng"));
	double lat = Double.parseDouble(request.getParameter("lat"));
	dish_Bean bean = new dish_Bean();
	ArrayList<Integer> data = new ArrayList<Integer>();
	boolean result  = bean.get_search_shop(data, search,lng,lat);
	Iterator<Integer> iter = data.iterator();
	response.setContentType("text/xml; charset=UTF-8");  
    response.setHeader("Cache-Control","no-cache"); 
    out.println("<type_data>");
    out.println( "<result>" + result + "</result>" );
    if(result)
    {
		while(iter.hasNext())
		{
			int username = iter.next();
			 out.println("<store_id>"+username+"</store_id>");	
		}
    }
    out.println("</type_data>");
%>