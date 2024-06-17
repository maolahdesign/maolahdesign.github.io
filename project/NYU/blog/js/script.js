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
});




