


// 购物车
	$('.header2_2_1').mouseenter(function() {
	$('.header2_2_1>.header2_2_1_1>div:animated').stop().hide();
	$('.header2_2_1>.header2_2_1_1>div').slideDown();
	$('.header2_2_1>.header2_2_1_1').css({
		background: 'white',
		color: '#ff6700'
	});
});
	$('.header2_2_1').mouseleave(function() {
	$('.header2_2_1>.header2_2_1_1>div').slideUp();
	$('.header2_2_1>.header2_2_1_1').css({
		background: ' #424242',
		color: ' #b0b0b0'
	});
});

    // 横向二级菜单
	$('.header3_2>.a').mouseenter(function() {
	$('.header3_2>.a>div:animated').stop().hide();
	$('.header3_2>.a>div').eq($(this).index()).slideDown().siblings().hide();
	$('.header3_2>.a').mouseenter(function() {
		$(".header3_2>.a>div").hide().eq($(this).index()).show();
	});
});
	$('.header3_2>.a').mouseleave(function() {
	$('.header3_2>.a>div').slideUp(function(){
		$(this).stop();
	});
});	


    // 大轮播图
	var now=0;
	var len=$('.body>.img>li').length;
	function run(){
		s=setInterval(function(){
			$('.body>.img>li').hide();
			$('.body>.num>li').css('background','#3e3e3e')
			if(now>=len-1){
				now=0
			}else{
				now++
			}
			$('.body>.img>li:eq('+now+')').fadeIn('fast');
			$('.body>.num>li:eq('+now+')').css('background','#F1F1F2')
		},3000)
	}
	run();
    $('.body').mouseenter(function(){
    	clearInterval(s);   
    })
    $('.body').mouseleave(function(){
    	run();
    })
    $('.body>.num>li').click(function(){

    	$('.body>.img>li').hide();
    	$('.body>.num>li').css('background','#3e3e3e');
    	now=$(this).index();
    	$('.body>.img>li:eq('+now+')').fadeIn();
		$('.body>.num>li:eq('+now+')').css('background','#F1F1F2');
    });
    $('.left').click(function(){
    	now--;
    	if(now<0){
    		now=len-1;
    	}
    	$('.body>.img>li').hide();
    	$('.body>.num>li').css('background','#3e3e3e');
    	$('.body>.img>li:eq('+now+')').fadeIn();
		$('.body>.num>li:eq('+now+')').css('background','#F1F1F2');
    })
     $('.right').click(function(){
    	now++;
    	if(now>len-1){
    		now=0;
    	}
    	$('.body>.img>li').hide();
    	$('.body>.num>li').css('background','#3e3e3e');
    	$('.body>.img>li:eq('+now+')').fadeIn();
		$('.body>.num>li:eq('+now+')').css('background','#F1F1F2');
    })

     // 小米明星单品  轮播图
        $('#next').css('color','black');
        $('#next').click(function(){
        	$('#ppt').animate({left:'-1240px'})
        	$('#next').css('color','#b0b0b0');
        	$('#pre').css('color','black');
        })
        $('#pre').click(function(){
        	$('#ppt').animate({left:'0px'})
        	$('#pre').css('color','#b0b0b0');
        	$('#next').css('color','black');
        })
//  智能硬件   向上飘一下
$('.footer2>.footer2_2>.footer2_2_1>div').mouseenter(function() {
	$('.footer2>.footer2_2>.footer2_2_1>div').eq($(this).index()).stop().addClass('shadow').animate({top:'-10px'});
	$('.footer2>.footer2_2>.footer2_2_1>div>.pj').eq($(this).index()).stop().slideDown();

});
$('.footer2>.footer2_2>.footer2_2_1>div').mouseleave(function() {
	$('.footer2>.footer2_2>.footer2_2_1>div').eq($(this).index()).stop().removeClass('shadow').animate({top:'0px'});
	$('.footer2>.footer2_2>.footer2_2_1>div>.pj').eq($(this).index()).stop().slideUp();

});
// 向上飘一下
$('.footer2>.footer2_2>.footer2_2_2>div').mouseenter(function() {
	$('.footer2>.footer2_2>.footer2_2_2>div').eq($(this).index()).stop().addClass('shadow').animate({top:'-10px'});
	$('.footer2>.footer2_2>.footer2_2_2>div>.pj').eq($(this).index()).stop().slideDown();

});
$('.footer2>.footer2_2>.footer2_2_2>div').mouseleave(function() {
	$('.footer2>.footer2_2>.footer2_2_2>div').eq($(this).index()).stop().removeClass('shadow').animate({top:'0px'});
	$('.footer2>.footer2_2>.footer2_2_2>div>.pj').eq($(this).index()).stop().slideUp();


});
// footerbody 选项卡
$('.footerbody1_2>span').mouseenter(function(){
         $(".quan>div").hide().eq($(this).index()).show();

});
$('.footerbody2_2_1>span').mouseenter(function(){
         $(".qq>div").hide().eq($(this).index()).show();

});
$('.footerbody3_2_1>span').mouseenter(function(){
         $(".qq1>div").hide().eq($(this).index()).show();

});
  // 为你推荐  轮播图
$('#nextt').css('color','black');
$('#nextt').click(function(){
        	$('#ppd').animate({left:'-1240px'})
        	$('#nextt').css('color','#b0b0b0');
        	$('#pree').css('color','black');
        })
        $('#pree').click(function(){
        	$('#ppd').animate({left:'0px'})
        	$('#pree').css('color','#b0b0b0');
        	$('#nextt').css('color','black');
        })



