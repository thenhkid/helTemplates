require.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		'jquery' : '../vendor/jquery-1.10.1',
		'bootstrap' : '../vendor/bootstrap',
		'responsive-tables' : '../vendor/responsive-tables',
		'mediaModal' : '../mediaModal',
		'overlay' : '../overlay',
		'sprintf' : '../vendor/sprintf',
		'fixed-header' : '../fixed-header'
	},
	shim: {
		'bootstrap': ['jquery'],
		'responsive-tables': ['jquery']
	}
});

require(['jquery', 'fixed-header','bootstrap', 'responsive-tables', 'mediaModal', 'overlay'], function ($, fixedHeader) {

	var primaryNav = $('.primary-nav');
	var primaryNavHeight = primaryNav.outerHeight();

	// left nav fixed nav bar
	$('.fixed-region').affix({
		offset: {
			top: function () {
				return $('.main-container').position().top + primaryNavHeight;
			},
			bottom: function () {
				// calculate how far down the content section goes down the page
				var bottomNum = $('.wrap').outerHeight() - ($('.main-container').position().top + $('.main-container').outerHeight());
				return bottomNum;
			}
		}
	});


	// overwrite scrollspy to get rid of activating parent list items
	$.fn.scrollspy.Constructor.prototype.activate = function (target) {
		this.activeTarget = target;

		$(this.selector)
			.parents('.active')
			.removeClass('active');

		var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

		var active = $(selector)
			.parent() //EDIT//
			.addClass('active');

		if (active.parent('.dropdown-menu').length)  {
			active = active
			.closest('li.dropdown')
			.addClass('active');
		}

		active.trigger('activate');
	};



	// left nav scrollspy
	$('body').scrollspy({ target: '#active-page-nav' });

	// initialized fixed header
	fixedHeader.init();

	/*
	$('body').overlay({
		glyphicon : 'floppy-disk',
		message : 'Saving...'
	});
	*/
});