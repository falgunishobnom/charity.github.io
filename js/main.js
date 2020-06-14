;(function () {
	'use strict';
	//Slider
	$('.slick-slider').slick({
		arrows: true,
		dots: true
	});

	// Page scroll
	var pageScroll = function() {
		$('body').on('click touch', '.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	};

	// Counter
	var counter = function() {
		$('.js-counter').countTo({
			formatter: function (value, options) {
			return value.toFixed(options.decimals);
		},
		});
	};
	var counterWayPoint = function() {
		if ($('#counter').length > 0 ) {
			$('#counter').waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	$(function(){
		pageScroll();
		counterWayPoint();
	});

}());

// Google map
function initMap() {
	if ($('#map').length > 0) {
		var city = {lat: 40.6974881, lng: -73.979681};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 6,
			center: city,
			disableDefaultUI: true,
		});
		var marker = new google.maps.Marker({
			position: city,
			map: map,
		});
	}
}