package com.takeaway;
import java.util.*;
public class comment_Info {
	public static String comment_Table_Name = "comments_list";
	public static int pre_page = 10;
	private int id;
	private String comments;
	private String username;
	private double score;
	private String order_num;
	private Date time;
	public comment_Info(){}
	
	public comment_Info(int id, String comments, String username, double score, String order_num, Date time) {
		//super();
		this.id = id;
		this.comments = comments;
		this.username = username;
		this.score = score;
		this.order_num = order_num;
		this.time = time;
	}
	
	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public double getScore() {
		return score;
	}
	public void setScore(double score) {
		this.score = score;
	}
	public String getOrder_num() {
		return order_num;
	}
	public void setOrder_num(String order_num) {
		this.order_num = order_num;
	}
}
