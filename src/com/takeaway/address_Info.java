package com.takeaway;

public class address_Info {
	public static String address_Table_Name = "address_list";
	private int id;
	private String address;
	private String username;
	private String phone;
	private String name;
	public address_Info(){}
	public address_Info(int id, String address, String username, String phone,String name ) {
		//super();
		this.id = id;
		this.address = address;
		this.username = username;
		this.phone = phone;
		this.name=name;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
}
