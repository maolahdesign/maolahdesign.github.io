/* Author:

*/
$(function($) {
	$('#sub_nav li').click(function(){
		var page = $(this).attr('id');
		var go = '';
		$('#sub_nav').css({position:'fixed',top:'40px','z-index':'10'});  
		//$('#sub_nav li').removeClass('here');
		//$(this).addClass('here');
		
		switch(page){
			case 'big_question':
				go += 'section:nth-child(2)';
				break;
			case 'inspire':
				go += 'section:nth-child(3)';
				break;
			case 'ideate':
				go += 'section:nth-child(4)';
				break;
			case 'applaud':
				go += 'section:nth-child(5)';
				break;
			case 'create':
				go += 'section:nth-child(6)';
				break;
		}
		$("html,body").animate({scrollTop: $(go).offset().top - 40}, 1500);
	});

	$(window).scroll(function () { 
		var nowTop = Math.abs(($('html').offset().top));

		//if(nowTop>60) $(".map_bg").animate({opacity:'0.4'},2000);
		
		$('#sub_nav li').removeClass('here');
		if(nowTop >551 && nowTop < 1050) $("#big_question").addClass('here');
		if(nowTop >1051 && nowTop < 1750) $("#inspire").addClass('here');
		if(nowTop >1751 && nowTop < 2450) $("#ideate").addClass('here');
		if(nowTop >2451 && nowTop < 3100) $("#applaud").addClass('here');
		if(nowTop >3101 ) $("#create").addClass('here');

		if(nowTop>500){
			fixed_sub_nav();
		}else if(nowTop<500){
			sub_nav();
		}
    });

    function fixed_sub_nav(){
    	$('#sub_nav').css({position:'fixed',top:'40px','z-index':'10'});  
    }

    function sub_nav(){
    	$('#sub_nav').css({position:'relative',top:'0','z-index':'10'});  
    }

});




