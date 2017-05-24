$(document).ready(function(){

	$(".arrow").click(function() {
    $('body').animate({
        scrollTop: $(".portfolio-container").offset().top
    }, 600);

	});
   

    });