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
				slidesToShow: 1,
				arrows: true
			}
		}
	]
	});

	// *** Close modal window ***
	// $('.closeModal, .modal').on('click', function() {
	// 	event.preventDefault();
	// 	$('.modal').fadeOut('slow');
	// });
	
	$(".modal, .closeModal").on('click', function (e) {
	    if (e.target == this) $(".modal").fadeOut('slow');
	})

	//*** jQery Equal Heights ***
	if (screen.width >= 992) {
		$('.structure-box_thumb').equalHeights();	
	}

	// *** TEST notification ***
	$('body').prepend('<div class="test" style="background-color:red;color:white;text-align:center;font-size:13px">Содержимое на данном сайте размещено в учебных целях или для тестовых работ и не является офертой! <b class="test-hide" style="margin-left:15px;cursor:pointer"> Скрыть&nbsp;&#10008;</b></div>');
	$('.test-hide').on('click',function(){$('.test').slideUp()});

	// *** Preloader ***
	$('.preloader').fadeOut('slow');

});
