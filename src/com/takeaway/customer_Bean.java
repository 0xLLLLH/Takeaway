package com.takeaway;
import java.sql.*;
import java.util.*;

public class customer_Bean {
	private Connection conn;
	public customer_Bean(){}
	public boolean delete_Address(int id)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql ="delete from "+address_Info.address_Table_Name
					+" where id ="+id;
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
					return false;
				}
			}
		}
		return true;
	}
	public int  insert_Address(String username ,String name,String phone,String place)
	{
		conn = DBconn.GetConnection();
		int id=-1;
		try
		{
			String sql = "insert into "+address_Info.address_Table_Name
					+"(username,name,phone,address) values('"+username
					+"','"+name+"','"+phone+"','"+place+"')";
			System.out.println(sql);
			Statement st = conn.createStatement();
			st.executeUpdate(sql);
			
			String sql_id="select id from "+address_Info.address_Table_Name
					+" where username = '"+username
					+"' and name = '"+name
					+"' and phone ='"+phone
					+"' and address ='"+place+"'";
			System.out.println(sql_id);
			ResultSet rs =st.executeQuery(sql_id);
			if(rs.next())
				id= rs.getInt("id");
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
		return id;
	}
	
	public boolean  update_Address(int address_id,String name,String phone,String place)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql = "update "+ address_Info.address_Table_Name
					+" set address ='"+place+"',"
					+"name = '"+name+"',"
					+"phone ='"+phone+"' "
					+" where id = "+address_id;
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
					return false;
				}
			}
		}
		return true;
	}
	
	public address_Info  get_AddressByid(int address_id)
	{
		address_Info elem =new address_Info();
		conn = DBconn.GetConnection();
		try
		{
			String sql = "select * from "+address_Info.address_Table_Name
					+" where id ="+address_id;
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next())
			{
				elem.setAddress(rs.getString("address"));
				elem.setId(rs.getInt("id"));
				elem.setPhone(rs.getString("phone"));
				elem.setName(rs.getString("name"));
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
		return elem;
	}
	public boolean  get_AddressByusername(ArrayList<address_Info> data,String username)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql = "select * from "+address_Info.address_Table_Name
					+" where username = '"+username+"'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				address_Info elem = new address_Info();
				elem.setAddress(rs.getString("address"));
				elem.setId(rs.getInt("id"));
				elem.setPhone(rs.getString("phone"));
				elem.setName(rs.getString("name"));
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
					return false;
				}
			}
		}
		return true;
	}
	public boolean isAdmin(String username)
	{
		conn = DBconn.GetConnection();
		try
		{
			String sql = "select * from "+customer_Info.dataTable_Name
					+" where username= '"+username +"' and admin_flag = '1'";
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next())
				return true;
			else 
				return false;
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
