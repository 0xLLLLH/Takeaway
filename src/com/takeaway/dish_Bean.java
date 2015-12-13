package com.takeaway;

import java.sql.*;
import java.util.*;


public class dish_Bean {
	
	private Connection conn;
	public dish_Bean(){}
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
