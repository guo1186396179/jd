$(function(){
	
	var $difang = $('.ul1 li').eq(0);
	
	var $difang2 = $('.ul1 li').eq(1);
	
	var $header_top = $('.header_top');

	var $header_top_guanbi = $('.img_guanbi');

	var $ul_li = $('.ul2 li')

	$header_top_guanbi.click(function(){
		$header_top.hide();
	})
	
	$difang.hover(function(){
		$difang.children().css({"color":"#f10212","backgroundColor":"#fff"})
		$('.difang').show();	
	},function(){
		$difang.children().css({"color":"#333","backgroundColor":"#ddd"})

		$('.difang').hide();	
	})
	
	
	
	$difang2.hover(function(){
		$difang2.css({"backgroundColor":"#fff"})
		$difang2.children().css({"color":"#f10212"})
	},function(){
		$difang2.css({"backgroundColor":"#ddd"})
		$difang2.children().css({"color":"#333"})
	
	})
	
	
	
	$('.difang').hover(function(){
		$difang.children().css({"color":"#333","backgroundColor":"#fff"})

		$('.difang').show();
	},function(){
		$difang.children().css({"color":"#333","backgroundColor":"#ddd"})

		$('.difang').hide();
	})
	
	
	$('.ul2 li').eq(1).hover(function(){
		$('.ul2 li a').eq(1).css({'backgroundColor':'#fff'})

		$('.my_jingdong').show();
	},function(){
		$('.ul2 li a').eq(1).css({'backgroundColor':'#ddd'})

		$('.my_jingdong').hide();
	})
	
	
	$('.my_jingdong').hover(function(){
		$('.ul2 li a').eq(1).css({'backgroundColor':'#fff'})

		$('.my_jingdong').show();
	},function(){
		$('.ul2 li a').eq(1).css({'backgroundColor':'#ddd'})

		$('.my_jingdong').hide();
	})
	
	
	$('.ul2 li').eq(4).hover(function(){
		$('.ul2 li a').eq(4).css({'backgroundColor':'#fff'})

		$('.caigou').show();
	},function(){
		$('.ul2 li a').eq(4).css({'backgroundColor':'#ddd'})

		$('.caigou').hide();
	})
	
	
	$('.caigou').hover(function(){
		$('.ul2 li a').eq(4).css({'backgroundColor':'#fff'})

		$('.caigou').show();
	},function(){
		$('.ul2 li a').eq(4).css({'backgroundColor':'#ddd'})

		$('.caigou').hide();
	})
	
	
	// 网站导航
	
	$('.ul2 li').eq(5).hover(function(){
		$('.ul2 li a').eq(5).css({'backgroundColor':'#fff'})
	
		$('.wangzhandaohang').show();
	},function(){
		$('.ul2 li a').eq(5).css({'backgroundColor':'#ddd'})
	
		$('.wangzhandaohang').hide();
	})
	
	
	$('.wangzhandaohang').hover(function(){
		$('.ul2 li a').eq(5).css({'backgroundColor':'#fff'})
	
		$('.wangzhandaohang').show();
	},function(){
		$('.ul2 li a').eq(5).css({'backgroundColor':'#ddd'})
	
		$('.wangzhandaohang').hide();
	})
	
	var $li = $('.nav_xxk li');
	var $div = $('.xxk_div');
	
	$li.hover(function(){
		$div.eq($(this).index()).show();
		$(this).css({'background-color':'#ccc'})
		$div.hover(function(){
			$(this).show();
			$li.eq($(this).index()-1).css({'background-color':'#ccc'});
		},function(){
			$(this).hide();
			$li.eq($(this).index()-1).css({'background-color':'#fff'});
		})
	},function(){
		$div.eq($(this).index()).hide();
		$(this).css({'background-color':'#fff'});
	})
	
	$('.ul3 li').eq(2).mouseenter(function(){
		$('.xiahuaxian').css({'left':'60px'});
		$('.cuxiao').css({'display':'none'});
		$('.cuxiao2').css({'display':'block'});

	})
	$('.ul3 li').eq(0).mouseenter(function(){
		$('.xiahuaxian').css({'left':'20px'});
		$('.cuxiao').css({'display':'block'});
		$('.cuxiao2').css({'display':'none'});
		
	})
	
	var $num = 0;
	$('.prev_left').click(function(){

		$num -= 608;
		if($num < -1216){
			$num = 0;
		}
		$('.lunbo2_img').stop().animate({'margin-left':$num},1000);
	})
	
	$('.next_right').click(function(){
	
		$num += 608;
		

		if($num > 0){
			$num = -1216;
		}
		$('.lunbo2_img').stop().animate({'margin-left':$num},1000);
	})
	
	var num2 = 0;
	var timer = setInterval(function(){
		num2 -= 193
		$('.lunbo4').animate({'margin-left':num2})
		
		if(num2 == 0){
			$('.point_img li').eq(0).css({'background-color':'#f10215'})
			$('.point_img li').eq(1).css({'background-color':'#ccc'})


		}
		
		if(num2 <= -192){
			
			num2 = 193;
			$('.point_img li').eq(1).css({'background-color':'#f10215'})
			$('.point_img li').eq(0).css({'background-color':'#ccc'})

		}
	},1500)
	
	$('.point2 li').eq(1).mouseenter(function(){
		$('.lunbo5').stop().animate({'margin-left':'-320px'});
		$(this).css({'background-color':'#f10215'});
		$(this).siblings().css({'background-color':'#fff'});
	})
	
	$('.point2 li').eq(0).mouseenter(function(){
		$('.lunbo5').stop().animate({'margin-left':'0px'});
		$(this).css({'background-color':'#f10215'});
		$(this).siblings().css({'background-color':'#fff'});
	})
	
	var num3=0;
	var timer2 = setInterval(function(){
		num3 -=308;
		$('.lunbo6').animate({'margin-left':num3});
		if(num3 <= -616){
			num3 = 308;
			$('.point3 li').eq(2).css({
				'background-color':'#f10215'
			})
			$('.point3 li').eq(2).siblings().css({'background-color':'#fff'})
		}
		
		if(num3==0){
			$('.point3 li').eq(0).css({
				'background-color':'#f10215'
			})
			$('.point3 li').eq(0).siblings().css({'background-color':'#fff'})
		}
		if(num3 == -308){
			$('.point3 li').eq(1).css({
				'background-color':'#f10215'
			})
			$('.point3 li').eq(1).siblings().css({'background-color':'#fff'})
		}
	},2000)
	
	$('.point3 li').hover(function(){
		if($(this).index()==2){
			$('.lunbo6').stop().animate({'margin-left':'-616px'})
			$('.point3 li').eq(2).css({
				'background-color':'#f10215'
			})
			$('.point3 li').eq(2).siblings().css({'background-color':'#fff'})
			
		}
		
		if($(this).index()==0){
			$('.lunbo6').stop().animate({'margin-left':'-0px'})
			$('.point3 li').eq(0).css({
				'background-color':'#f10215'
			})
			$('.point3 li').eq(0).siblings().css({'background-color':'#fff'})

		}
		if($(this).index()==1){
			$('.lunbo6').stop().animate({'margin-left':'-308'})
			$('.point3 li').eq(1).css({
				'background-color':'#f10215'
			})
			$('.point3 li').eq(1).siblings().css({'background-color':'#fff'})
		}	
	})
	
	$('.point4 li').hover(function(){
		$(this).css({'background-color':'#f10215'});
		$(this).siblings().css({'background-color':'#fff'})
		if($(this).index()==0){
			$('.lunbo7').stop().animate({'margin-left':'0px'});
		}
		if($(this).index()==1){
			$('.lunbo7').stop().animate({'margin-left':'-308px'});
		}
	})
	
	
	var num8=0;
	var timer8 = setInterval(function(){
		num8 -=308;
		$('.lunbo8').animate({'margin-left':num8});
		if(num8 <= -616){
			num8 = 308;
			$('.point8 li').eq(2).css({
				'background-color':'#f10215'
			})
			$('.point8 li').eq(2).siblings().css({'background-color':'#fff'})
		}
		
		if(num8==0){
			$('.point8 li').eq(0).css({
				'background-color':'#f10215'
			})
			$('.point8 li').eq(0).siblings().css({'background-color':'#fff'})
		}
		if(num8 == -308){
			$('.point8 li').eq(1).css({
				'background-color':'#f10215'
			})
			$('.point8 li').eq(1).siblings().css({'background-color':'#fff'})
		}
	},1500)
	
	$('.point8 li').hover(function(){
		if($(this).index()==2){
			$('.lunbo8').stop().animate({'margin-left':'-616px'})
			$('.point8 li').eq(2).css({
				'background-color':'#f10215'
			})
			$('.point8 li').eq(2).siblings().css({'background-color':'#fff'})
			
		}
		
		if($(this).index()==0){
			$('.lunbo8').stop().animate({'margin-left':'-0px'})
			$('.point8 li').eq(0).css({
				'background-color':'#f10215'
			})
			$('.point8 li').eq(0).siblings().css({'background-color':'#fff'})
	
		}
		if($(this).index()==1){
			$('.lunbo8').stop().animate({'margin-left':'-308'})
			$('.point8 li').eq(1).css({
				'background-color':'#f10215'
			})
			$('.point8 li').eq(1).siblings().css({'background-color':'#fff'})
		}	
	})
	
})
