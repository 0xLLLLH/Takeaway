package com.takeaway;
import java.sql.*;
import java.util.*;
import java.text.Format;
import java.text.ParseException;
import java.text.SimpleDateFormat;
public class order_Bean {
	private Connection conn;
	public order_Bean(){}
	/**
	 * @param store_id
	 * @return
	 */
	public int get_send_time(String order_id)
	{
		int time=0;
		conn = DBconn.GetConnection();
		try
		{
			String sql ="select send_time  from "+order_Info.order_Table_Name
					+" where id='"+order_id+"'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs =st.executeQuery(sql);
			if(rs.next())
			{
				time = rs.getInt("send_time");
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
		return time;
	}
	public comment_Info get_comment_inorder(String order_id)
	{
		comment_Info info =new comment_Info();
		conn = DBconn.GetConnection();
		try
		{
			String sql ="select score ,comments from "+comment_Info.comment_Table_Name
					+" where order_id='"+order_id+"'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs =st.executeQuery(sql);
			if(rs.next())
			{
				info.setComments(rs.getString("comments"));
				info.setScore(rs.getDouble("score"));
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
		return info;
	}
	public boolean update_store_NumandScore(int store_id,int sell_num,double now_score,int send_time)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql ="update "+store_Info.dataTable_store_Name
					+" set sell_num = "+sell_num
					+",score="+now_score
					+",ave_sendtime="+send_time
					+" where id="+store_id;
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
	public store_Info get_store_NumandScore(int store_id)
	{
		store_Info info =new store_Info();
		conn = DBconn.GetConnection();
		try
		{
			String sql = "select score,sell_num ,ave_sendtime from "+store_Info.dataTable_store_Name
					+" where id = "+store_id;
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next())
			{
				info.setScore(rs.getDouble("score"));
				info.setSell_num(rs.getInt("sell_num"));
				info.setAve_sendtime(rs.getInt("ave_sendtime"));
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
		return info;
	}
	public boolean  change_state(String order_id,int state)
	{
		conn = DBconn.GetConnection();
		try
		{
			java.sql.Timestamp now=new java.sql.Timestamp(new java.util.Date().getTime());
			String sql_time ="select setorder_time from "+order_Info.order_Table_Name
					+" where id='"+order_id+"'";
			System.out.println(sql_time);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql_time);
			if(rs.next()){
				 String time = rs.getString("setorder_time");
				 java.text.SimpleDateFormat timeformat = new java.text.SimpleDateFormat(
			                "yyyy-MM-dd hh:mm:ss");
				 java.util.Date order_time = timeformat.parse(time);
				 java.util.Date nowtime =new java.util.Date();
				 String distime="-"+(nowtime.getTime()-order_time.getTime());
				 System.out.println(distime);
			String sql_state= "update "+order_Info.order_Table_Name
					+" set state =" +state
					+", time_from_setorder = concat(time_from_setorder,'"+distime+"') where id='"+order_id+"'";
			System.out.println(sql_state);
			st.executeUpdate(sql_state);
			}
		}
		catch(SQLException | ParseException e)
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
	public boolean  insert_Comments(String comments,String username,double score,String order_id,int store_id,int send_time)
	{
		conn = DBconn.GetConnection();
		try
		{	
			java.sql.Timestamp now=new java.sql.Timestamp(new java.util.Date().getTime());
			String sql ="insert into "+comment_Info.comment_Table_Name
					+"(comments,username,score,order_id,store_id,time) values('"
					+comments+"','"+username+"',"+score+",'"+order_id+"',"+store_id+",'"+now
					+"')";
			System.out.println(sql);
			Statement st = conn.createStatement();
			st.executeUpdate(sql);
			sql="update "+order_Info.order_Table_Name
					+" set send_time = '"+send_time+"'";
			System.out.println(sql);
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
	public int get_Order_num(String username)
	{
		conn = DBconn.GetConnection();
		int num = 0;
		try
		{
			String sql =" select count(*) as num from "+order_Info.order_Table_Name
					+" where username ='"+username+"'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next())
			{
				num=rs.getInt("num");
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
		return num;
	}
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
	public boolean get_order_info(ArrayList<order_Info> data,String username,int nowpage)
	{
		conn = DBconn.GetConnection();
		try
		{
			int pageon=nowpage*order_Info.pre_page;
			String sql ="select "+order_Info.order_Table_Name+".id,address_id,address,dish_id_string,payment_type, name,remark, phone,setorder_time, state , store_id, time_from_setorder from "
					+order_Info.order_Table_Name+","+address_Info.address_Table_Name
					+" where "+order_Info.order_Table_Name+".username ='"+username+"' and "+order_Info.order_Table_Name+".address_id = "+address_Info.address_Table_Name+".id"
					+" order by setorder_time desc limit "+pageon+","+order_Info.pre_page;
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
