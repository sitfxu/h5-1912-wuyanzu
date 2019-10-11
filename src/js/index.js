//侧栏滑入
$(".button-collapse").sideNav();
$("nav ul li .collapsible-header").click(function(){
	$(this).parent().addClass('active').siblings().removeClass('active')
})
//$("nav").on('mouseleave',function(){
//	$("nav ul li").removeClass('active')
//	$(".dropdown-content").hide()
//})
//登录

//banner
if ($(window).width()<800 & $(window).width() >440) {
	$(".carousel.carousel-slider .carousel-item .carousel-item-intro-txt").find('.txt').addClass('left');
	$(".carousel.carousel-slider .carousel-item-intro-txt").find('.txt-btn').addClass('right');
	$('.content4 .card .card-image').css('height','206px');
	$('.content4 .card').css('height','430px');
} else if($(window).width()>800){
	$(".carousel.carousel-slider .carousel-item-intro-txt").find('.txt').removeClass('left');
	$(".carousel.carousel-slider .carousel-item-intro-txt").find('.txt-btn').removeClass('right');
	$('.content4 .card').css('height','560px');
}else{
	$('.content1 .card').css('height','200px');
	$('.content4 .card').css('height','auto');
	$('.content4 #dropdown2-3 .card').css('height','450px');
}
$('.carousel.carousel-slider').carousel({
	full_width: true,
	indicators:true,
});
$('.carousel.carousel-slider .banner-arrows .left').on('click',function(){
	$('.carousel').carousel('prev');
})
$('.carousel.carousel-slider .banner-arrows .right').on('click',function(){
	$('.carousel').carousel('next');
})
$('.carousel.carousel-slider .carousel-fixed-item .btn').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
})
//footer
//footer collapsible
$('.collapsible').collapsible();
if ($(window).width()<800) {
	$("footer .footer-b ul").addClass('collapsible');
	$("footer .footer-b ul p").addClass('collapsible-header');
	$("footer .footer-b ul div").addClass('collapsible-body');
} else{
	$("footer .footer-b ul").removeClass('collapsible');
	$("footer .footer-b ul p").removeClass('collapsible-header');
	$("footer .footer-b ul div").removeClass('collapsible-body');
}
$("footer .footer-b ul li .collapsible-header").on('click',function(){
	$("footer .footer-b ul li .collapsible-header").find('span').css({
			'display':'block',
			'transform':'rotate(0)'
	})
	$(this).find('span').css({
		'display':'block',
		'transform':'rotate(90deg)'
	})
})

$('#modal1').modal('');
			;(function () {
				"use strict";
				$.fn.toTop = function (t) {
					var i = this,
						e = $(window),
						s = $('html, body'),
						n = $.extend({
							autohide: !0,   // 是否自动隐藏
							offset  : 420,  // 距离顶部多少的时候显示 回到顶部按钮
							speed   : 500,  // 动画速度
							position: !0,   // 是否定位
							right   : 15,   // 右边距离
							bottom  : 30    // 下边距离
						}, t);
					
					// 设置手型点击
					i.css({
						'cursor': 'pointer'
					});
					// 自动隐藏
					n.autohide && i.css({ 'display': 'none' });
					// 定位位置
					n.position && i.css({
						'position': 'fixed',
						'right'   : n.right,
						'bottom'  : n.bottom
					});
					// 回到顶部
					i.click(function () {
						s.stop().animate({
							scrollTop: 0
						}, n.speed);
					});
					// 回到顶部按钮是否隐藏显示
					e.scroll(function () {
						var o = e.scrollTop();
						// 若自动隐藏为 true, window 的滚动条高度 > 420 则显示, 否则隐藏
						n.autohide && ( o > n.offset ? i.fadeIn(n.speed) : i.fadeOut(n.speed) );
					});
                    return this;
				}
			})(jQuery);
			$(function () {
				$('#go_top').toTop();
			});

			var swiper = new Swiper('.swiper-container', {
				spaceBetween: 30,
			  centeredSlides: true,
			   autoplay: {
				// reverseDirection: true,
			   delay: 1500,
			   disableOnInteraction: false,
				},
			 pagination: {
			   el: '.swiper-pagination',
			   clickable: true,
			 },
			 navigation: {
			   nextEl: '.swiper-button-next',
			   prevEl: '.swiper-button-prev',
			 },
			 effect : 'fade',
		 fadeEffect: {
		   crossFade: true,
			 }
			 });	