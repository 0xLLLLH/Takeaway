package com.takeaway;

import java.sql.*;
import java.util.ArrayList;

public class comment_Bean {
	private Connection conn;
	public comment_Bean(){}
	public boolean get_Comments(ArrayList<comment_Info> data ,int store_id ,String cmt_type,int nowpage)
	{

		conn = DBconn.GetConnection();
		try
		{
			String sql = null; 
			if(cmt_type.equals("all")){
				sql =" select comments,username,score,time from "+comment_Info.comment_Table_Name
						+" where store_id ="+store_id;

			}
			else if(cmt_type.equals("good")){
				sql =" select comments,username,score,time from "+comment_Info.comment_Table_Name
						+" where store_id ="+store_id
						+" and score >=3.5";	
			}
			else if(cmt_type.equals("mid")){
				sql =" select comments,username,score,time from "+comment_Info.comment_Table_Name
						+" where store_id ="+store_id
						+" and score <3.5 and score>= 1.5";
			}
			else if(cmt_type.equals("bad")){
				sql =" select comments,username,score,time from "+comment_Info.comment_Table_Name
						+" where store_id ="+store_id
						+" and score <1.5";
			}
			sql +=" order by time desc";
			int pageon = nowpage * comment_Info.pre_page;
			sql +=" limit "+pageon+"," +comment_Info.pre_page;
			System.out.println(sql);
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next())
			{
				comment_Info elem = new comment_Info();
				elem.setScore(rs.getDouble("score"));
				elem.setTime(rs.getDate("time"));
				elem.setUsername(rs.getString("username"));
				elem.setComments(rs.getString("comments"));
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
	public count_Comments count_comments(int store_id)
	{
		count_Comments count= new count_Comments();
		conn = DBconn.GetConnection();
		try
		{
			String sql1 = "select count(*) as one from "+comment_Info.comment_Table_Name
					+" where score < 1.5 and store_id = "+store_id;
			System.out.println(sql1);
			String sql2 = "select count(*) as two from "+comment_Info.comment_Table_Name
					+" where score < 2.5 and score >=1.5 and store_id="+store_id;
			String sql3 = "select count(*) as three from "+comment_Info.comment_Table_Name
					+" where score < 3.5 and score >=2.5 and store_id="+store_id;
			String sql4 = "select count(*) as four from "+comment_Info.comment_Table_Name
					+" where score < 4.5 and score >=3.5 and store_id="+store_id;
			String sql5 = "select count(*) as five from "+comment_Info.comment_Table_Name
					+" where score >=4.5 and store_id="+store_id;
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql1);
			if(rs.next())
				count.setOne(rs.getInt("one"));
			rs=st.executeQuery(sql2);
			if(rs.next())
				count.setTwo(rs.getInt("two"));
			rs=st.executeQuery(sql3);
			if(rs.next())
				count.setThree(rs.getInt("three"));
			rs=st.executeQuery(sql4);
			if(rs.next())
				count.setFour(rs.getInt("four"));
			rs=st.executeQuery(sql5);
			if(rs.next())
				count.setFive(rs.getInt("five"));
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
		return count;
	}
	
}
