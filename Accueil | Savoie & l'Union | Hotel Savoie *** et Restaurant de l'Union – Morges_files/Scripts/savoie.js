 $(document).ready(function() { 
  $("#hotel-reservations").hide(0); // Tabs system pour page hotel
   
 $(".nav-tarifs").click(function () {
 	  $(this).addClass("on");
	  $(".nav-reservation").removeClass("on");
      $("#hotel-reservations").fadeOut("fast");
	  $("#hotel-tarifs").fadeIn("fast");
    });
 $(".nav-reservation").click(function () {
      $(this).addClass("on");
	  $(".nav-tarifs").removeClass("on");
      $("#hotel-tarifs").fadeOut("fast");
	  $("#hotel-reservations").fadeIn("fast");
    });
});

$(function(){
	$('.banners img:gt(0)').hide();
	setInterval(function(){$('.banners :first-child').fadeOut(1000).next('img').fadeIn(1200).end().appendTo('.banners');}, 4000);
});
$(function(){
	$('.hotelbox img:gt(0)').hide();
	setInterval(function(){$('.hotelbox :first-child').fadeOut(1000).next('img').fadeIn(1200).end().appendTo('.hotelbox');}, 4000);
});