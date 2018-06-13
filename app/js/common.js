$(function() {
	
	// ******* Button mobile menu *******
	$('#topNavBtn').on('click', function() {
		$('.hamburger').toggleClass('is-active');
		$('.top-nav_menu').slideToggle();
	});
	// ******* Button left-side mobile category *******
	$('#leftSidebarBtn').on('click', function() {
		$('.left-sidebar_menu').slideToggle();
		$('.left-sidebar_btn').toggleClass('open');

	});
	


	// ******** Slick slider ********
	$('.directions-blocks').slick({
		slidesToShow: 4,
		autoplay: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		arrows: false,
		dots: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
	});


});