// 小轮播  一
    var now1=0;
    var len=$('.lunbo1>.img>li').length;
     $('.lunbo1>.num>li').click(function(){

        $('.lunbo1>.img>li').hide();
        $('.lunbo1>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        now1=$(this).index();
        $('.lunbo1>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo1>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'})
    });
     $('.lunbo1').mouseenter(function(){
        $('.lunbo1>div').show();
    });
    $('.lunbo1').mouseleave(function(){  
        $('.lunbo1>div').hide();
    });
    $('.left1').mouseenter(function(){
        $('.lunbo1>.left1').css('background','black');
    });
    $('.left1').mouseleave(function(){
        $('.lunbo1>.left1').css('background','#E4E4E4');
    });
     $('.right1').mouseenter(function(){
        $('.lunbo1>.right1').css('background','black');
    });
    $('.right1').mouseleave(function(){
        $('.lunbo1>.right1').css('background','#E4E4E4');
    });
     $('.left1').click(function(){
        now1--;
        if(now1<0){
            now1=len-1;
        }
        $('.lunbo1>.img>li').hide();
        $('.lunbo1>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        $('.lunbo1>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo1>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'});
    })
     $('.right1').click(function(){
        now1++;
        if(now1>len-1){
            now1=0;
        }
        $('.lunbo1>.img>li').hide();
        $('.lunbo1>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        $('.lunbo1>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo1>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'});
    })
// 小轮播  二
    var now1=0;
    var len=$('.lunbo2>.img>li').length;
     $('.lunbo2>.num>li').click(function(){

        $('.lunbo2>.img>li').hide();
        $('.lunbo2>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        now1=$(this).index();
        $('.lunbo2>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo2>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'})
    });
     $('.lunbo2').mouseenter(function(){
        $('.lunbo2>div').show();
    });
    $('.lunbo2').mouseleave(function(){  
        $('.lunbo2>div').hide();
    });
    $('.left2').mouseenter(function(){
        $('.lunbo2>.left2').css('background','black');
    });
    $('.left2').mouseleave(function(){
        $('.lunbo2>.left2').css('background','#E4E4E4');
    });
     $('.right2').mouseenter(function(){
        $('.lunbo2>.right2').css('background','black');
    });
    $('.right2').mouseleave(function(){
        $('.lunbo2>.right2').css('background','#E4E4E4');
    });
     $('.left2').click(function(){
        now1--;
        if(now1<0){
            now1=len-1;
        }
        $('.lunbo2>.img>li').hide();
        $('.lunbo2>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        $('.lunbo2>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo2>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'});
    })
     $('.right2').click(function(){
        now1++;
        if(now1>len-1){
            now1=0;
        }
        $('.lunbo2>.img>li').hide();
        $('.lunbo2>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        $('.lunbo2>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo2>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'});
    });
    // 小轮播  三
    var now1=0;
    var len=$('.lunbo3>.img>li').length;
     $('.lunbo3>.num>li').click(function(){

        $('.lunbo3>.img>li').hide();
        $('.lunbo3>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        now1=$(this).index();
        $('.lunbo3>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo3>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'})
    });
     $('.lunbo3').mouseenter(function(){
        $('.lunbo3>div').show();
    });
    $('.lunbo3').mouseleave(function(){  
        $('.lunbo3>div').hide();
    });
    $('.left3').mouseenter(function(){
        $('.lunbo3>.left3').css('background','black');
    });
    $('.left3').mouseleave(function(){
        $('.lunbo3>.left3').css('background','#E4E4E4');
    });
     $('.right3').mouseenter(function(){
        $('.lunbo3>.right3').css('background','black');
    });
    $('.right3').mouseleave(function(){
        $('.lunbo3>.right3').css('background','#E4E4E4');
    });
     $('.left3').click(function(){
        now1--;
        if(now1<0){
            now1=len-1;
        }
        $('.lunbo3>.img>li').hide();
        $('.lunbo3>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        $('.lunbo3>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo3>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'});
    })
     $('.right3').click(function(){
        now1++;
        if(now1>len-1){
            now1=0;
        }
        $('.lunbo3>.img>li').hide();
        $('.lunbo3>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        $('.lunbo3>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo3>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'});
    });
     // 小轮播  四
    var now1=0;
    var len=$('.lunbo4>.img>li').length;
     $('.lunbo4>.num>li').click(function(){

        $('.lunbo4>.img>li').hide();
        $('.lunbo4>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        now1=$(this).index();
        $('.lunbo4>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo4>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'})
    });
     $('.lunbo4').mouseenter(function(){
        $('.lunbo4>div').show();
    });
    $('.lunbo3').mouseleave(function(){  
        $('.lunbo4>div').hide();
    });
    $('.left4').mouseenter(function(){
        $('.lunbo4>.left4').css('background','black');
    });
    $('.left4').mouseleave(function(){
        $('.lunbo4>.left4').css('background','#E4E4E4');
    });
     $('.right4').mouseenter(function(){
        $('.lunbo4>.right4').css('background','black');
    });
    $('.right4').mouseleave(function(){
        $('.lunbo4>.right4').css('background','#E4E4E4');
    });
     $('.left4').click(function(){
        now1--;
        if(now1<0){
            now1=len-1;
        }
        $('.lunbo4>.img>li').hide();
        $('.lunbo4>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        $('.lunbo4>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo4>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'});
    })
     $('.right4').click(function(){
        now1++;
        if(now1>len-1){
            now1=0;
        }
        $('.lunbo4>.img>li').hide();
        $('.lunbo4>.num>li').css({'background':' #B0B0B0','width':'7px','height':'7px','border':'0px'});
        $('.lunbo4>.img>li:eq('+now1+')').fadeIn();
        $('.lunbo4>.num>li:eq('+now1+')').css({'background':'white','width':'8px','height':'8px','border':'2px solid #FF7010'});
    });

