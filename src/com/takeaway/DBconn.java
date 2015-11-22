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
	    	    	"jdbc:mysql://rdse330ghf0z34axdkw4b.mysql.rds.aliyuncs.com:3306/r79njh5842o2r1s4",//指定数据库名称
					"shuishou", 
					"shuishou" );// 创建数据库连接
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
