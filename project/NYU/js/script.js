/* Author:

*/
$(function($) {
   var options1={
	   	timeNotation: '12h',
		am_pm: true,
		utc: true,
		utc_offset: -4,
		format: '%H:%M %p',
	};
	$('.new_york').jclock(options1);

	var options2={
	   	timeNotation: '12h',
		am_pm: true,
		utc: true,
		utc_offset: +4,
		format: '%H:%M %p',
	};
	$('.abu_dhabi').jclock(options2);

	var options3={
	   	timeNotation: '12h',
		am_pm: true,
		utc: true,
		utc_offset: +8,
		format: '%H:%M %p',
	};
	$('.shanghai').jclock(options3);


	$('.signup').click(function() {
		$('.signup_area').toggle();
	})

	$("#signup span").click(function(){
		if(validateEmail($("#id_email").val())){
			$("#signup p>em").html('Thanks!');
			$("#signup").delay(800).submit();
		}else{
			$("#id_email").val('');
			$("#signup p>em").html('');
			$("#signup p>em").html('invalid email');
			$('.signup_area').css('display','block');
		}
	})

	function validateEmail(email) {
	    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	    if( !emailReg.test( email ) ) {
	        return false;
	    } else {
	        return true;
	    }
	}

});




