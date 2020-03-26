





// JQUERY TO COLLAPSE NAVBAR

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);






// JQUERY FOR PAGE SCROLLING

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});








// PARALLAX
var rellax = new Rellax('.rellax', {

callback: function(position) {

}
});



// OPEN TUMPERO PAGE

const tumpero_page = document.getElementById('tumpero_page')
const billboard_tumpero = document.getElementById('billboard_tumpero')
const exit = document.getElementById('exit')

billboard_tumpero.addEventListener('click', () => {
	tumpero_page.classList.add('open')
	tumpero_page.classList.remove('close')
})

exit.addEventListener('click', () => {
	tumpero_page.classList.add('close')
	tumpero_page.classList.remove('open')

})


// TUMPERO IMAGE SLIDER

$flag = true;
$counter = 1;
var counter = $counter;

$("#prevBtn").click(function() {
    moveImage(false);
  });
  
$("#nextBtn").click(function() {
    moveImage(true);
});


function moveImage(next) {
	if($flag)
	{
		$flag = false;
		if(next)
		{
		

			$counter++;

			if($counter==1)
				$counter++;

			if($counter==2)
			{
				$(".colorbox1").animate({'top':'-100%'});
				$(".colorbox2").animate({'top':'0%'});
				$(".img1").animate({'top':'-50%'},700);
				$(".img2").animate({'top':'50%'},700);

			}

			if($counter==3)
			{
				$(".colorbox2").animate({'top':'-100%'});
				$(".colorbox3").animate({'top':'0%'});
				$(".img2").animate({'top':'-50%'},700);
				$(".img3").animate({'top':'50%'},700);

			}

			if($counter==4)
			{
				$(".colorbox3").animate({'top':'-100%'});
				$(".colorbox4").animate({'top':'0%'});
				$(".img3").animate({'top':'-50%'},700);
				$(".img4").animate({'top':'50%'},700);

			}

			if($counter==5)
			{
				$(".colorbox4").animate({'top':'-100%'});
				$(".colorbox5").animate({'top':'0%'});
				$(".img4").animate({'top':'-50%'},700);
				$(".img5").animate({'top':'50%'},700);

			}

			if($counter > 5)
				$counter = 5;
		}
		else {



			$counter--;
			if($counter <= 1)
				$counter = 1;
			if($counter == 4)
			{
				$(".colorbox5").animate({'top':'100%'});
				$(".colorbox4").animate({'top':'0%'});
				$(".img5").animate({'top':'150%'},700);
				$(".img4").animate({'top':'50%'},700);
			
			}
			if($counter == 3)
			{
				$(".colorbox4").animate({'top':'100%'});
				$(".colorbox3").animate({'top':'0%'});
				$(".img4").animate({'top':'150%'},700);
				$(".img3").animate({'top':'50%'},700);
			
			}
			if($counter == 2)
			{
				$(".colorbox3").animate({'top':'100%'});
				$(".colorbox2").animate({'top':'0%'});
				$(".img3").animate({'top':'150%'},700);
				$(".img2").animate({'top':'50%'},700);
	
			}
			if($counter == 1)
			{
				$(".colorbox2").animate({'top':'100%'});
				$(".colorbox1").animate({'top':'0%'});
				$(".img2").animate({'top':'150%'},700);
				$(".img1").animate({'top':'50%'},700);
	
			}
			if($counter == 5)
				$counter--;
		}


		setTimeout(function(){$flag = true;},500);
    }
    
}



// QUASE IMAGE SLIDER

$flag = true;
$counterQuase = 1;

$("#prevBtn_quase").click(function() {
    moveImageQuase(false);
  });
  
$("#nextBtn_quase").click(function() {
    moveImageQuase(true);
});

function moveImageQuase(next) {
	if($flag)
	{
		$flag = false;
		if(next)
		{
		

			$counterQuase++;

			if($counterQuase==1)
				$counterQuase++;

			if($counterQuase==2)
			{
				$(".colorbox1_quase").animate({'top':'-100%'});
				$(".colorbox2_quase").animate({'top':'0%'});
				$(".img1_quase").animate({'top':'-50%'},700);
				$(".img2_quase").animate({'top':'50%'},700);

			}

			if($counterQuase==3)
			{
				$(".colorbox2_quase").animate({'top':'-100%'});
				$(".colorbox3_quase").animate({'top':'0%'});
				$(".img2_quase").animate({'top':'-50%'},700);
				$(".img3_quase").animate({'top':'50%'},700);

			}

			if($counterQuase==4)
			{
				$(".colorbox3_quase").animate({'top':'-100%'});
				$(".colorbox4_quase").animate({'top':'0%'});
				$(".img3_quase").animate({'top':'-50%'},700);
				$(".img4_quase").animate({'top':'50%'},700);

			}

			if($counterQuase > 4)
				$counterQuase = 4;
		}
		else {



			$counterQuase--;
			if($counterQuase <= 1)
				$counterQuase = 1;
			
			if($counterQuase == 3)
			{
				$(".colorbox4_quase").animate({'top':'100%'});
				$(".colorbox3_quase").animate({'top':'0%'});
				$(".img4_quase").animate({'top':'150%'},700);
				$(".img3_quase").animate({'top':'50%'},700);
			
			}
			if($counterQuase == 2)
			{
				$(".colorbox3_quase").animate({'top':'100%'});
				$(".colorbox2_quase").animate({'top':'0%'});
				$(".img3_quase").animate({'top':'150%'},700);
				$(".img2_quase").animate({'top':'50%'},700);
	
			}
			if($counterQuase == 1)
			{
				$(".colorbox2_quase").animate({'top':'100%'});
				$(".colorbox1_quase").animate({'top':'0%'});
				$(".img2_quase").animate({'top':'150%'},700);
				$(".img1_quase").animate({'top':'50%'},700);
	
			}
			if($counterQuase == 4)
				$counterQuase--;
		}
		setTimeout(function(){$flag = true;},500);
    }
}





