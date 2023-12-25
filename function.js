var select = 0;
var material = "";

function food_processor( select, material ){
    var meals = "";
    if( select == 1 ){
        meals = steam(material);
    }else if( select == 2 ){
        meals =boil(material);  
    }else if( select == 3 ){
        meals = parch(material);
    }else if( select == 4 ){
        meals = fry(material);   
    }else{
        meals = "水煮蛋";
    }
    return meals;
}

function steam( material ){
    var meals = "";
    meals = "蒸"+material;
    
    return meals;
}

function boil( material ){
    var meals = "";
    meals = "水煮"+material;
    
    return meals;
}

function parch( material ){
    var meals = "";
    meals = "炒"+material;
    
    return meals;
}

function fry( material ){
    var meals = "";
    meals = "炸"+material;
    
    return meals;
}

//呼叫函示
var dinner = food_processor( 3, "牛肉" );
var lunch = boil( "牛肉" );
console.log(dinner+"..."+lunch);