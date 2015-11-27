package com.takeaway;

import java.sql.*;
import java.util.*;

public class store_Bean {
	private Connection conn;
	public store_Bean(){}
	public boolean set_application(int state)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql = "update "+store_Info.dataTable_application_name
					+" set state = '"+state+"'";
			Statement st = conn.createStatement();
			st.executeUpdate(sql);
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
		return true;
	}
	public boolean submit_application(String username)
	{
		conn = DBconn.GetConnection();
		try
		{
			StringBuffer sql = new StringBuffer();
			sql.append("insert into ")
			.append(store_Info.dataTable_application_name)
			.append("(username,submit_time )")
			.append("values(?,?)");
			PreparedStatement st = conn.prepareStatement(sql.toString());
			st.setString(1, username);
			st.setTimestamp(2, new java.sql.Timestamp(new java.util.Date().getTime()));
			st.executeUpdate();
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
		return true;
	}
	public boolean submit_store_info(store_Info info)
	{
		conn = DBconn.GetConnection();
		try	
		{
			StringBuffer sBuffer =new StringBuffer();
			sBuffer.append("insert into ")
			.append(store_Info.dataTable_store_Name)
			.append("(username , shop_name , shop_adress , shop_phone ,first_type , second_type , shop_owner ,longitude ,latitude ,shop_license ,shop_description )")
			.append(" values(?,?,?,?,?,?,?,?,?,?,?)");
			PreparedStatement st=conn.prepareStatement(sBuffer.toString());
			st.setString(1, info.getUsername());
			st.setString(2, info.getShop_name());
			st.setString(3, info.getShop_address());
			st.setString(4, info.getShop_phone());
			st.setString(5, info.getFirst_type());
			st.setString(6, info.getSecond_type());
			st.setString(7, info.getShop_owner());
			st.setDouble(8, info.getLongitude());
			st.setDouble(9, info.getLatitude());
			st.setString(10, info.getShop_license());
			st.setString(11, info.getShop_description());
			System.out.println(sBuffer);
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
					return false ;
				}
			}
		}
		return true;
	}
	public boolean get_secondtype(ArrayList<String> data , String first)
	{
		conn = DBconn.GetConnection();
		data.clear();
		try
		{
			String sql = "select  second_type  from "+store_Info.dataTable_type_Name
					+" where first_type = '"+first+"'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				String type = rs.getString("second_type");
				data.add(type);
			}
			System.out.println(data.toString());
			return true;
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
	public boolean get_firsttype(ArrayList<String> data )
	{
		conn = DBconn.GetConnection();
		data.clear();
		try
		{
			String sql = "select distinct first_type  from "+store_Info.dataTable_type_Name;
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				String type = rs.getString("first_type");
				data.add(type);
			}
			System.out.println(data.toString());
			return true;
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
	/*public boolean get_secondtype(ArrayList<String> data )
	{
		try
		{
			
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
	}*/
}
