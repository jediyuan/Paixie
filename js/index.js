// js document
//
///* 
 /*━━━━神兽护体,代码无bug━━━
 *                              
 * 　　　┏┓　　　┏┓                             
 * 　　┏┛┻━━━┛┻┓                                                
 * 　　┃　　　　　　　┃                             
 * 　　┃　　　━　　　┃                             
 * 　　┃　┳┛　┗┳　┃                             
 * 　　┃　　　　　　　┃                             
 * 　　┃　　　┻　　　┃                             
 * 　　┃　　　　　　　┃                             
 * 　　┗━┓　　　┏━┛                             
 * 　　　　┃　　　┃                                 
 * 　　　　┃　　　┃                             
 * 　　　　┃　　　┗━━━┓                             
 * 　　　　┃　　　　　　　┣┓                             
 * 　　　　┃　　　　　　　┏┛                             
 * 　　　　┗┓┓┏━┳┓┏┛                             
 * 　　　　　┃┫┫　┃┫┫                             
 * 　　　　　┗┻┛　┗┻┛                             
 *━━━━━━━━━━━━━━━━━
 *
 * 
            _.._        ,------------.
         ,'      `.    ( 偷代码 死全家 )
        /  __) __` \    `-,----------'
       (  (`-`(-')  ) _.-'
       /)  \  = /  (
      /'    |--' .  \
     (  ,---|  `-.)__`
      )(  `-.,--'   _`-.
     '/,'          (  草",
      (_       ,    `/,-' )
      `.__,  : `-'/  /`--'
        |     `--'  |
        `   `-._   /
         \        (
         /\ .      \.  fuck you 
        / |` \     ,-\
       /  \| .)   /   \
      ( ,'|\    ,'     :
      | \,`.`--"/      }
      `,'    \  |,'    /
     / "-._   `-/      |
     "-.   "-.,'|     ;
    /        _/["---'""]
   :        /  |"-     '
   '           |      /
               `      |
 */

