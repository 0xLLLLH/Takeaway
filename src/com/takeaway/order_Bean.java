package com.takeaway;
import java.sql.*;
import java.util.*;
public class order_Bean {
	private Connection conn;
	public order_Bean(){}
	public boolean get_order_info(ArrayList<order_Info> data,String username)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql ="select "+order_Info.order_Table_Name+".id,address_id,address,dish_id_string,payment_type, name,remark, phone,setorder_time, state , store_id, time_from_setorder from "
					+order_Info.order_Table_Name+","+address_Info.address_Table_Name
					+" where "+order_Info.order_Table_Name+".username ='"+username+"' and "+order_Info.order_Table_Name+".address_id = "+address_Info.address_Table_Name+".id";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				order_Info elem = GetDataFromResultSet_order_list(rs);
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
	public order_Info GetDataFromResultSet_order_list(ResultSet rs)
	{
		order_Info info = new order_Info();
		try
		{
			info.setId(rs.getString("id"));
			info.setAddress_id(rs.getInt("address_id"));
			info.setDish_id_string(rs.getString("dish_id_string"));
			info.setPayment_type(rs.getInt("payment_type"));
			//info.setReceiving_time(rs.getTimestamp("receiving_time"));
			info.setRemark(rs.getString("remark"));
			info.setSetorder_time(rs.getTimestamp("setorder_time"));
			info.setState(rs.getInt("state"));
			info.setStore_id(rs.getInt("store_id"));
			info.setTime_from_setorder(rs.getString("time_from_setorder"));
			info.setAddress(rs.getString("address"));
			info.setName(rs.getString("name"));
			info.setPhone(rs.getString("phone"));
		}
		catch(SQLException e)
		{
			System.out.printf( "数据库查询失败\n" + e.getMessage()  );
		}
		return info;
	}
}
