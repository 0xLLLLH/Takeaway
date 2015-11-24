/**
 * 
 */

function getFocus(inform1,inform2){
	inform1.style.display="none";
	inform2.style.display="none";
}
function loseFocus(txt,inform){
	if (txt.value==""){
		inform.style.display="block";
	}
}