$(function(){
	$(window).on('load',function(){

		// 滚动条事件、
		
		if($(window).scrollTop()){
			if($('.body_sport')){
				$(window).on('scroll',function(){
					var 
						winHeight = $(window).height(),
						scrollTop = $(this).scrollTop(),
						offF1Height  = $('.body_sport').offset().top,
						offF5Height  = $('.body_bag').offset().top;
					if(scrollTop >= winHeight){
						$('.scrollbgbox').show();
					}else{
						$('.scrollbgbox').hide();
					}
					if(scrollTop >= offF1Height - winHeight / 2){
						$('.side_left').show();
					}if(scrollTop > offF5Height || scrollTop < offF1Height - winHeight / 2){
						$('.side_left').hide();
					}
					$('.flr').each(function(index,element){
						var _top = $(this).offset().top;
						if(_top - winHeight / 2 < scrollTop){
							$('.side_left a').eq(index).children('i').show()
							.end().siblings().children('i').hide();
						}
					});
				}).trigger('scroll');
			}else{
				return false;
			}
		}
		// 楼层hover事件
		
		/*$('.side_left a').children('i').each(function(indexi,elementi){
			function(){if($(this).css('display') == 'inline'){
				return indexi;
			}};
		});*/

		// 楼层click事件
		$(".side_left a").click(function () {
			var index = $(this).index(),
			istop = $(".flr").eq(index).offset().top;
			$("html,body").animate({
				"scrollTop" : istop - 70
			}, 500);
		});
		
		$('.side_left a').children('i').each(function(index){
			if($(this).css('display') == 'inline'){

				$('.side_left a').hover(function(){
					$(this).children('i').show().end().siblings('a').children('i').hide();
					$(this).children('i').eq(index).show();
					
				},function(){
					$('.side_left a').children('i').eq(index).show().end().siblings('a')
									 .children("i").hide();
				})
			}
		});
		
		// 搜索框搜索事件
		/*$('.search_area').each(function(){
			$(this).on('blur',function(){
				$('.head_solist').empty();
			});
		});*/
		$('.search_area').each(function(){
			
			$(this).on('keyup',function(ev){
				var count = 0;
				if($(this).val() !== ''){
					$.getJSON('http://www.paixie.net/search/search?keyword='+ $(this).val() +'&jsoncallback=?',function(data){
						$('.head_solist').empty();
						$('.head_solist').hide();
						$('.head_solist').html('<ul class="searchul"><li class="searchtitle soml"><a href="#"></a></li><li class="line"></li></ul>');
						  if(data.top && (data.top.length !== 0)){
						  	$('.head_solist').show();
						  	$('.searchtitle').show().children('a').text(data.top.title);
							for(var attr in data.top.mainstyle){
								if($('.searchkey')){
									$('.searchkey').remove();
								}
								$('<li class="searchkey soml"><a href="javascript:;">在<b>' + data.top.mainstyle[attr] +'</b>分类中搜索</a></li>').insertAfter('.searchtitle');
							}
							$('.line').nextAll('li').remove();
						 	for(var i in data.suggester){
						 		$('<li class="soml"><a href="#">'+ data.suggester[i] +'</a></li>').appendTo('.searchul');
							 }
						 }

						// 下拉列表添加键盘事件 down 40 up 38 enter 13
						// 向下移动 
						var 
							$that = $('.searchul:visible'),
							$li = $that.children('li:not(.line)'),
							len = $li.length;

						// console.log($li);
						// console.log(ev.which);
						// console.log("开始"+count); 
						console.log(len);
						if(ev.which == 40){
							$li.eq(count).addClass('soli').siblings('li').removeClass('soli');           
							count++;
							if(count > len - 1){
								count = 0;
							}
						}
						console.log("结束"+count); 
						if(ev.which == 38){
							if(count == 0)
								count == len - 1;
							count -- ;
							$li.eq(count-1).addClass('soli').siblings('li').removeClass('soli');
						}

						// if(ev.which == 13){

						// }
					});
				}else{
					$('.head_solist').empty();
					$('.head_solist').hide();	
				}
			});
		});
		// 封装列表移动事件
		function liSelect($li,count,len,btn){
			count++;
			$li.eq(count).addClass('soli').siblings('li').removeClass('soli');
			if(btn){
				
			}
			count--;
			if(count < 0)
				count = len-1;

		}
		$('.search_area').blur(function(){
			$('.head_solist').hide();
		});

		// 吸顶导航
		$('.ontover').hover(function(){
			var $newL = $('.con_nav').clone(true,true);
			$('.newL').css('display','block');
			$('.newL').append($newL);
		},function(){
			$('.newL').children().detach();
			$('.newL').css('display','none');
		});
		// 下拉菜单 事件
		$(".cart,.mypaixie,.top_nav").hover(function(){
			$(this).children().eq(1).css('display','block');
		},function(){
			$(this).children().eq(1).css('display','none');
		});
		// 箭头变换 事件
		$('.mypaixie,.top_nav').hover(function(){
			$(this).find('i').eq(0).css('background-position','-142px -493px');
		},function(){
			$(this).find('i').eq(0).css('background-position','-142px -500px');
		});
		// 商品分类菜单 show事件
		$('.nav_list li').each(function(){
			$(this).hover(function(){
				// li 移动
				$(this).children('.goods_title,.goods_sort').stop(true).animate({marginLeft:40},400);
				// 变换 li 下 h3 字体颜色
				$(this).children('.goods_title').children('h3').css('color','#ff5000');
				// 打开分类导航
				$(this).children('.nav_box').removeClass('hide');
				// 给关闭按钮加单击事件 使具有关闭导航功能
				$(this).find('.close').on('click',function(){
					$(this).parents('.nav_box').addClass('hide');
				});
			},function(){
				// 关闭分类导航
				$(this).children('.nav_box').addClass('hide');
				// 复原 li 下 h3 字体颜色
				$(this).children('.goods_title').children('h3').css('color','#38363b');
				// li 复原
				$(this).children('.goods_title,.goods_sort').stop(true).animate({marginLeft:20},400);
			});
		});

		// 品牌活动下 图片的 hover事件
		var 
			oBanCon = $('.band_con').children('a').children('img'),
			oBanEx  = $('.band_ex').children('a').children('img');
		leftMove(oBanCon);
		leftMove(oBanEx);
		// 封装图片移动 函数
		function leftMove(obj){
			obj.each(function(){
				$(this).hover(function(){
					$(this).stop(true).animate({left:-10}, 300);
				},function(){
					$(this).stop(true).animate({left: 0}, 300);
				});
			});
		}
		// 爱团购商品列表切换 
		$('.turn_twoli').children('span').each(function(){
			var 
				spanIndex = $(this).index(),
				ISpanLength = $(this).width();
			$(this).hover(function(){
				$(this).addClass('on').siblings().removeClass('on');
				$(this).parents('.tuan_title').siblings('.alllist')
					.children('ul').eq(spanIndex).removeClass('hide')
					.siblings('ul').addClass('hide');
				$(this).siblings('.linebox').stop(true).animate({left:spanIndex * ISpanLength}, 300);
			});
		});

		// 主页分类商品列表切换
		$('.li_choose a').each(function(){
			var 
				liChooseIndex = $(this).index(),
				IbLeft  = $(this).siblings('.bottom_line').position().left,
				oAllUl = $(this).parents('.body_title').siblings('.good_sort')
						.find('.sort_hot_list').find('ul').eq(liChooseIndex),
			 	IaLength = $(this).innerWidth(),
			 	IaMargin = parseInt($(this).css('marginRight'));

			$(this).hover(function(){
				// tab 变色
				$(this).addClass('on').siblings().removeClass('on');
				// 切换 ul
				oAllUl.addClass('show').siblings('ul').removeClass('show');
				// tab 指示条切换
				$(this).siblings('.bottom_line').stop(true).animate({left:liChooseIndex * (IaLength + IaMargin) + IbLeft},300);
			});
		});

		// 轮播图
		var 
			oBanList = $('.ban_list'),
			oBanner  = $('.banner'),
			oPrev    =  $('.prev'),
			oNext    =  $('.next'),
			aList    = oBanList.find('li'),
			aListLen = aList.length,
			iListWidth = aList.eq(0).width(),
			oCircle  = oBanList.next('p').children('a'),
			liIndex = 1;

		oBanList.width(aListLen * iListWidth);
		oBanner.hover(function(){
			$('.prev').stop(true).animate({left:10}, "linear");
			$('.next').stop(true).animate({right:10}, "linear");
			clearInterval(liTimer);
		},function(){
			$('.prev').stop(true).animate({left:-50}, "linear");
			$('.next').stop(true).animate({right:-50}, "linear");
			liTimer = setInterval(liMove,3000);
		}).trigger('mouseleave');
		
		// 上一页
		oPrev.on('click',function(){
			liIndex-=2;
			if(liIndex < 0){
				liIndex = aListLen + liIndex;
			}
			liMove();
		});
		// 下一页
		oNext.on('click',liMove);

		function liMove(){
			var _left = - liIndex * iListWidth;
			liIndex++;
			// 切换小圆点样式
			oCircle.eq(liIndex-1).addClass('active').siblings().removeClass('active');
			if(liIndex >= aListLen)
				liIndex = 0;
			oBanList.stop(true).animate({left: _left},1000);
		}

		// 商品活动倒计时功能
		/*
		time = 'yy/mm/dd hh:mm:ss'//活动截止日期
		obj ：需要倒计时区域
		*/	
  		var 
  			oBtime = $('.count').find('b'),
  			oEm    = $('count').find('em'),
  			oSpanWidth  = $('.count').find('span').width(),
  			iEmWidth = oSpanWidth * 0.7;
		oBtime.text('');

  		(function autoCount(){
  			countDown('2016-9-12 14:03:59',oBtime,true);
  			var timer = setTimeout(autoCount,1000);
  		})();
  		// 倒计时
  		function countDown(time,obj,btn){
			var 
				curDate = new Date(),
				curTime = curDate.getTime(); //

			var furDate = new Date(time);

			var furTime = furDate.getTime();
			ddlTime =  furTime-curTime;
			var	rate = 70 / 864000;
			
		    if(btn){
		    	var 
			   	    ddlDay = addZero(parseInt(ddlTime / (1000 * 60 * 60 * 24))),
		    		ddlHour = addZero(parseInt((ddlTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
		    		ddlMin = addZero(parseInt((ddlTime % (1000 * 60 * 60)) / (1000 * 60))),
		    		ddlSec = addZero(parseInt((ddlTime % (1000 * 60)) / 1000));
	    		obj.text(ddlDay+"天"+ddlHour+":"+ddlMin+":"+ddlSec);
	    		if(ddlTime < 864000){
	    			oEm.animate({"width":ddlTime*rate+"%"},"linear");
	    		}if(ddlTime < 0){
	    			obj.text("早点不买，活动结束了");
	    			clearTimeout(timer);
	    		}
		    }
		    if(!btn){
				return timeRate;
			}
  		}
  		// 日期小于10 前面加 “0”
  		function addZero(num){
			if(Math.abs(num) < 10){
				return num < 0 && Math.abs(num) < 10 ? "-0"+ Math.abs(num) : "0"+ num ;
			}else{
				return num;
			}
		}
		// side_recor 滑动
		$('.side_recor').find('a').each(function(){
			var index = $(this).index();
			$(this).hover(function(){
				$(this).addClass('on').siblings('a').removeClass('on');
				$('.side_recor_img').find('ul').eq(index).css('display','block')
									.siblings('ul').css('display','none');
			});
		});

		// side_recor_img 图片滑动
		// 图片布局
		$('.side_recor_img').find('ul').find('li:eq(0)').css('top',0);
		$('.side_recor_img').find('ul').find('li:eq(1)').css('top',110);
		$('.side_recor_img').find('ul').find('li:eq(2)').css('top',165);

		
		$('.side_recor_img').find('ul').find('li').each(function(){
			var index = $(this).index();
			$(this).hover(function(){
				if(index == 0){
					$(this).siblings('li').eq(0).animate({top:110}, 400);
					$(this).siblings('li').eq(1).animate({top:165}, 400);
				}else if(index == 1){
					$(this).stop(true).animate({top:55}, "linear");
					$(this).siblings('li').eq(0).stop(true).animate({top:0}, 400);
					$(this).siblings('li').eq(1).stop(true).animate({top:165}, 400);
				}else if(index == 2){
					$(this).stop(true).animate({top:110}, "linear");
					$(this).siblings('li').eq(0).stop(true).animate({top:0}, 400);
					$(this).siblings('li').eq(1).stop(true).animate({top:55}, 400);
				}
			});
		});

		// 热卖 显示更多
		$('.txt_open').each(function(){
			$(this).bind('click',function(){
			//	console.log($(this).parent().height());
				if($(this).parent().height() == 98){
					$(this).parent().animate({height:198}, 400);
					$(this).children().css('backgroundPosition','-309px -339px');
				}else{
					$(this).parent().animate({height:98}, 400);
					$(this).children().css('backgroundPosition','-287px -339px');
				}

			});
		});

		// 底部图片切换
		var 
			oPicMove = $('.pic_move'),
			oPicLi  = oPicMove.children('li');
			
		$('.pic_choose').find('a').each(function(){
			var index = $(this).index();
			
			$(this).hover(function(){
				$(this).addClass('on').siblings('a').removeClass('on');
				oPicMove.width(oPicLi.length * oPicLi.width());
				oPicMove.stop(true).animate({left:- index * oPicLi.width()},300);
			});
		});

		// 当季图片效果
		$('.list_img').hover(function(){
			$(this).find('i').stop(true).animate({top:-30},250);
			$(this).find('img').stop(true).animate({top:-15},250);
		},function(){
			$(this).find('i').stop(true).animate({top:8},250);
			$(this).find('img').stop(true).animate({top:-0},250);
		});

		// 侧边导航
		$('.cart_guide').hover(function(){
			$('.cart_box').stop(true).animate({width:262,left:-262}, 400);

			$(this).css('backgroundPosition','-38px -1006px');
		},function(){
			$('.cart_box').stop(true).animate({left:1,width:0}, 400);
			$(this).css('backgroundPosition','0 -756px');
		});

		$('.all_txt_r').children('a').each(function(){
			$(this).hover(function(){
				$(this).siblings('.all_r_box').stop(true).animate({left:-77}, 400);
			},function(){
				$(this).siblings('.all_r_box').stop(true).animate({left: 34}, 400);
			});
		});

		// 二维码
		$('.side_qr').hover(function(){

			$('.side_qr_con').stop(true).animate({left: -149}, 400);
		},function(){
			$('.side_qr_con').stop(true).animate({left: 34}, 400);
		})
		
		// toTop
		$('.side_totop').hover(function(){
			$('.totop').stop(true).animate({left: -77}, 400);
		},function(){
			$('.totop').stop(true).animate({left: 34}, 400);
		}).on('click',function(){
			$('html,body').stop(true).animate({scrollTop:0});
		});

		// 账户与密码缓存
		$.cookie.json = true;
		var userInfo = $.cookie('userInfo');
		
		if(userInfo){
			var arry = userInfo.split(" + ");
			var 
				_userN = arry[0],
				_psasW = arry[1];
			$('.user_input').val(_userN);
			$('.psw_input').val(_psasW);
			$('.auto_login').find('input').attr("checked",true);
			$('.base_text').find('span').css('display','none');
		}else{
			$('.auto_login').find('input').attr("checked",false);
			$('.base_text').find('span').css('display','block');
			$('.psw_input,.user_input').val('');
		}

		// 登录框失焦 获得焦点事件
		$('.psw_input,.user_input').each(function(){
			$(this).focus(function(){
				$(this).parent().addClass('focus');
				if($('.user_input').is(':focus')){
					$(this).siblings('i').css('backgroundPosition','-39px 0')
				}else{
					$(this).siblings('i').css('backgroundPosition','-39px -40px');
				}
				$(this).siblings('span').css('display','none');

			});
			$(this).blur(function(){
				$(this).parent('div').removeClass('focus');
				
				$(".user").children('i').css('backgroundPosition','0 0');
				$(".psw").children('i').css('backgroundPosition','0 -40px');
				if($(this).val() !== ''){
					$(this).parent().next().children('div').text('');
					$(this).parent().removeClass('warn');
				}
				if($(this).val() !== ''){
					$(this).siblings('span').css('display','none');
				}else{
					$(this).siblings('span').css('display','block');

				}
			});
		});
		// 清除事件
		$('.base_close').on('click',function(ev){
			ev.stopPropagation();
			if($(this).prev().val() !== ''){
				$(this).prev().val('');
			}
			$(this).prev().focus();
		});

		$('html,body').on('click',function(ev){
			ev.stopPropagation();
			$('.login_text,.reg_text').each(function(){
				if($(this).is(':focus')){
					$(this).next().css('display','block');
				}else{
					$(this).next().css('display','none');
				}
			});
		});
		// 登录检测
		$('.login_btn').bind('click',function(){
			var 
				userName = $('.user_input').val(),
				passWord = $('.psw_input').val(),
				autoLogin = $('.auto_login').find('input');
			if((/\S+/g).exec(userName) == null){
				$('.user_info').children('div').text('请输入手机号/邮箱');
				$('.user').addClass('warn');
			}else{
				$('.user_info').children('div').text('');
				$('.user').removeClass('warn');
			}
			if(passWord == ''){
				$('.psw_info').children('div').text('请输入密码');
				$('.psw').addClass('warn');
			}else{
				$('.psw_info').children('div').text('');
				$('.psw').removeClass('warn');
			}
			if(userName !== '' && passWord !== ''){
				$.ajax({
					url : "http://localhost/Paixie/mock/login.json",
					type : "get",
					dataType : "json",
					success : function(data){
						var 
							_data = data.people,
							len = _data.length;
						//console.log(_data[0].name);
						for(var i = 0;i<len;i++){
							if(userName == _data[i].name && passWord == _data[i].password){
								if(autoLogin.is(':checked') == true){
									$.cookie.json = true;
									$.cookie('userInfo',userName +' + '+ passWord,{expires:7, path:"/"});
									alert('登录成功(cokie)');
								}else{
									$.cookie('userInfo','',{expires: -1,path: "/"});
									$('.login_text').val('');
									$('.base_text').find('span').show();
									alert('登录成功');
								}
							}
						}
					}
				});
			}
		});

		// 二维码登陆切换
		$('#way').bind('click',function(){
			if($('#form').css('display') == 'block'){
				$('#form').css('display','none');
				$('#wxbox').css('display','block');
			}else{
				$('#form').css('display','block');
				$(".base_text").removeClass('warn').find('span').css('display','block');
				$('.v_txt').text('');
				$('.login_text').val('');
				$('.auto_login').find('input').attr("checked",false);
				$('#wxbox').css('display','none');
			}
			$("#way").toggleClass('erweima');
		});

		// 默认同意条款 清空输入框

		$('.reg_text').val('');
		$('.agreement').find('input').attr("checked",true);
		// 注册界面 焦点状态
		$('.reg_text').each(function(){
			$(this).focus(function(){
				// 关闭输入框默认文字
				$(this).siblings('span').css('display','none');

				// biaokuang
				$(this).parent('div').removeClass('inputerror').addClass('focus');

				
				// 开启输入提示
				$(this).parent('div').siblings('span')
					   .children('div').css("display",'block').removeClass('error flag').addClass('notice');
				if($('.reg_user').is(':focus')){
					$('.v_text').eq(0).text('请输入邮箱/手机号');
				}
				if($('.reg_psw').is(':focus')){
					$('.v_text').eq(1).text('6-20位字符，可使用字母、数字或符号的组合');
				}
				if($('.reg_pswSec').is(':focus')){
					$('.v_text').eq(2).text('请再次输入密码');
				}
				if($('.code_input').is(':focus')){
					$('.v_text').eq(3).removeClass('notice').css('display','none')
				}
			});
			$(this).blur(function(){
				// 开启输入框默认文字
				if($(this).val() == ''){
					$(this).siblings('span').css('display','block');
				}
				$(this).parent('div').removeClass('focus');
				// 关闭输入提示
				$(this).parent('div').siblings('span ')
					   .children('div').css("display",'none').removeClass('notice');
			});
		});

		// 用户名设置
		$('.reg_user').blur(function(){
			var 
				verfyEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
				verfyTel  = /^1[3|4|5|7|8]\d{9}$/,
				verfyLength = /^[0-9a-zA-Z_\-\u4e00-\u9fa5]+$/;
			if($('.reg_user').val() !== ''){
				if ($('.reg_user').val() .length < 4 || $('.reg_user').val() .split('@')[0].length > 20){
					$(this).parent('div').next()
							.children('div').css('display','block').addClass('error').text('用户名长度只能在4-20位字符之间')
							.end().prev().addClass('inputerror');
				}else if(!verfyEmail.test($(this).val()) && !verfyTel.test($(this).val())){
					$(this).parent('div').next()
							.children('div').css('display','block').addClass('error').text('手机号/邮箱格式错误')
							.end().prev().addClass('inputerror');
					// 验证码框隐藏
					$('.codearea').css('display','none');
				}else if(verfyEmail.test($(this).val()) || verfyTel.test($(this).val())){
					$(this).parent('div').removeClass('focus').siblings('span')
					.children('div').html('<i class="v_ok"></i>').css('display',"block");
					// 验证码框显示
					$('.codearea').css('display','block');
				}		
			}
		});

		// 更改密码强度指示
		$('.reg_psw').bind('focus blur keyup keydown',function(){
			if($(this).val() == ''){
				$('.password_strength').children().eq(1).removeClass('now');
				$('.password_strength').children().eq(2).removeClass('now');
				$('.password_strength').css('display','none');
			}
		});

		/*// 两次密码比较
		function passCompire(){
			var 
				firstPass = $('.reg_psw').val(),
				secondPass = $('.reg_pswSec').val();
			if()
		}*/
		// 密码设置
		$('.reg_psw').blur(function(){
			var 
				pswLen = /^.{6,20}$/,
				pswComple = /^((\d+)|([a-zA-Z]+)){1}/,
				scorePassNum = checkStrong($(this).val()); 
			
			if($('.reg_psw').val() !==''){
				if($(this).val() !== $('.reg_pswSec').val()){
					if($('.reg_pswSec').val() !== ''){
						$('.reg_pswSec').parent('div').addClass('inputerror').siblings('span').children('div')
									.addClass('error').html('').text('密码已更改，请重新输入');
					}	
				}else{
					$('.reg_pswSec').parent('div').removeClass('inputerror').siblings('span').children('div')
									.removeClass('error').text('').append('<i class="v_ok"></i>');
				}
				if(!pswLen.test($(this).val())){
					$(this).parent('div').next()
						.children('div').css('display','block').addClass('error').text('密码长度只能在6-20位字符之间')
						.end().prev().addClass('inputerror');
				}else if($(this).val().length >= 6 && scorePassNum < 2){
					$(this).parent('div').next()
						.children('div').css('display','block').addClass('flag error').text('密码太简单,请您更改密码,如字母+数字的组合')
						.end().prev().addClass('inputerror');
				}else{
					$(this).parent('div').removeClass('focus').siblings('span')
					.children('div').html('<i class="v_ok"></i>').css('display',"block");
				}
			}else{
				 $('.reg_pswSec').val('').parent('div').removeClass('inputerror').siblings('span').children('div')
				 			     .removeClass('error').html('');
			}
		});
	
		// 密码强度设置
		$('.reg_psw').on('keyup',function(ev){
			var 
				pswStrong = /^((\d+)|([a-zA-Z]+)){1}/,
				passCheckString = checkPassStrength($('.reg_psw').val()),
				passMid = $('.password_strength').children('span').eq(1),
				passStr = $('.password_strength').children('span').eq(2);
			if(pswStrong.test($(this).val())){
				//  复杂度判断
				if($(this).val().length >= 6){
					//console.log(passCheckString);
					$('.password_strength').show();
					if(passCheckString == 'weak'){
						passMid.removeClass('now');
						passStr.removeClass('now');
					}
					if(passCheckString == 'good'){
						passMid.addClass('now');
						passStr.removeClass('now');
					}
					if(passCheckString == 'strong'){
						passStr.addClass('now');
					}
				}else{
					$('.password_strength').hide();
				}
			}
		});

		// 确认密码
		$('.reg_pswSec').blur(function(){
			if($(this).val() !== ''){
				if($(this).val() !== $('.reg_psw').val()){
					$(this).parent('div').next()
						.children('div').css('display','block').addClass('error').text('再次输入的密码不一致')
						.end().prev().addClass('inputerror');
				}else{
					$(this).parent('div').removeClass('focus').siblings('span')
					.children('div').html('<i class="v_ok"></i>').css('display',"block");
				}
			}
		});

		// 注册事件
		$('.blue_button').on('click',function(){
			var 
				userFlag = $('.v_text').eq(0).children('i').attr('class'),
				passFlag1 = $('.v_text').eq(1).children('i').attr('class'),
				passFlag2 = $('.v_text').eq(1).attr('class').match(/flag/g),
				passFlagMore = $('.v_text').eq(2).children('i').attr('class');
			if($('.agreement').find('input').is(':checked') == false){
				alert('请先同意《拍鞋网服务协议》');
				return ;
			}if($('.reg_psw').val() !== $('.reg_pswSec').val()){
				alert('两次输入密码不一致');
			}
			else if((userFlag && passFlag1 && passFlagMore) || (userFlag && passFlag2 && passFlagMore)){
				alert('注册成功');
			}else{
				alert('请根据提示填写信息');
				return;
			}
		});
		// 手机验证码事件



	});
});

