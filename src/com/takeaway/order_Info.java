package com.takeaway;
import java.util.*;
public class order_Info {
	public static String  order_Table_Name = "order_list";
	private String id;
	private double score;
	private Date setorder_time;
	private int state ;
	private Date receiving_time;
	private String time_from_setorder;
	private int address_id;
	private String dish_id_string;
	private int store_id;
	private String remark;
	private int payment_type;
	private String address;
	private String name;
	private String phone;
	order_Info(){}
	public order_Info(String id, Date setorder_time, int state, Date receiving_time, String time_from_setorder,
			int address_id, String dish_id_string, int store_id, String remark, int payment_type,String address ,double score,String name,String phone) {
		//super();
		this.id = id;
		this.setorder_time = setorder_time;
		this.state = state;
		this.receiving_time = receiving_time;
		this.time_from_setorder = time_from_setorder;
		this.address_id = address_id;
		this.dish_id_string = dish_id_string;
		this.store_id = store_id;
		this.remark = remark;
		this.payment_type = payment_type;
		this.address=address;
		this.score=score;
	}
	
	
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getScore() {
		return score;
	}
	public void setScore(double score) {
		this.score = score;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Date getSetorder_time() {
		return setorder_time;
	}
	public void setSetorder_time(Date setorder_time) {
		this.setorder_time = setorder_time;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public Date getReceiving_time() {
		return receiving_time;
	}
	public void setReceiving_time(Date receiving_time) {
		this.receiving_time = receiving_time;
	}
	public String getTime_from_setorder() {
		return time_from_setorder;
	}
	public void setTime_from_setorder(String time_from_setorder) {
		this.time_from_setorder = time_from_setorder;
	}
	public int getAddress_id() {
		return address_id;
	}
	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}
	public String getDish_id_string() {
		return dish_id_string;
	}
	public void setDish_id_string(String dish_id_string) {
		this.dish_id_string = dish_id_string;
	}
	public int getStore_id() {
		return store_id;
	}
	public void setStore_id(int store_id) {
		this.store_id = store_id;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public int getPayment_type() {
		return payment_type;
	}
	public void setPayment_type(int payment_type) {
		this.payment_type = payment_type;
	}
	@Override
	public String toString() {
		return "order_Info [id=" + id + ", score=" + score + ", setorder_time=" + setorder_time + ", state=" + state
				+ ", receiving_time=" + receiving_time + ", time_from_setorder=" + time_from_setorder + ", address_id="
				+ address_id + ", dish_id_string=" + dish_id_string + ", store_id=" + store_id + ", remark=" + remark
				+ ", payment_type=" + payment_type + ", address=" + address + "]";
	}
	
	
}
