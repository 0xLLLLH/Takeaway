package com.takeaway;

import java.text.SimpleDateFormat;
import java.util.*;

public class testsql {

	public static void main(String[] args) {
		SimpleDateFormat s = new SimpleDateFormat("yyyyMMddHHmmss");
		Date now  = new Date();
		System.out.println(s.format(now));
	}
}
