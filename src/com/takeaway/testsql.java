package com.takeaway;

import java.util.*;

public class testsql {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		ArrayList<store_Info> data = new ArrayList<store_Info>();
		store_Bean bean =new store_Bean();
	//s	Iterator<store_Info> iter = data.iterator();
		int ans=bean.get_store_num(119.735539, 30.262074);
		System.out.println(ans);
		//System.out.println();
	}

}
