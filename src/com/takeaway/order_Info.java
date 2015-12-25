package com.takeaway;
import java.util.*;
public class order_Info {
	public static String  order_Table_Name = "order_list";
	public static int pre_page = 6;
	private String id;
	private Date setorder_time;
	private int state ;
	private int send_time;
	private String time_from_setorder;
	private int address_id;
	private String dish_id_string;
	private int store_id;
	private String remark;
	private int payment_type;
	private String address;
	private String name;
	private String phone;
	private double total_price;
	private String discount_result;
	order_Info(){}
	public order_Info(String id, Date setorder_time, int state, int send_time, String time_from_setorder, double total_price,String discount_result,
			int address_id, String dish_id_string, int store_id, String remark, int payment_type,String address ,String name,String phone) {
		//super();
		this.id = id;
		this.setorder_time = setorder_time;
		this.state = state;
		this.send_time = send_time;
		this.time_from_setorder = time_from_setorder;
		this.address_id = address_id;
		this.dish_id_string = dish_id_string;
		this.store_id = store_id;
		this.remark = remark;
		this.payment_type = payment_type;
		this.address=address;
		this.total_price=total_price;
		this.discount_result=discount_result;
	}
	
	
	public double getTotal_price() {
		return total_price;
	}
	public void setTotal_price(double total_price) {
		this.total_price = total_price;
	}
	public String getDiscount_result() {
		return discount_result;
	}
	public void setDiscount_result(String discount_result) {
		this.discount_result = discount_result;
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
	
	public int getSend_time() {
		return send_time;
	}
	public void setSend_time(int send_time) {
		this.send_time = send_time;
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
		return "order_Info [id=" + id + ", setorder_time=" + setorder_time + ", state=" + state
				+ ", send_time=" + send_time + ", time_from_setorder=" + time_from_setorder + ", address_id="
				+ address_id + ", dish_id_string=" + dish_id_string + ", store_id=" + store_id + ", remark=" + remark
				+ ", payment_type=" + payment_type + ", address=" + address + "]";
	}
	
	
}
