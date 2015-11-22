package com.takeaway;
import java.sql.*;
public class DBconn {
//获得数据库连接
	public static Connection GetConnection()
	{
		Connection con=null;
		try
		{
			Class.forName("com.mysql.jdbc.Driver");// 加载MySql数据驱动
			con = DriverManager.getConnection( 
	    	    	"jdbc:mysql://localhost:3306/WMsystem",//指定数据库名称
					"root", 
					"JCYzt121" );// 创建数据库连接
		}
		catch(Exception e)
		{
			System.out.printf( "数据库连接失败\n" );
			e.printStackTrace();
		}
		return con;
	}
	// 数据库连接
	public static Connection _conn;
}
