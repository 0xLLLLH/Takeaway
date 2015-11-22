//Ajax
var xmlhttp;

/**
 * ajax初始化
 * 
 * @param url
 *            地址
 * @param cfunc
 *            回调函数
 */
function loadXMLDoc(url, cfunc) {

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = cfunc;
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);

}
