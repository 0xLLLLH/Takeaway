package com.takeaway;

import java.util.*;

public class testsql {

	public static void main(String[] args) {
		/*SimpleDateFormat s = new SimpleDateFormat("yyyyMMddHHmmss");
		Date now  = new Date();
		Date y =new Date();
		System.out.println(s.format(now));
		System.out.println();*/
		Date exdate=new Date();
		exdate.setTime(exdate.getTime()+3600);
				//alert(exdate.toGMTString());
		System.out.println(System.currentTimeMillis());
		System.out.print(exdate.getTime());
	}
}