// PORTFOLIO IMAGE SLIDER

$flag = true;
$counterPortfolio = 1;

$("#prevBtn_portfolio").click(function() {
    moveImagePortfolio(false);
  });
  
$("#nextBtn_portfolio").click(function() {
    moveImagePortfolio(true);
});

function moveImagePortfolio(next) {
	if($flag)
	{
		$flag = false;
		if(next)
		{
		

			$counterPortfolio++;

			if($counterPortfolio==1)
				$counterPortfolio++;

			if($counterPortfolio==2)
			{
				$(".colorbox1_portfolio").animate({'top':'-100%'});
				$(".colorbox2_portfolio").animate({'top':'0%'});
				$(".img1_portfolio").animate({'top':'-50%'},700);
				$(".img2_portfolio").animate({'top':'50%'},700);

			}

			if($counterPortfolio==3)
			{
				$(".colorbox2_portfolio").animate({'top':'-100%'});
				$(".colorbox3_portfolio").animate({'top':'0%'});
				$(".img2_portfolio").animate({'top':'-50%'},700);
				$(".img3_portfolio").animate({'top':'50%'},700);

			}

			if($counterPortfolio==4)
			{
				$(".colorbox3_portfolio").animate({'top':'-100%'});
				$(".colorbox4_portfolio").animate({'top':'0%'});
				$(".img3_portfolio").animate({'top':'-50%'},700);
				$(".img4_portfolio").animate({'top':'50%'},700);

			}

			if($counterPortfolio > 4)
				$counterPortfolio = 4;
		}
		else {



			$counterPortfolio--;
			if($counterPortfolio <= 1)
				$counterPortfolio = 1;
			
			if($counterPortfolio == 3)
			{
				$(".colorbox4_portfolio").animate({'top':'100%'});
				$(".colorbox3_portfolio").animate({'top':'0%'});
				$(".img4_portfolio").animate({'top':'150%'},700);
				$(".img3_portfolio").animate({'top':'50%'},700);
			
			}
			if($counterPortfolio == 2)
			{
				$(".colorbox3_portfolio").animate({'top':'100%'});
				$(".colorbox2_portfolio").animate({'top':'0%'});
				$(".img3_portfolio").animate({'top':'150%'},700);
				$(".img2_portfolio").animate({'top':'50%'},700);
	
			}
			if($counterPortfolio == 1)
			{
				$(".colorbox2_portfolio").animate({'top':'100%'});
				$(".colorbox1_portfolio").animate({'top':'0%'});
				$(".img2_portfolio").animate({'top':'150%'},700);
				$(".img1_portfolio").animate({'top':'50%'},700);
	
			}
			if($counterPortfolio == 4)
				$counterPortfolio--;
		}
		setTimeout(function(){$flag = true;},500);
    }
}

















// OPEN ARTWORK PAGE & METEOR REARANGE

const arwork_page = document.getElementById('artwork_page')
const billboard_artwork = document.getElementById('billboard_artwork')
const exit3 = document.getElementById('exit3')
const work = document.getElementById('work')
const d1 = document.getElementById('d1')
const d3 = document.getElementById('d3')
const d4 = document.getElementById('d4')

billboard_artwork.addEventListener('click', () => {
	artwork_page.classList.add('open')
	artwork_page.classList.remove('close')
	work.classList.add('expand')
	work.classList.remove('contract')
	d1.classList.add('move')
	d1.classList.remove('moveback')
	d3.classList.add('move')
	d3.classList.remove('moveback')
	d4.classList.add('move')
	d4.classList.remove('moveback')
})

exit3.addEventListener('click', () => {
	artwork_page.classList.add('close')
	artwork_page.classList.remove('open')
	work.classList.add('contract')
	work.classList.remove('expand')
	d1.classList.add('moveback')
	d1.classList.remove('move')
	d3.classList.add('moveback')
	d3.classList.remove('move')
	d4.classList.add('moveback')
	d4.classList.remove('move')
})

// OPEN TV QUASE

const quase_page = document.getElementById('quase_page')
const code_quase = document.getElementById('code_quase')
const exit2 = document.getElementById('exit2')

code_quase.addEventListener('click', () => {
	quase_page.classList.add('open')
	quase_page.classList.remove('close')
})

exit2.addEventListener('click', () => {
	quase_page.classList.add('close')
	quase_page.classList.remove('open')

})

// OPEN PORTFOLIO

const portfolio_page = document.getElementById('portfolio_page')
const code_portfolio = document.getElementById('code_portfolio')
const exit4 = document.getElementById('exit4')

code_portfolio.addEventListener('click', () => {
	portfolio_page.classList.add('open')
	portfolio_page.classList.remove('close')
})

exit4.addEventListener('click', () => {
	portfolio_page.classList.add('close')
	portfolio_page.classList.remove('open')

})









// Functiom to expand images on carousel
function expand() {
	document.getElementsByClassName('item').style = 'flex: 7' 
}





/* Function to toggle billboard and code images
$(function(){
    debugger;
    $(document).on('mouseenter', '#hoverMe', function(){
        $('img').toggleClass('hidden');
    });
});

*/











