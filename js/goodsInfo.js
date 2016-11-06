

$(function(){
	$(window).on('load',function(){
		// 导航
		$('.all_goods').hover(function(){
			$('.con_nav').show();
		},function(){
			$('.con_nav').hide();
		});
		// 放大镜
		var
			middleWidth = $('.bigImg').innerWidth(),
			middleHeight = $('.bigImg').innerHeight(),
			
			tipWidth = $('.tip').width(),
			tipHeight = $('.tip').height(),
			
			bigWidth = $('.showImg').innerWidth(),
			bigHeight = $('.showImg').innerHeight(),
			
			rateX = bigWidth / tipWidth,
			rateY = bigHeight / tipHeight;
		$('#js_imglist').children('li').each(function(index,element){
			$(this).hover(function(){
				$(this).addClass('current').siblings('li').removeClass('current');
				var _src = $(this).children('a').find('img').attr('src');
				$('.midImg').attr('src',_src);
				$('.showImg').children('img').attr('src',_src.replace('_m','_b'));
			});
		});

		$('.bigImg').hover(function(){
			$('.tip,.showImg').show();
		},function(){
			$('.tip,.showImg').hide();
		}).on('mousemove',function(ev){
			var 
				moveX = ev.pageX - tipWidth /2,
				moveY = ev.pageY - tipHeight / 2;
			$('.tip').offset({
				"left": moveX,
				"top": moveY,
			});
			var 
				x = $('.tip').position().left,
				y = $('.tip').position().top;
			if(x < 0)
				x = 0;
			else if(x > middleWidth - tipWidth)
				x = middleWidth - tipWidth;
				
			if(y<0)
				y = 0;
			else if(y > middleHeight - tipHeight)
				y = middleHeight - tipHeight;
			$('.tip').css({
				"left":x,
				"top":y,
			});
			$('.showImg img').css({
				"left": - x * rateX,
				"top": - y * rateY,
			});
		});
		//数量加减
		// console.log(typeof parseInt($('.numText').val()))
		// $('.numText').on('keyup',function(ev){
		// 	$('.numText').val();
		// })
		var amount = parseInt($('.numText').val());
		$('.numDown').on('click',function(){
			$('.numUp').removeClass('numUpNo');
			amount--;
			$('.numText').val(amount);
			if(amount < 2){
				$(this).addClass('numdownNo');
				$('.numText').val('1');
				amount = 1;
			}
		});
		$('.numUp').on('click',function(){
			$('.numDown').removeClass('numdownNo');
			amount++;
			$('.numText').val(amount);
			if(amount > 20){
				$(this).addClass('numUpNo');
				$('.numText').val('20');
				amount = 20;
			}
		});

		// 左右切换
		// 左
		var 
			// _left = parseInt($('.imglist').position().left),
			_width = parseInt($('.imglist').children('li').outerWidth()),
			_len = $('.imglist').children('li').length,
			_clickCount = Math.floor(_len / 5),
			_margin = parseInt($('.imglist').children('li').css('marginRight')),
			_moveWidth = 5 * ( _width + _margin);
			
		
		var _left = parseInt($('.imglist').position().left);
		$('#js_imgleft').on('click',function(){
			if(_left <= 0){
				$('.imglist').animate({left:0}, 400);
			}else if(_left < 0){
				$('.imglist').stop(true,true).animate({left:_left + _moveWidth}, 400);
				if(_left > 0 ){
					$('.imglist').css('left',0);
				}
			}	
		});
		// 右
		$('#js_imgright').on('click',function(){
			if(_left ==0){
				$('.imglist').stop(true,true).animate({left:_left - _moveWidth}, 400);
			}
			if(_left !== 0){
				$('.imglist').stop(true,true).animate({left:_left + _moveWidth}, 400);
			}else{
				$('.imglist').css('left','0');
			}
		});

		//尺码选择
		$('#js_size1').children('li').on('click',function(){
			$(this).addClass('current').siblings('li').removeClass('current');
		});

		//点击加入购物车
		// $('.')
		
		$('.bred').on('click',function(){
			// 商品数据
			var size = $('.sizebox').children('#js_size1').children('.current').children('a').text();
			var product = {
				imgsrc: $('.colorbox').children('ul').children('.current').find('img').attr('src'),
				name: $('#proinfo').children('h1').text(),
				freight: $('.fare').children('.gray6').text().split('，')[0],
				COD: $('.fare').children('.gray6').text().split('，')[1],
				size: size =='' ? '40' : size, 
				color: $('.colorbox').children('ul').children('.current').children('a').attr('title'),
				price: $('.fprice').children('.current_price').text(),
				amount: parseInt($('.numText').val()),
			}
			$.cookie.json = true; 
			var products = $.cookie('products');
			//console.log(product);
			if(!products){
				products = [];
			}
			// 判断是否重复
			var index = findName(product.name,products);
			if(index === -1){
				products.push(product);
			}else{
				products[index].amount += parseInt($('.numText').val());
			}
			$.cookie("products", products, {expires:7, path:"/"});
			console.log(products);
			// window.location.assign("shopingcar.html");
		})

		// 找出数组中指定商品编号的元素位置
		function findName(name, products) {
			for (var i in products) {
				if (products[i].name === name)
					return i;
			}
			return -1;
		}


		$('.borg').on('click',function(){
			$('#selectbox').addClass('electhover');
			$('.selectip,.tipbutbox').show();
			$('#tj_buy,#tj_addcart,.payments').hide();
			$('.selectip').children('i').on('click',function(){
				$('#selectbox').removeClass('electhover');
				$('.selectip,.tipbutbox').hide();
				$('#tj_buy,#tj_addcart,.payments').show();
			})
			$('.tipbutbox').find('input').on('click',function(){
				$('#selectbox').removeClass('electhover');
				$('.selectip,.tipbutbox').hide();
				$('#tj_buy,#tj_addcart,.payments').show();
				$.cookie('');
			})
		})
		// 支付方式
		$('.payments').children('div').hover(function(){
			$(this).children('ul').show();
			$(this).addClass('active');
		},function(){
			$(this).removeClass('active');
			$(this).children('ul').hide();
		});
		// 分享
		$('.sharelink').hover(function(){
			$(this).children('p').show();
		},function(){
			$(this).children('p').hide();
		});
		// 二维码
		$('.tabbar').children('div').hover(function(){
			$(this).children('p').children('span').show();
			// $(this).children('p').css('background','#666');
		},function(){
			$(this).children('p').children('span').hide()
		});
		//
		$('.tabbar').children('ul').children('li').hover(function(){
			var index = $(this).index();
			$(this).addClass('current').siblings('li').removeClass('current');
			$('.tab_nav').eq(index).show().siblings('.tab_nav').hide();
		});
		// 侧边导航
		$('.subtabbar').children('ul').children('li').on('click',function(){
			var 
				index = $(this).index(),
				vtop = $('.header').offset().top + parseInt($('.pmain').css('marginTop'))+$('.location').offset().top+$('.proImg').offset().top
			console.log(vtop);
			$(this).addClass('current').siblings('li').removeClass('current');
			
			$(window).scrollTop(vtop+360);
			$('.tabbar').children('ul').children('li').eq(index).addClass('current').siblings('li').removeClass('current');
			$('.tab_nav').eq(index).show().siblings('.tab_nav').hide();
		})
	});
});