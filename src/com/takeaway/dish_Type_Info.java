package com.takeaway;

public class dish_Type_Info {
	private int id;
	private int store_id;
	private String type;
	dish_Type_Info(){}
	
	public dish_Type_Info(int id, int store_id, String type) {
		//super();
		this.id = id;
		this.store_id = store_id;
		this.type = type;
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
}
