var MINUTE = 60, HOUR = 60 * MINUTE, DAY = 24 * HOUR, MONTH = 31 * DAY, YEAR = 355 * DAY, CENTURY = 100 * YEAR, BY = 1000000 * YEAR;

(function ($) {
	Passwrdr = {
		lang : translation.PluginLang,
		url : translation.siteUrl,
		img_folder : translation.ImgFolderURL,
		socialGA : {
			'fb' : "ga('send', 'event', { eventCategory: 'Social', eventAction: 'Share', eventLabel: 'Facebook' });",
			'in' : "ga('send', 'event', { eventCategory: 'Social', eventAction: 'Share', eventLabel: 'LinkedIn' });",
			'g' : "ga('send', 'event', { eventCategory: 'Social', eventAction: 'Share', eventLabel: 'GooglePlus' });",
			'tw' : "ga('send', 'event', { eventCategory: 'Social', eventAction: 'Share', eventLabel: 'Twitter' });",
			'vk' : "ga('send', 'event', { eventCategory: 'Social', eventAction: 'Share', eventLabel: 'Vkontakte' });",
			'ok' : "ga('send', 'event', { eventCategory: 'Social', eventAction: 'Share', eventLabel: 'Odnoklassniki' });"
		},
		old_value : '',
		old_rank : '',
		crack_time : 0,
		plural : function (n) {
			return  + (n > 1);
		},
		explanations : function (f) {
			function k(k) {
				return function (n) {
					return n * k;
				};
			}
			function r(k) {
				return function (n) {
					return (n / k) << 0;
				};
			}
			var i,
			j,
			start,
			index = {},
			sorted = [],
			ex = {};
			for (i in f) {
				f[i].unshift(i);
				start = f[i][1];
				if (!index[start]) {
					j = sorted.length;
					sorted[j] = [start];
					index[start] = sorted[j];
				}
				index[start].push(f[i]);
			}
			sorted.sort(function (a, b) {
				return a[0] > b[0];
			});
			ex.get = function (n) {
				var res = {};
				for (var i = 0, ii = sorted.length; i < ii; i++) {
					if (sorted[i][0] <= n) {
						for (var j = 1, jj = sorted[i].length; j < jj; j++) {
							var e = sorted[i][j];
							if (e[2] > n) {
								var s = e[3];
								var x;
								var u = '';
								var sharing = e[5];
								if (e[4]) {
									if (typeof e[4] === 'string') {
										sharing = e[4];
									} else {
										x = e[4];
										if ($.isArray(x)) {
											u = Passwrdr.units[x[1]];
											x = x[0];
										}
										x = (n / x) | 1;
										if (u)
											u = ' ' + u[Passwrdr.plural(x)];
										s = s.replace(/%[^%]*%/, x.toString() + u);
									}
								}
								if (sharing) {
									if (x)
										sharing = sharing.replace(/%[^%]*%/, x.toString() + u);
									s = new String(s);
									s.sharing = sharing;
								}
								res[e[0]] = s;
							}
						}
					}
				}
				return res;
			};
			return ex;
		},
		padding : function (empty) {
			if (!empty)
				return 0;
			var h = $('body').height();
			h = h > 300 ? h / 2 - 150 : 0;
			return h > 200 ? 200 : h;
		},
		loaded : false,
		load : function () {
			$('.content').addClass('loading');
			Passwrdr.init();
		},
		init : function () {
			var check = function () {
				if (window.zxcvbn === undefined) {
					setTimeout(check, 100);
				} else {
					$('.content').removeClass('loading');
					Passwrdr.loaded = true;
				}
			};
			check();

			var margin = function () {
				$('.content > h2').css({
					paddingTop : Passwrdr.padding(!$('#passwd').val())
				});
			};
			$(window).resize(margin);
			margin();
			$('.content > h1, .content > h2').click(function () {
				$('#passwd').val('').focus();
			});

			var $rank = $('<table class="passwd_rank">');
			for (var i = 1; i < 11; i++) {
				$rank.append($('<td>'));
			}
			$rank.insertAfter($('.password_wrap'));

			$('#passwd_time').before($('<ul id="passwd_params">'));

			var h = 0;
			$.each(Passwrdr.computers, function (name, params) {
				var $computer = $('<li class="' + name + '">'),
				generic = '';
				if (name === Passwrdr.generic_computer) {
					$('.passwd_time_text em').click(function () {
						$('html, body').animate({
							scrollTop : $computer.offset().top
						}, 'fast');
					});
					generic = '*';
				}
				var link = '<a target="_blank" href="http://en.wikipedia.org/wiki/' + params.wiki + '">' + generic + params.title + '</a>';
				$computer.append($('<div class="title">' + link + '</div>'));
				$computer.append($('<div class="text">' + params.text + '</div>'));
				$computer.append($('<div class="bar"></div>'));
				$computer.append($('<div class="time"></div>'));
				$computer.appendTo($('.passwd_computers'));
				h++;
			});
			h = 10 + 18 + h * 50;

			Passwrdr.drawScale(h);
			$(window).resize(function () {
				Passwrdr.drawScale(h);
			});

			$('.passwd_switch').click(function () {
				ga('send', 'event', {
					eventCategory : 'Request',
					eventAction : 'ShowHideToggle'
				});
				var type = 'password' === $('#passwd').attr('type') ? 'text' : 'password';
				var val = $('#passwd').val();
				$('#passwd').replaceWith($('<input  id="passwd" placeholder="' + translation.TestPassword + '" type="' + type + '">').val(val)).focus();
			});

			function init_arrow(dir, jump) {
				$('.passwd_time_explanation .arrow_' + dir).click(function () {
					var active = $('.passwd_explanations > .active'),
					next = active[dir]();
					if (!next.length)
						next = $('.passwd_explanations').children()[jump]();
					active.removeClass('active');
					next.addClass('active');
					var index = $(explanation[next.attr('class').slice(0, 2).replace(' ', '')]);
					$('.passwd_shared.description').text(index[4]);
					Passwrdr.drawNextSocial(next.attr('class').slice(0, 2).replace(' ', ''));
				});
			}
			init_arrow('prev', 'last');
			init_arrow('next', 'first');

			$('.pure a').click(function (e) {
				top.location.href = this.href;
				e.preventDefault();
			})

			$.each(Passwrdr.social, function (name, params) {
				$('.social.' + name + ' a').click(function () {
					window.open($(this).attr('href'), 'passwd_' + name, 'width=600,height=400');
					return false;
				});
			});

			setInterval(Passwrdr.watcher, 100);
			Passwrdr.watcher();
			$('.content').removeClass('loading');
		},
		drawScale : function (h) {
			$('.passwd_computers_log').remove();
			var $log = $('<ul class="passwd_computers_log"></ul>').insertBefore($('.passwd_computers'));
			var scale = {};
			if (window.innerWidth <= 480) {
				scale = {
					Time : 1
				};

			} else if (window.innerWidth <= 640) {
				scale = {
					sec : 1,
					hour : HOUR,
					month : DAY * 30,
					'20 years' : YEAR * 20,
					'100k years' : CENTURY * 1000
				};
			} else {
				scale = {
					sec : 1,
					min : MINUTE,
					hour : HOUR,
					day : DAY,
					month : DAY * 30,
					year : YEAR,
					'20 years' : YEAR * 20,
					'1k years' : CENTURY * 10,
					'100k years' : CENTURY * 1000,
					'' : Infinity
				};
			}
			$.each(scale, function (title, count) {
				var $li = $('<li></li>').html('<span>' + title + '</span>').css({
						left : Passwrdr.log(count) + '%',
						height : h
					});
				$li.appendTo($log);
				if (count === Infinity)
					$li.addClass('inf');
			});
		},
		log : function (x) {
			if (x < 1)
				x = 1;
			var y = Math.log(x) * 3;
			if (y > 100)
				y = 100;
			y = Math.pow(y / 100, 1.25) * 100;
			return y;
		},
		watcher : function () {
			var result,
			rank,
			time,
			text,
			i,
			s,
			params = {},
			passwd = $('#passwd').val();
			if (Passwrdr.loaded && (passwd != Passwrdr.old_value)) {
				if (!passwd != !Passwrdr.old_value) {
					if ($('#passwd').val() == '') {
						$('.first_picture').slideDown(400);
					} else {
						$('.first_picture').slideUp(400);
					}
				}
				$('.content').toggleClass('empty', !passwd);
				Passwrdr.old_value = passwd;
				result = zxcvbn(passwd);

				rank = passwd.length ? result.guesses_log10 - 2 : '';
				if (rank > 10)
					rank = 10;
				if (rank < 0)
					rank = 0;

				var colorMap = ['#EC2939', '#EC2939', '#EC2939', '#EE9E26', '#EE9E26', '#EE9E26', '#006A52', '#006A52', '#006A52', '#006A52'];
				$('.passwd_rank td').removeClass('rank' + Passwrdr.old_rank).addClass('rank' + rank).css('background-color', 'transparent')
				.each(function (index, value) {
					if (index < rank) {
						$(value).css('background-color', colorMap[index]);
					}
				});

				if (passwd.length == 0) {
					$('.passwd_rank td').each(function (index, value) {
						$(value).css('background-color', colorMap[index]);
					});
				}

				Passwrdr.crack_time = result['crack_times_seconds']['online_no_throttling_10_per_second'];
				Passwrdr.update();

				$('#passwd_params').empty();

				if (passwd != '') {
					if (passwd.length < 6)
						params.short = 1;
					for (i = 0, s = result.sequence; i < s.length; i++) {
						if (s[i].token.length > 2) {
							if (s[i].pattern === 'spatial' && s[i].graph === 'qwerty')
								params.spatial = 1;
							if (s[i].pattern === 'dictionary' && !s[i].l33t)
								params.dictionary = 1;
							if (s[i].pattern === 'repeat')
								params.repeat = 1;
						}
					}
					for (i in params) {
						$('<li>').html('<span></span>' + Passwrdr.params_texts[i]).appendTo($('#passwd_params'));
					}
				}

				Passwrdr.old_rank = rank;
			}
		},
		display_time : function (time) {
			var display = '';
			var times = [
				[MINUTE, 'second'], [HOUR, 'minute'], [DAY, 'hour'], [MONTH, 'day'],
				[YEAR, 'month'], [CENTURY, 'year'], [BY, 'century']
			];
			for (var i = 0; i < times.length; i++) {
				var t = times[i];
				if (time < t[0]) {
					var number = Math.ceil(time / (i ? times[i - 1][0] : 1));
					number += !number; // avoid zeros
					display = number + ' ' + Passwrdr.units[t[1]][Passwrdr.plural(number)];
					break;
				}
			}
			if (!display)
				display = '10000+ ' + Passwrdr.units.century[Passwrdr.plural(10000)];
			return display;
		},
		drawNextSocial : function (e) {
			var time = Passwrdr.crack_time,
			display = Passwrdr.display_time(time);
			var ex = Passwrdr.explanations.get(time);

			var first = function (obj) {
				for (var i in obj)
					return [i, obj[i]];
			};
			$.each(Passwrdr.social, function (name, params) {
				var i,
				j,
				s = '',
				url = params.url;
				var tempArr = $(explanation[e]).last()[0].split('/');
				var image = tempArr.pop();
				image.replace('_dark', '');

				var shareImage = 'share_' + image;
				var imgUrl = encodeURIComponent(Passwrdr.img_folder);
				if (addition[e] && addition[e].share_image) {
					shareImage = addition[e].share_image;
					imgUrl = '';
				}

				var map = {
					img_url : imgUrl,
					time : display,
					image : encodeURIComponent(shareImage),
					message : ex[e].sharing || first(ex)[1],
					pc_msg : encodeURIComponent(ex[e].sharing || first(ex)[1]),
					pc_time : encodeURIComponent(display),
					link : location.href
				};

				var share_url = Passwrdr.url;
				if (name != 'tw') {
					share_url += share_url.indexOf('?') > -1 ? '&' : '?';
					share_url += 'image=' + imgUrl + shareImage + '&message=' + map.pc_msg + '&time=' + map.pc_time;
				}
				map.url = encodeURIComponent(share_url);
				for (i in params) {
					if (i === 'url')
						continue;
					if ($.isFunction(params[i])) {
						map[i] = params[i](map);
					} else {
						s = params[i];
						for (j in map) {
							s = s.replace('%' + j + '%', map[j]);
						}
						map[i] = s;
					}
				}
				for (i in map) {
					url = url.replace(new RegExp('%' + i + '%', 'g'), map[i]);
				}

				$('.social.' + name + ' a').attr({
					href : url,
					target : '_blank',
					onclick : Passwrdr.socialGA[name]
				});
			});
		},
		update : function () {
			var time = Passwrdr.crack_time,
			display = Passwrdr.display_time(time);
			var ex = Passwrdr.explanations.get(time);

			var first = function (obj) {
				for (var i in obj)
					return [i, obj[i]];
			};
			$.each(Passwrdr.social, function (name, params) {
				var i,
				j,
				e = first(ex)[0],
				s = '',
				url = params.url;
				var tempArr = $(explanation[e]).last()[0].split('/');
				var image = tempArr.pop();
				image.replace('_dark', '');

				var shareImage = 'share_' + image;
				var imgUrl = encodeURIComponent(Passwrdr.img_folder);
				if (addition[e] && addition[e].share_image) {
					shareImage = addition[e].share_image;
					imgUrl = '';
				}

				var map = {
					img_url : imgUrl,
					time : display,
					image : encodeURIComponent(shareImage),
					message : ex[e].sharing || first(ex)[1],
					pc_msg : encodeURIComponent(ex[e].sharing || first(ex)[1]),
					pc_time : encodeURIComponent(display),
					link : location.href
				};

				map.site_url = Passwrdr.url;
				var share_url = Passwrdr.url;
				if (name != 'tw') {
					share_url += share_url.indexOf('?') > -1 ? '&' : '?';
					share_url += 'image=' + imgUrl + shareImage + '&message=' + map.pc_msg + '&time=' + map.pc_time;
				}
				map.url = encodeURIComponent(share_url);
				for (i in params) {
					if (i === 'url')
						continue;
					if ($.isFunction(params[i])) {
						map[i] = params[i](map);
					} else {
						s = params[i];
						for (j in map) {
							s = s.replace('%' + j + '%', map[j]);
						}
						map[i] = s;
					}
				}

				for (i in map) {
					url = url.replace(new RegExp('%' + i + '%', 'g'), map[i]);
				}

				$('.social.' + name + ' a').attr({
					href : url,
					target : '_blank',
					onclick : Passwrdr.socialGA[name]
				});
			});

			var current = first(ex)[0];
			$('.passwd_shared.description').text(ex[current].sharing);

			var counter = /(\d+\+?) (.+)/.exec(display);
			$('.passwd_time_counter').empty();
			if (counter) {
				$('.passwd_time_counter').append('<span class="digit">' + counter[1] + '</span><span class="unit">' + counter[2] + '</span>');
			} else {
				$('.passwd_time_counter').append($('<span class="unit">' + time + '</span>'));
			}

			$('.passwd_explanations').empty();
			var j = 0;

			for (var i in ex) {
				var className = '';
				if ($(explanation[i]).last()[0].indexOf('bender') != -1) {
					className = 'bender';
				}
				if ($(explanation[i]).last()[0].indexOf('tordigrada') != -1) {
					className = ' vertical ';
				}
				$('.passwd_explanations').append($('<li style="background-image: url(' + $(explanation[i]).last()[0] + ')">' + ex[i] + '</li>').addClass(i + ' ' + className + (j++ ? '' : ' active')));
			}

			$('.passwd_time_explanation').toggleClass('multi', j > 1);

			$.each(Passwrdr.computers, function (name, params) {
				var time = Passwrdr.crack_time * params.k,
				$computer = $('.passwd_computers .' + name);
				$computer.find('.time').text(Passwrdr.display_time(time));
				$computer.find('.bar').css({
					width : (Passwrdr.log(time) >> 0) + '%'
				});
			});
		}
	};

	$(document).ready(function () {
		$('.close').click(function () {
			$('.attention').slideUp('slow');
		});
		$(Passwrdr.load);

		$('.lang .lang-select').click(function (e) {
			e.stopPropagation();
			var wrapper = $('.wrapper');
			if (wrapper.hasClass('select_lang')) {
				wrapper.removeClass('select_lang');
			} else {
				wrapper.addClass('select_lang');
			}
		});
		$('.select_lang').live('click', function () {
			$(this).removeClass('select_lang');
		});
	});
})(jQuery);

(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function () {
		(i[r].q = i[r].q || []).push(arguments)
	},
	i[r].l = 1 * new Date();
	a = s.createElement(o),
	m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-61587331-29', 'auto');
ga('send', 'pageview');

(function () {
	var _fbq = window._fbq || (window._fbq = []);
	if (!_fbq.loaded) {
		var fbds = document.createElement('script');
		fbds.async = true;
		fbds.src = '//connect.facebook.net/en_US/fbds.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(fbds, s);
		_fbq.loaded = true;
	}
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', '6024561294738', {
			'value' : '0.00',
			'currency' : 'GBP'
		}
	]);