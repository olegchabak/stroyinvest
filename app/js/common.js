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

	// **** Power Range + calculator ****
	var elem = document.querySelector('.calc-range');
	var init = new Powerange(elem, { 
		min: 100000, 
		max: 3000000, 
		start: 1200000, 
		step: 100000, 
		hideRange: true  
	});

	var input = $('input[name="calc"]:checked');
	var month = $(input).attr('data-month');
	var percent = $(input).attr('data-percent');
	var money = $('.calc-range').val();
	var result;
	var total;

	$('.calc-range').on('change', function() {
		$('.investments-calc-counter_invest_num').text(($(this).val()).replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ") + ' руб.');
		
	});


	//*** jQery Equal Heights ***
	if (screen.width >= 992) {
		$('.structure-box_thumb').equalHeights();	
	}
	

	// ***** Alert TEST*****
	alert('Содержимое на данном сайте размещено в учебных целях или для тестовых работ и не является офертой!')
	
});
