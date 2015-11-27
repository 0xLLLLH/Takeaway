package com.takeaway;

public class store_Info {
	public static String dataTable_store_Name="store_list";
	public static String dataTable_type_Name="category_list";
	public static String dataTable_application_name="application_list";
	private String username;
	private String shop_name;
	private String shop_address;
	private String shop_phone ;
	private String first_type;
	private String second_type;
	private double price_tosend;
	private String discount;
	private String shop_owner;
	private String id_card;
	private double longitude;
	private double latitude;
	private String shop_license;
	private String shop_description ;
	
	
	public store_Info(String username, String shop_name, String shop_address, String shop_phone, String first_type,
			String second_type,  String shop_owner,
			double longitude, double latitude, String shop_license, String shop_description) {
		super();
		this.username = username;
		this.shop_name = shop_name;
		this.shop_address = shop_address;
		this.shop_phone = shop_phone;
		this.first_type = first_type;
		this.second_type = second_type;
		this.shop_owner = shop_owner;
		this.longitude = longitude;
		this.latitude = latitude;
		this.shop_license = shop_license;
		this.shop_description = shop_description;
	}
		
	public store_Info(String username, String shop_name, String shop_address, String shop_phone, String first_type,
			String second_type, double price_tosend, String discount, String shop_owner, String id_card,
			double longitude, double latitude, String shop_license, String shop_description) {
		super();
		this.username = username;
		this.shop_name = shop_name;
		this.shop_address = shop_address;
		this.shop_phone = shop_phone;
		this.first_type = first_type;
		this.second_type = second_type;
		this.price_tosend = price_tosend;
		this.discount = discount;
		this.shop_owner = shop_owner;
		this.id_card = id_card;
		this.longitude = longitude;
		this.latitude = latitude;
		this.shop_license = shop_license;
		this.shop_description = shop_description;
	}

	public static String getDataTable_store_Name() {
		return dataTable_store_Name;
	}
	public static void setDataTable_store_Name(String dataTable_store_Name) {
		store_Info.dataTable_store_Name = dataTable_store_Name;
	}
	public static String getDataTable_type_Name() {
		return dataTable_type_Name;
	}
	public static void setDataTable_type_Name(String dataTable_type_Name) {
		store_Info.dataTable_type_Name = dataTable_type_Name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getShop_name() {
		return shop_name;
	}
	public void setShop_name(String shop_name) {
		this.shop_name = shop_name;
	}
	public String getShop_address() {
		return shop_address;
	}
	public void setShop_address(String shop_address) {
		this.shop_address = shop_address;
	}
	public String getShop_phone() {
		return shop_phone;
	}
	public void setShop_phone(String shop_phone) {
		this.shop_phone = shop_phone;
	}
	public String getFirst_type() {
		return first_type;
	}
	public void setFirst_type(String first_type) {
		this.first_type = first_type;
	}
	public String getSecond_type() {
		return second_type;
	}
	public void setSecond_type(String second_type) {
		this.second_type = second_type;
	}
	public double getPrice_tosend() {
		return price_tosend;
	}
	public void setPrice_tosend(double price_tosend) {
		this.price_tosend = price_tosend;
	}
	public String getDiscount() {
		return discount;
	}
	public void setDiscount(String discount) {
		this.discount = discount;
	}
	public String getShop_owner() {
		return shop_owner;
	}
	public void setShop_owner(String shop_owner) {
		this.shop_owner = shop_owner;
	}
	public String getId_card() {
		return id_card;
	}
	public void setId_card(String id_card) {
		this.id_card = id_card;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public String getShop_license() {
		return shop_license;
	}
	public void setShop_license(String shop_license) {
		this.shop_license = shop_license;
	}
	public String getShop_description() {
		return shop_description;
	}
	public void setShop_description(String shop_description) {
		this.shop_description = shop_description;
	}
	
}