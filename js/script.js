$(document).ready(function  () 
{	

	var is_scroll = false;
	
	var menu_back_top = $('#menu-back').offset().top;

	$('.SocialMedia').on('click' , function  () 
	{
		return false;
	});

	// Sliders

	$('[data-id="1"]').show();	

	$('.bullets').show(100);
	bullets(1);



	$('a.fancybox').fancybox({
		width: 1000,
		background: 'none',
		'titleShow'  : false,
        'autoscale' : true,
	});

	// reslide(5000);

	/*****************/
	

	$(window).scroll(function(event) 
	{		
		
		parallax('#m_c_s_p' , '.5');
		parallax('#serv_p' , '.3');
		parallax('#sol_p' , '.1');
		parallax('.contacts-bar' , '.06');
			
		if($(window).scrollTop() >= menu_back_top)
		{
			if (is_scroll == false) 
			{
				$(".scrolling-nav").show();
				$(".scrolling-nav").animate({
					'opacity' : '1'
				});
				$("#menu-back").hide();
				
				is_scroll = true;
			}
		}
		else 
		{
			$(".scrolling-nav").hide();
			$("#menu-back").show();
				
			is_scroll = false;

		}
			
		
	});


	
	
});


function show_this (type , arg) 
{
	var op = '';

	if (type == 'show') 
		op = '1';
	else if (type == 'hide') 
		op = '1';

	$(arg).animate(
	{
		'opacity' : op 
	});
}

function scroll_to (title , type) 
{	
	var scroll = 0;

	if (type == 'main') 
		scroll = $(title).offset().top ;	
	else
		scroll = $(title).offset().top + 56;	

	$("html , body").animate(
	{
		scrollTop :   ( scroll - 130 ) + "px" 
	}, 2500 ); 
	
	return false;
}




/***************************  Slider ************************/

var curr_no = 1;
var timer = 0;


function next_slide (type) 
{	

	var curr_slide = $('[data-id="' + curr_no  + '"]');	
	var slides = $('.slide');

	if (curr_no == 4) 
		curr_no = 0;	
		
	var next_slide = $('[data-id="' + (curr_no + 1 ) + '"]');
		
	curr_slide.animate( { 
		'opacity'  : '0.0',
		'margin-left' : '-130px'
	} , 300 , function  () 
	{	
		slides.hide();	
		curr_slide.css('margin' , '0').hide();		
		next_slide.css('opacity' ,'1').fadeIn(700);			
	} );	

	++curr_no;	
	
	if (type == 'click')
	{
		clearInterval(timer);
		// reslide(15000);
	}

	bullets(curr_no );

	skip_click();
}


function prev_slide (type) 
{	
	var curr_slide = $('[data-id="' + curr_no  + '"]');	
	var slides = $('.slide');


	if (curr_no == 1) 	
		curr_no = 5;	

	var next_slide = $('[data-id="' + (curr_no - 1 ) + '"]');
	
	
	curr_slide.animate( { 
		'opacity'  : '0.0',
		'margin-left' : '120px'
	} , 300 , function  () 
	{		
		slides.hide();
		curr_slide.css('margin' , '0').hide();
		next_slide.css('opacity' ,'1').fadeIn(700);			
	} );

	--curr_no;		

	if (type == 'click')
	{
		clearInterval(timer);
		// reslide(15000);
	}

	bullets(curr_no );

	skip_click();

}

function bullets ( next) 
{	
	$('.b').css('background-position' , 'top center');
	$('[data-bid="' +  next  + '"]').css('background-position' , 'bottom center');
}


function bullet_click (link) 
{
	var s = $('.slide');
	var id = $(link).data('bid');
	
	s.hide();
	$('[data-id="' + id + '"]').css('opacity' ,'1').fadeIn(700);	
	
	bullets(id);
		
	clearInterval( timer);

	skip_click();


}

function skip_click () 
{
	$('.left-right').attr('onclick' , 'return false');
	$('.arrow-right').attr('onclick' , 'return false');		
	$('.b').attr('onclick' , 'return false');		

	setTimeout(function  () 
	{
		$('.left-right').attr('onclick' , 'next_slide()');
		$('.arrow-right').attr('onclick' , 'prev_slide()');	
		$('.b').attr('onclick' , 'bullet_click(this)');	
	} , 2000);
}


function reslide (speed) 
{	
	timer = setInterval(function  () 
	{			
		next_slide();
	} , speed);	
}



function parallax(div , ratio) 
{

	var scroll = $(window).scrollTop();	

	$(div).css('top',( 0 - (scroll * ratio ))+'px' );

	// console.log($(div).css('top'));
}       