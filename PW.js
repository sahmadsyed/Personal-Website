function topPaddingAdapter(){
	var windowHeight = window.innerHeight;
	var pTop = Math.floor(windowHeight*0.15);
	var pTopStr = pTop.toString() + 'px';
	document.getElementById('name').style.paddingTop = pTopStr;
};

window.onload = topPaddingAdapter();

function main(){
	$(document).ready(
		function(){
			$('#name').effect('slide',{direction:'right'}, 1000);
			
			setTimeout(function(){
				$('#program').effect('slide',{direction:'right'}, 1000);
				},500);
				
			setTimeout(function(){
				$('#school').effect('slide',{direction:'right'}, 1000);
				},1000);
			
			setTimeout(function(){
				$('#line').slideToggle('slow');
				},2300);
			
			setTimeout(function(){
				$('#email').animate({height:'150px',opacity:'1'}, 800);
				},2800);
			
			setTimeout(function(){
				$('#resume').animate({height:'150px',opacity:'1'}, 800);
				},3200);
			
			setTimeout(function(){
				$('#github').animate({height:'150px',opacity:'1'}, 800);
				},3600);
				
			setTimeout(function(){
				$('#twitter').animate({height:'150px',opacity:'1'}, 800);
				},4000);
			
			setTimeout(function(){
				$('a').removeClass('link');
				$('a').addClass('linkEffect');
				},5000);
			
			$('img').mouseenter(function(){
				$(this).animate({height:'160px'}, 300);
			});
			
			$('img').mouseleave(function(){
				$(this).animate({height:'150px'}, 300);
			});
		}
	);
};

window.onload = main;




