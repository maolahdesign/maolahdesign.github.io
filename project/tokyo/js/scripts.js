$(document).ready(function(){
    if(localStorage['money']){
        $('.start').addClass('hide');
        $('.count').removeClass('hide');
        $('h1').html('&#36;'+localStorage['money']);
        loadOrder();
    }
});

$(".save").click(function(){
    localStorage['money'] = $('#money').val();
    localStorage['order'] = '';
    $('.start').addClass('hide');
    $('.count').removeClass('hide');
    $('h1').html('&#36;'+localStorage['money']);
    $('.table tbody').html('');
});
$(".cancel").click(function(){
//    localStorage['money'] = $('#money').val();
//    localStorage['order'] = '';
    $('.start').addClass('hide');
    $('.count').removeClass('hide');
    $('h1').html('&#36;'+localStorage['money']);
});

$(".configure").click(function(){
    $('.count').addClass('hide');
    $('.start').removeClass('hide');
});

$('.myform').on('click','button',function(){
    var item = newItem ='';
    var quantity = pay = 0;
    var today = new Date();
    var buyDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    item = $('#item').val();
    quantity = $('#quantity').val();
    if(!quantity) quantity = 1;
    pay = quantity * $('#pay').val();
    
    if(pay){
        $('#item').val('');
        $('#quantity').val(1);
        $('#pay').val('');
        newItem = "<tr>"+
            "<td>"+item+" x "+quantity+"</td>"+
            "<td>"+buyDate.toLocaleString()+"</td>"+
            "<td class=\"pay\">"+pay+"</td>"+
            "<td><i class=\"glyphicon glyphicon-trash del\"></i></td>"+
            "</tr>";
        $('.table tbody').prepend(newItem);
        counter();
        var order = $('.table').tableToJSON(); 
        localStorage['order'] = JSON.stringify(order);
    }
});

function loadOrder(){
    var obj = jQuery.parseJSON( localStorage['order'] );
    var orderTable = orderCol = "";
    for (var i = 0,j = obj.length; i < j; i++) {
        orderCol = "<tr>"+
            "<td>"+obj[i]["商品"]+"</td>"+
            "<td>"+obj[i]["時間"]+"</td>"+
            "<td class=\"pay\">"+obj[i]["金額"]+"</td>"+
            "<td><i class=\"glyphicon glyphicon-trash del\"></i></td>"+
            "</tr>";
        orderTable += orderCol;
        console.log("商品名稱:"+obj[i]["商品名稱"]);
        console.log("金額:"+obj[i]["金額"]); 
    }
    $('.table tbody').append(orderTable);
    counter();
}

function counter(){
    var money = parseInt(localStorage['money']);
    $('.table .pay').each(function(){
        money -= parseInt($(this).text());
    });
    $('h1').html('&#36;'+money);
    $("body").animate({ scrollTop: 0 }, 1000);
}

$('table').on('click','i',function(){
    $(this).closest('tr').remove();  
    counter();
});