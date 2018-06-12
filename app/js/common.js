$(function() {
	
	// ******* Button mobile menu *******
	$('#topNavBtn').on('click', function() {
		$('.hamburger').toggleClass('is-active');
		$('nav').slideToggle();
	});
	// ******* Button left-side mobile category *******
	$('#leftSidebarBtn').on('click', function() {
		$('.left-sidebar_menu').slideToggle();
	});
	


	// ******** Slick slider ********
	$('.directions-blocks').slick({
		slidesToShow: 4,
		autoplay: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		arrows: false,
		dots: true
	});


});
