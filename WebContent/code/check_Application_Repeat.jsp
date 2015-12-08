<%@page import="com.takeaway.store_Bean"%>
<%
	String username = (String)session.getAttribute("username");
	System.out.println(username);
	if(username==null)
	{
		System.out.println("tle");
		out.println("TLE");
	}
	else
	{
		store_Bean bean =new store_Bean();
		boolean result = bean.check_application_repeat(username);
		if(result)
			out.println("repeat");
		else 
			out.println("norepeat");
	}
%>