function validateForm(){
	errorMsg="";
	
	var username = document.getElementById("username").value;
	var pwd = document.getElementById("pwd").value;
	var pwd2 = document.getElementById("pwd2").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var hobbie = document.getElementsByName("hobby");
	
	if(username && pwd && pwd2 && email && phone){
		chkFunc("uid",username);
		chkFunc("email",email);
		
		
	}else{
		errorMsg = "請檢查所有必填項目是否都已填寫完成";
		alert(errorMsg);
		cancelHandler();
	}

}

function chkUsername(str){
	if(str.length < 3){
		errorMsg = "小於三個字元";
		cancelHandler();
	}else{
		var patt1 = new RegExp("^[a-z0-9_-]{3,16}$");
		var result = patt1.test(str);
		cancelHandler();
	}
}


function chkFunc(validateType,str){
	switch(validateType){
		case "uid":
			var patt = new RegExp("^[a-z0-9_-]{3,16}$");
			var result = patt.test(str);
			if(result) return true;
			else alert("請檢查輸入帳號格式是否正確!!!");
			cancelHandler();
			break;
		
		default:
			alert("hello");
	}
}

function cancelHandler(event){
	var event = event || window.event;
	if(event.preventDefault) event.preventDefault();
	if(event.returnValue) event.returnValue = false;
	return false;
}

function stopEvent(event){
	var event = event || window.event;
	if(event.stopPropagation) {
		event.stopPropagation();
		event.preventDefault();
	}else{
		event.cancelBubble = true;
	}
}

