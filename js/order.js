// 
$(function(){
	$(window).on('load',function(){
		// 地区选择
		$('.select').eq(0).children('i').on('click',function(){
			$.ajax({
				url:'http://localhost/Paixie/mock/address.json',
				type:"get",
				dataType: 'json',
				success: function(data){
					// console.log(data[0].city[0].area.length);
					// console.log(data[5].city.length);
					var 
						Province = '',
						city = '',
						area = '';
					for(var w = 0 ,plen = data.length;w < plen;w++){
						Province += "<li>" + data[w].name + "</li>";
					}
					$('.select').eq(0).children('ul').html(Province);
					$('.select').eq(0).children('ul').children('li').each(function(){
						$(this).on('click',function(){
							var indexA = $(this).index();
							$(this).addClass('selected').siblings('li').removeClass('selected')
								   .parent('ul').siblings('span').text($(this).text()).end().html('');
							var 
								defultarea = data[indexA].city[0].area[0],
								citylen    = data[indexA].city.length,
								islen1 = data[indexA].city[0].area.length
								defultcity = data[indexA].city[0].name,
								defultThirdArea = data[indexA].city[0].area[0];
							if(citylen ==1){
								$('.line').eq(0).find('strong').eq(1) .hide();
								$('.line').eq(0).find('.select').eq(2) .hide();
								var area = '';
								for(var x = 0,arealen = data[indexA].city[0].area.length;x < arealen;x++){
									area += "<li>" + data[indexA].city[0].area[x] + "</li>";
								}
								console.log();
								$('.line').eq(0).find('strong').eq(0) .show();
								$('.line').eq(0).find('.select').eq(1) .show();
								$('.select').eq(1).children('span').text(defultarea);
								$('.select').eq(1).find('i').on('click',function(){
									$(this).next().html(area);
									$('.select').eq(1).children('ul').children('li').each(function(){
										$(this).on('click',function(){
											if(islen1 == 1){
												$(this).parent('ul').html('');
											}else{
												$(this).addClass('selected').siblings('li').removeClass("selected")
														.parent('ul').siblings('span').text($(this).text()).end().html('');
											}
											
										});
									});
								});
							}else{
								var city = '';
								for(var q = 0; q < citylen ; q++){
									city += "<li>" + data[indexA].city[q].name + "</li>";
								}
								$('.line').eq(0).find('strong').eq(0) .show();
								$('.line').eq(0).find('.select').eq(1) .show();
								$('.select').eq(1).children('span').text(defultcity);
								$('.line').eq(0).find('strong').eq(1) .show();
								$('.line').eq(0).find('.select').eq(2) .show();
								$('.select').eq(2).children('span').text(defultThirdArea);
								$('.select').eq(1).find('i').on('click',function(){
									$(this).next().html(city);
									$('.select').eq(1).children('ul').children('li').each(function(){
										$(this).on('click',function(){
											var indexC = $(this).index();
											$(this).addClass('selected').siblings('li').removeClass("selected")
													.parent('ul').siblings('span').text($(this).text()).end().html('');
											var 
												thridDegultArea = data[indexA].city[indexC].area[0],
												isLen1 = data[indexA].city[indexC].area.length,
												thirdAreaLen    =  data[indexA].city[indexC].area.length,
												thirdArea = '';
											for(var a = 0 ; a < thirdAreaLen ; a++){
												thirdArea += "<li>" + data[indexA].city[indexC].area[a] + "</li>";
											}
											$('.line').eq(0).find('strong').eq(1) .show();
											$('.line').eq(0).find('.select').eq(2) .show();
											$('.select').eq(2).children('span').text(thridDegultArea);
											$('.select').eq(2).find('i').on('click',function(){
												$(this).next().html(thirdArea);
												$('.select').eq(2).children('ul').children('li').each(function(){
													$(this).on('click',function(){
														if(isLen1 == 1){
															$(this).parent('ul').html('');
														}else{
															$(this).addClass('selected').siblings('li').removeClass("selected")
																.parent('ul').siblings('span').text($(this).text()).end().html('');	
														}
													})
												})
											});
										});
									});
								});
							}
						});
					})
				}
			});
		});
	
		
	});
});