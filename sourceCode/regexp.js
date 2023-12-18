alert(1);
var myString = "javascript, Java, JAVA, vbscript, javacafe";
var myRegExp = /java/;
myString = myString.replace(myRegExp,"hello");
document.write(myString);