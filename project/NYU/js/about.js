/* Author:

*/
$(function($) {
	$('#sub_nav li').click(function(){
		var page = $(this).attr('id');
		var go = '';
		$('#sub_nav').css({position:'fixed',top:'40px','z-index':'10'});  
		
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
      if(nowTop>660){
      	fixed_sub_nav();
      }else if(nowTop<660){
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




