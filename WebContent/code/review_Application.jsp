<%@page import="com.takeaway.store_Bean"%>
<%
	String idstr = request.getParameter("idstr");
	String idarr[]=idstr.split(",");
	store_Bean bean = new store_Bean();
	boolean result=true;
	for(int i =0;i<idarr.length;++i)
	{
		String id_s[]=idarr[i].split("-");
		if(bean.set_application(id_s[1].trim(),id_s[0].trim())==false)
			result=false;
	}
	response.setContentType("text/xml; charset=UTF-8");  
	response.setHeader("Cache-Control","no-cache"); 
	out.println("<result>");
	out.println( "<result_code>"+result+"</result_code>" );
	out.println("</result>");
%>