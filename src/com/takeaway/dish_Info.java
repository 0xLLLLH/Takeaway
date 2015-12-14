package com.takeaway;

public class dish_Info {
	public static String  dataTable_dish_Name="dish_list";
	public static String  dataTable_dish_type_Name="dish_type";
	public int id;
	private int store_id;
	private String dish_name;
	private int type_id;
	private int sell_num;
	private double score;
	private double price;
	public dish_Info(){}
	public dish_Info(int id, int store_id, String dish_name, int type_id, int sell_num, double score, double price) {
		//super();
		this.id = id;
		this.store_id = store_id;
		this.dish_name = dish_name;
		this.type_id = type_id;
		this.sell_num = sell_num;
		this.score = score;
		this.price = price;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getStore_id() {
		return store_id;
	}
	public void setStore_id(int store_id) {
		this.store_id = store_id;
	}
	public String getDish_name() {
		return dish_name;
	}
	public void setDish_name(String dish_name) {
		this.dish_name = dish_name;
	}
	public int getType_id() {
		return type_id;
	}
	public void setType_id(int type_id) {
		this.type_id = type_id;
	}
	public int getSell_num() {
		return sell_num;
	}
	public void setSell_num(int sell_num) {
		this.sell_num = sell_num;
	}
	public double getScore() {
		return score;
	}
	public void setScore(double score) {
		this.score = score;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
}