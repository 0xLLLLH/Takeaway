package com.takeaway;
public class customer_Info {
	public static String dataTable_Name="customer_list";
	private String userName;
	private String passWord;
	private String phone_Number;
	double coordinate_x ;
	double coordinate_y ;
	public customer_Info(String _userName,String _passWord,String _phone_Number)
	{
		userName=_userName;
		passWord=_passWord;
		phone_Number=_phone_Number;
	}
	public customer_Info(String _userName,String _passWord,String _phone_Number,double _coordinate_x,double _coordinate_y)
	{
		userName=_userName;
		passWord=_passWord;
		phone_Number=_phone_Number;
		coordinate_x=_coordinate_x;
		coordinate_y=_coordinate_y;
	}
	public static String getDataTable_Name() {
		return dataTable_Name;
	}
	public static void setDataTable_Name(String dataTable_Name) {
		customer_Info.dataTable_Name = dataTable_Name;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public String getPhone_number() {
		return phone_Number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_Number = phone_number;
	}
	public double getCoordinate_x() {
		return coordinate_x;
	}
	public void setCoordinate_x(double coordinate_x) {
		this.coordinate_x = coordinate_x;
	}
	public double getCoordinate_y() {
		return coordinate_y;
	}
	public void setCoordinate_y(double coordinate_y) {
		this.coordinate_y = coordinate_y;
	}
	
}
