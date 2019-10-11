$('#help').modal('');
$('#textarea1').val('');
  $('#textarea1').trigger('autoresize');
$(document).on('scroll',function(){
    if ($(document).scrollTop() >= 50) {
        $("#nav2").addClass('active')
        $(".content").css('padding-top','120px')
    } else{
        $("#nav2").removeClass('active')
        $(".content").css('padding-top','0px')
    }
    if ($(document).scrollTop() >= 1090) {
        $("#Nav2").addClass('active')
    } else{
        $("#Nav2").removeClass('active')
    }
})
//banner1
$('.carousel.carousel-slider').carousel({
    indicators:false
});
$(".carousel.carousel-slider ul").on('click',function(){
          var _index = $(this).index();
          $("#tab-content .tab-content-n").eq(_index).show().siblings().hide()
      })
//arrow
$('.pro-a .banner-arrows .left').on('click',function(){
    $('.carousel').carousel('prev');
})
$('.pro-a .banner-arrows .right').on('click',function(){
    $('.carousel').carousel('next');
})
//plus & minus
    //加的效果
    $(".content1 #plus").click(function(){
        var n=$(this).prev().val();
        var num=parseInt(n)+1;
        if(num==0){ return;}
        $(this).prev().val(num);
    });
    //减的效果
    $(".content1 #minus").click(function(){
        var n=$(this).next().val();
        var num=parseInt(n)-1;
        if(num==0){ return}
        $(this).next().val(num);
    });
//在可视区域内出现时执行动画
//content3 modal
$('.content3 #n1').modal('');
$('.content3 #n2').modal('');
$('#showA').modal('');
//footer
//footer input
$("footer .footer-top input").on('click',function(){
    $(this).parent().find('a').addClass('active')
})
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
})

$(function() {
	
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 500,//承载容器宽
		height : 500,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);
});