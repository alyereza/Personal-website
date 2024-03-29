
(function($) {

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

			$('form').placeholder();

			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

			$('.scrolly').scrolly();

			var $nav_a = $('#nav a');

				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

							t.addClass('active');

					});

				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });


				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');

	});

})(jQuery);