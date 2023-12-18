function func01(){
	var userObject = new Object();
	userObject.lastLoginTime = new Date();
	document.writeln(userObject.lastLoginTime);
}
					 
function func02(){
	var userObject = {}; // 等於 new Object()
	userObject["firstName"] = new String("Troie");
	userObject["lastLoginTime"] = new Date();
	document.writeln(userObject["firstName"]);
	document.writeln(userObject["lastLoginTime"]);
}

function func03(){
	var userObject = { "firstName":"Troie","lastLoginTime": new Date()};
	userObject.lastName = "Pan";
	document.writeln(userObject.firstName+" "+userObject.lastLoginTime);
	document.writeln(userObject.lastName);
	document.writeln(userObject.lastName.length);
	document.writeln(userObject["username"]);
}

//匿名函式
var func = function(x){
	var userObject = new Object();
	userObject.lastLoginTime = new Date();
	userObject.firstName = new String(x);
	document.writeln(userObject.firstName);
	document.writeln(userObject.alastLoginTime);//會有安全漏洞
}

var func04 = new Function("x", "document.writeln('hello '+x)");

function func05(){
	// 把function當成參數用
	function square(x) {
		return x * x;
	}
	
	function double(x) {
		return x*2;
	}
	
	function hello(x) {
		return "hello "+x;
	}
	
	function operateOn(num, func) {
		return func(num);
	}
	
	document.writeln(operateOn(16, square));
	document.writeln(operateOn(16, double));
	document.writeln(operateOn("troie", hello));
}

function func06(){
	function makeIncrementer() {
		return function(x) { return x + 1; };
	}
	// function直接回傳值
	var inc = makeIncrementer();
	
	document.writeln(inc(7));
}

function func07(){
	// function 儲存陣列元素
	var arr = [];
	arr[0] = function(x) { return x * x; };
	arr[1] = arr[0](2);
	arr[2] = arr[0](arr[1]);
	arr[3] = arr[0](arr[2]);
	
	document.writeln(arr[3]);
}


function func08(){
	// function 等於物件屬性
	var obj = { "toString":function() { return "這是一個物件"; } };
	// calls obj.toString()
	document.writeln(obj);
}


function func09(){
	var myDog = {
		"name" : "Troie",
		"bark" : function() { document.writeln("hello monkey!"); },
		"displayFullName" : function() {
			document.writeln(this.name + " 偷學javascript<br/>");
			//what is "this"?
		},
		"chaseMrPostman" : function() { 
			// 想幹嘛就試試囉 
		}    
	};
	myDog.displayFullName(); 
	myDog.bark(); 
}


function func10(){
	function displayQuote() {
		document.writeln(this.memorableQuote);    
	}
	
	var troie = {
		"memorableQuote": "我也會javascript!", 
		"sayIt" : displayQuote
	};
	
	var tower = {
		"memorableQuote": "我吃故我在.", 
		"sayIt" : displayQuote
	};
	
	var monkey = {
		"memorableQuote": "香蕉是好物"
	};
	
	troie.sayIt();
	tower.sayIt(); 
	displayQuote.call(troie); 
}