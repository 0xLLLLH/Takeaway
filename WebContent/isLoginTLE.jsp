<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%      
		String username = (String)session.getAttribute("username");
		System.out.println(username);
		if(username==null)
		{
			System.out.println("Lodin_outoftime");
			request.getRequestDispatcher("Signup.jsp").forward(request, response);
		}
%>