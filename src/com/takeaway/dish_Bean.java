package com.takeaway;

import java.sql.*;
import java.util.*;

import com.mysql.jdbc.ResultSetImpl;
import com.sun.corba.se.spi.orbutil.fsm.State;


public class dish_Bean {
	
	private Connection conn;
	public dish_Bean(){}
	public boolean update_DishType(int type_id,String type)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql ="update "+dish_Info.dataTable_dish_type_Name
					+" set type = '"+type+"' where id="+type_id;
			System.out.println(sql);
			Statement st =conn.createStatement();
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
	public boolean delete_DishType(int store_id,int type_id)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql_dish = "delete from "+dish_Info.dataTable_dish_Name
					+" where type_id ="+type_id;
			System.out.println(sql_dish);
			Statement st = conn.createStatement();
			st.executeUpdate(sql_dish);
			String sql_type="delete from "+dish_Info.dataTable_dish_type_Name
					+" where id="+type_id;
			System.out.println(sql_type);
			st.executeUpdate(sql_type);
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
	public int inertType_and_getId(String type,int store_id)
	{
		conn = DBconn.GetConnection();
		int type_id=-1;
		try
		{
			String sql="insert into "+dish_Info.dataTable_dish_type_Name
					+"(store_id,type)values("+store_id
					+",'"+type+"')";
			System.out.println(sql);
			Statement st = conn.createStatement();
			st.executeUpdate(sql);
			String sql_id="select id from "+dish_Info.dataTable_dish_type_Name
					+" where type = '"+type+"'";
			System.out.println(sql_id);
			ResultSet rs = st.executeQuery(sql_id);
			if(rs.next())
			{
				type_id=rs.getInt("id");
			}
		}
		catch(SQLException e)
		{
			e.printStackTrace();
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
				}
			}
		}
		return type_id;
	}
	public int is_dishtypename_repeat(int store_id,String type)
	{
		conn = DBconn.GetConnection();
		int type_id=-1;
		try
		{
			String sql ="select id from "+dish_Info.dataTable_dish_type_Name
					+" where store_id="+store_id
					+" and type = '"+type+"'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next())
			{
				type_id=rs.getInt("id");
			}
		}
		catch(SQLException e)
		{
			e.printStackTrace();
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
				}
			}
		}
		return type_id;
	}
	public boolean get_dish_Info_by_type_id(ArrayList<dish_Info> data ,int type_id)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql = "select dish_name,id,price from "+dish_Info.dataTable_dish_Name
					+" where type_id = "+type_id;
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				dish_Info elem = new dish_Info();
				elem.setId(rs.getInt("id"));
				elem.setPrice(rs.getDouble("price"));
				elem.setDish_name(rs.getString("dish_name"));
				data.add(elem);
			}
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
	public boolean get_dish_type(ArrayList<dish_Type_Info> data,int id)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql = "select id,type from "+dish_Info.dataTable_dish_type_Name
					+" where store_id="+id;
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				dish_Type_Info info = new dish_Type_Info();
				info.setId(rs.getInt("id"));
				info.setType(rs.getString("type"));
				data.add(info);
			}
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
	public boolean get_search_dish_info(ArrayList<dish_Info> data,String search, int id)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql ="select dish_name,price ,sell_num from "+dish_Info.dataTable_dish_Name+" where store_id="+id
					+" and dish_name like '%"+search+"%'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				dish_Info elem = new dish_Info();
				elem.setDish_name(rs.getString("dish_name"));
				elem.setPrice(rs.getDouble("price"));
				elem.setSell_num(rs.getInt("sell_num"));
				data.add(elem);
			}
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
	public boolean get_search_shop(ArrayList<Integer> data , String search,double lng,double lat)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql= "select distinct store_id from "+dish_Info.dataTable_dish_Name +","+store_Info.dataTable_store_Name
					+" where "+dish_Info.dataTable_dish_Name+".store_id="
					+store_Info.dataTable_store_Name+".id "
					+" and dish_name like '%"+search+"%'"
					+" and abs(longitude-'"
					+lng+"')<=0.01 and abs(latitude-'"
					+lat+"')<=0.01 ";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				int elem = rs.getInt("store_id");
				data.add(elem);
			}
			System.out.println(data.toString());
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
}
