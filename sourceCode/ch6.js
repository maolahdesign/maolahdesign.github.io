var myString = "javascript, Java, JAVA, vbscript, javacafe";

function regexp1(){
	var myRegExp = /java/;
	myString = myString.replace(myRegExp,"hello");
	document.writeln("var myRegExp = /java/; => "+myString+"<br/>");	
}

function regexp2(){
	var myRegExp = /java/g;
	myString = myString.replace(myRegExp,"hello");
	document.writeln("var myRegExp = /java/g; => "+myString+"<br/>");	
}

function regexp3(){
	var myRegExp = /java/gi;
	myString = myString.replace(myRegExp,"hello");
	document.writeln("var myRegExp = /java/gi; => "+myString+"<br/>");	
}

