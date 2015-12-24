package com.takeaway;

import java.text.SimpleDateFormat;
import java.util.*;

public class testsql {

	public static void main(String[] args) {
		/*SimpleDateFormat s = new SimpleDateFormat("yyyyMMddHHmmss");
		Date now  = new Date();
		Date y =new Date();
		System.out.println(s.format(now));
		System.out.println();*/
		int n=5;
		int []a= new int [n];
		for(int i=0;i<n;i++)
		{
			a[i]=i;
		}
		for(int i =0;i<n;i++)
		{
			System.out.println(a[i]);
		}
	}
}
