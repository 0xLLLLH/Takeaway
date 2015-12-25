package com.takeaway;
import java.sql.*;
import java.util.*;
import java.text.SimpleDateFormat;
public class order_Bean {
	private Connection conn;
	public order_Bean(){}
	public boolean insert_Order(String id ,int state,String time_from_setorder,int address_id,String dish_id_string,int store_id,String remark,int payment_type,String username,String discount_result,double total_price)
	{
		conn = DBconn.GetConnection();
		try
		{
			java.sql.Timestamp now=new java.sql.Timestamp(new java.util.Date().getTime());
			String sql ="insert into "+order_Info.order_Table_Name
					+"(id,state,time_from_setorder,address_id,dish_id_string,store_id,remark,payment_type,username,discount_result,total_price,setorder_time)"
					+" values('"+id+"',"+state+",'"+time_from_setorder+"',"+address_id+",'"+dish_id_string+"',"+store_id+",'"+remark+"',"+payment_type
					+",'"+username+"','"+discount_result+"',"+total_price+",'"+now+"')";
			System.out.println(sql);
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
	public boolean get_order_info(ArrayList<order_Info> data,String username)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql ="select "+order_Info.order_Table_Name+".id,address_id,address,dish_id_string,payment_type, name,remark, phone,setorder_time, state , store_id, time_from_setorder from "
					+order_Info.order_Table_Name+","+address_Info.address_Table_Name
					+" where "+order_Info.order_Table_Name+".username ='"+username+"' and "+order_Info.order_Table_Name+".address_id = "+address_Info.address_Table_Name+".id"
					+" order by setorder_time desc";
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
