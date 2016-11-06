
$(function(){
	$(window).on('load',function(){
		// 分类导航
		$('.all_goods').hover(function(){
			$('.con_nav').show();
		},function(){
			$('.con_nav').hide();
		});
		// 商品分类拓展
		$('#jsoptionsmore').on('click',function(){
			$('.cate:gt(1)').show();
			$(this).toggleClass('packup');
		})
	});
});