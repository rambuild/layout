$(function(){
	$('.footer').on('focus','input',function(){
		var className = $(this).attr('class');
		if(className == 'ipt-1'){
			if($(this).val()=='Your name'){
				$(this).val('')
			}
		}else if(className == 'ipt-2'){
			if($(this).val() == 'Your email'){
				$(this).val('')
			}
		}else{
			if($(this).val() == 'Your message'){
				$(this).val('')
			}
		}
	})
	$('.footer').on('blur','input',function(){
		var className = $(this).attr('class');
		if(className == 'ipt-1'){
			if(!$(this).val()){
				$(this).val('Your name')
			}
		}else if(className == 'ipt-2'){
			if(!$(this).val()){
				$(this).val('Your email')
			}
		}else{
			if(!$(this).val()){
				$(this).val('Your message')
			}
		}
	})
	window.onscroll=function(){
		var scrollTop = $(window).scrollTop()
		if(scrollTop>500){
			$('.fix-to-top').css({
				'visibility':'visible',
				'opacity':1
			})
		}else{
			$('.fix-to-top').css({
				'visibility':'hidden',
				'opacity':0
			})
		}
	}
	$('.fix-to-top').on('click',function(){
		var a= $(document).scrollTop()
		var timer = setInterval(function(){
			a=a>0?a-300:0;
			if(a==0){
				clearInterval(timer)
			}
			$(document).scrollTop(a)
		},20)
		
	})
})