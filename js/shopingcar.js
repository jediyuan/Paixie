$(function(){
	$(window).on('load',function(){
		$.cookie.json = true;
		var products = $.cookie('products');

		if(products){
			$('.area_no_shoe').hide();
			$('.hasgoods').show();
			$.each(products,function(index,element){
				var 
					$template = $('#good_1').clone(true),
					subtotal =  parseFloat(element.amount * element.price).toFixed(2);
				$template.appendTo('.area_goods').data('product',element);

				$template.children('td').eq(1).find('img').attr('src',element.imgsrc);
				$template.children('td').eq(2).children('.gray2').text(element.name);
				$template.children('td').eq(2).children('.borbox').text(element.COD);
				$template.children('td').eq(2).children('.modify_colorsize').children('span').html('尺码'+ element.size +'码&nbsp;&nbsp;<br>颜色：'+ element.color);
				$template.children('td').eq(3).children('span').text(element.price);
				$template.children('td').eq(4).children('input').val(element.amount);
				$template.children('td').eq(5).children('strong').text(subtotal);
			});
			$('.area_goods').find('tr').eq(0).remove();
			// 商品个数
			var trlen = $('.area_goods').find('tr').length;
			$('.area_go_pay').find('.cart_size').text(trlen);
			// 计算合计
			calcTotal();
			// 商品加减
			
			$('.minus_num').on('click',function(){ // 减
				var amount = parseInt($(this).next().val());
				if(amount <= 1)
					return;
				amount--;
				$(this).next().val(amount);
				// 获取单价
				var price = parseFloat($(this).parent('td').prev().children('span').text());
				// 计算小计
				$(this).parent('td').next().children('strong').text(amount * price);
				// 计算合计
				calcTotal();
				// 保存修改后的商品信息
				$(this).parents('tr').data('product').amount = amount;
				// 存入cookie
				$.cookie('products',products,{expires:7,path:'/'});
				if(amount <= 1){
					$(this).next().val('1');
					amount = 1;
				}
			});
			$('.add_num').on('click',function(){ // 加
				var amount = parseInt($(this).prev().val());
				amount++;
				$(this).prev().val(amount);
				// 获取单价
				var price = parseFloat($(this).parent('td').prev().children('span').text());
				// 计算小计
				$(this).parent('td').next().children('strong').text(amount * price);
				// 计算合计
				calcTotal();
				// 保存修改后的商品信息
				$(this).parents('tr').data('product').amount = amount;
				// 存入cookie
				$.cookie('products',products,{expires:7,path:'/'});
				if(amount > 20){
					$(this).next().val('20');
					amount = 20;
				}
			});
			// 所有商品前面的单选框
			var $td = $('.xbgs').children('.first').children('input');
			// 
			// 删除购物车中的商品
			$('.del').on('click',function(){
				var $row = $(this).parents('tr');
				delateRow($row);
				$('.area_go_pay').find('.cart_size').text($('.area_goods').find('tr').length);
			});
			// // "全选" 功能 
			$(".js_select_all").on('click',function(){
				$(".js_select_all").toggleClass('on');
				$(".xbgs").children('.first').children('input').toggleClass('on');
				$('.area_go_pay').find('.cart_size').text(getLen($td));
				calcTotal();
			});

		    // //单选
		    $td.on('click',function(){
		    	$('.js_select_all').removeClass('on');
		    	$(this).toggleClass('on');
		    	calcTotal();
		    	$('.area_go_pay').find('.cart_size').text(getLen($td));
		    	if(getLen($td) == trlen){
		    		$('.js_select_all').addClass('on');
		    	}
		    });
		    // 删除选中
		    $('#js_del').on('click',function(){
		    	var str = currSel($td);
		    	if(str){
		    		for(var i = 0,len = str.length;i<len;i++){
		    			$row = $td.eq(str[i]).parents('tr');
		    			delateRow($row);
		    		}
		    	}
		    	var $newTd = $('.xbgs').children('.first').children('input');
		    	$('.area_go_pay').find('.cart_size').text(getLen($newTd));
		    });
		   
		    
		    console.log($td.length)

		}else{
			$('.area_no_shoe').show();
			$('.hasgoods').hide();
		}

		// 计算合计金额
		function calcTotal() {
			var total = 0;
			$(".area_goods").find('tr').children('td').find('.js_total').each(function(index, element){
				var $tr = $(this).parent().siblings('.first').children('input');
				var on = isClassName('on',$tr);
				if(on === 1){
					total += parseFloat($(this).text());
				}
			});
			// 显示合计金额
			$(".area_go_pay").find('strong').text('￥'+ parseFloat(total.toFixed(2)));
		}
		// 金额数字保留两位小数
		
		// 从cookie和页面中删除指定行中的数据
		function delateRow($row){
			// 获取到缓存在行上的商品数据
			var product = $row.data("product");
			// 找出当前删除的商品在数组中是第几个元素
			var index = $.inArray(product, products);
			// 从数组中删除该索引处的元素
			products.splice(index, 1);
			// 将删除元素后的数组保存回 cookie 中
			$.cookie("products", products, {expires:7, path:"/"});
			// 从页面删除行
			$row.remove();
			// 如果购物车为
			if (products.length === 0){
				$('.area_no_shoe').show();
				$('.hasgoods').hide();
				$.cookie('products','',{expires:-1,path:'/'});
			}
			// 重新计算合计
			calcTotal();
		}
		// 多种类名 获取特定类名
		function isClassName(classname,$t){
			 var classs = $t.attr('class');
			 var isclass = classs.split(' ');
			 for(var i = 0,len = isclass.length;i < len ;i++){
			 	if(isclass[i] === classname){
			 		return 1;
			 	}else{
			 		return false;
			 	}
			 }
		}
		// 计算勾选商品数量
		function getLen($d){
			var n = 0;
			for(var i = 0 ,len = $d.length ; i < len;i++){
				var p = isClassName('on',$d.eq(i));
				if(p === 1){
					n++;
				}
			}
			//if(btn)
				//return i;
			return n;
		}
		// 计算当前选中的商品
		function currSel($t){
			var str = [];
			for(var q = 0,len = $t.length;q<len ;q++){
				if(isClassName('on',$t.eq(q)))
					str.push(q);
			}
			return str;
		}
	
	});
});