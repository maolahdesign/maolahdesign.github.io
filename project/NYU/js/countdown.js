/* Author:

*/
$(function($) {
  //Countdown---------------------------------------------------------------
  var d = new Date();
  var tz = -5 - (-d.getTimezoneOffset()/60);

  var austDay = new Date(2016, 10 - 1, 1,9 - tz);
  //alert(austDay)
  $('#defaultCountdown').countdown({until: austDay});

  setInterval(function(){
  	$(".dot").fadeTo(3000,1).fadeTo(3000,0.3);},1000);

  $("#dot_map label").hover(
  		function(){$(this).css({'opacity':1,'text-shadow':'1px 0 0 #000'})},
  		function(){$(this).css('opacity',0)});
  });



