$(function(){
	$('.header_list a').hover(function(){
		$(this).addClass('focus')
	}, function(){
		$(this).removeClass('focus')
	})
	$('.header_list>li').hover(function(){
		$(this).find('.fenlei_list').show()
	},function(){
		$(this).find('.fenlei_list').hide()
	})
	$('.download').hover(function(){
		$(this).stop(true).find('.down_list').slideDown()
	},function(){		
		setTimeout(function(){
			if(!$('.download').is(':hover')){
				$('.down_list').stop(true).slideUp()
			}
		},100)		
	})
	$('.play_control').hover(function(){
		$(this).find('a').show()
	},function(){
		$(this).find('a').hide()
	})
	$('.play_list>ul>li').hover(function(){
		$(this).addClass('play_list_ho')
	},function(){
		$(this).removeClass('play_list_ho')
	})
})