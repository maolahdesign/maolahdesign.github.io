/*
Firefox: 224
Opera: 17
WebKit (Safari/Chrome): 91 (Left Apple) or 93 (Right Apple)
*/

var content = document.getElementById('editor');   
content.focus();

/**/
content.onkeydown = function(event) {
	event = event ? event : window.event;
	keyCode = parseInt(event.keyCode);
    //alert(typeof(keyCode))
	
    if(keyCode == "91" || keyCode == "93" || keyCode == "224" || keyCode == "17" || event.ctrlKey){
        ctlKey = true;
        setTimeout("ctlKey = false",500);
    }
	if(keyCode == "67" && ctlKey ){ 
		hotkey = keyCode.toString();
        switch(hotkey){
            case "67":
                //alert("Copied text to clipboard : "  +content.value); 
                break;
        }
		ctlKey = false;
	}	
    
}

var init = function(){
    if(localStorage._pureContent){
        content.innerHTML = localStorage._pureContent;
    }
    store();  
},
    store = function(){
	if(typeof(Storage)!=="undefined"){
		localStorage._pureContent=content.value;
	}
	setTimeout(store,30000);
}

window.onload = init;

