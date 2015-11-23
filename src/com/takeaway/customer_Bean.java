package com.takeaway;
import java.sql.*;
import java.util.*;

public class customer_Bean {
	private Connection conn;
	public customer_Bean(){}
	public boolean check_Login(String username,String password)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql = "select username,password,phone_number from "
						+customer_Info.dataTable_Name
						+" where username = '"
						+username
						+"' and password = '"
						+password+"'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next())
			{
				return true ;
			}
			else 
				return false ;
		}
		catch(SQLException e)
		{
			e.printStackTrace();
			return false;
		}
		finally
		
		{
			if(conn!=null)
			{
				try
				{
					conn.close();
				}
				catch(SQLException e)
				{
					System.out.println("关闭连接失败"+e.getMessage());
					return false ;
				}
			}
		}
		
	}
	public boolean check_Account_Repeat(String username)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql = "select username,password,phone_number from "
						+customer_Info.dataTable_Name
						+" where username = '"
						+username+"'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next())
			{
				return true ;
			}
			else 
				return false ;
		}
		catch(SQLException e)
		{
			e.printStackTrace();
			return false;
		}
		finally
		
		{
			if(conn!=null)
			{
				try
				{
					conn.close();
				}
				catch(SQLException e)
				{
					System.out.println("关闭连接失败"+e.getMessage());
					return false ;
				}
			}
		}
	}
	public boolean insert_Info(customer_Info info)
	{
		conn = DBconn.GetConnection();
		try
		{
			StringBuffer sBuffer =new StringBuffer();
			sBuffer.append("insert into ")
			.append(customer_Info.dataTable_Name)
			.append("(username,password,phone_number)")
			.append(" values(?,?,?)");
			PreparedStatement st=conn.prepareStatement(sBuffer.toString());
			st.setString(1, info.getUserName());
			st.setString(2, info.getPassWord());
			st.setString(3, info.getPhone_number());
			System.out.println(sBuffer);
			System.out.println(info.getUserName()+info.getPassWord()+info.getPhone_number());
			st.executeUpdate();
			System.out.println("插入成功");
		}
		catch(SQLException e)
		{
			e.printStackTrace();
			return false;
		}
		finally
		
		{
			if(conn!=null)
			{
				try
				{
					conn.close();
				}
				catch(SQLException e)
				{
					System.out.println("关闭连接失败"+e.getMessage());
					return false;
				}
			}
		}
		return true;
	}
}
