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



// CODE IMAGE SLIDER

$flag = true;
$counterCode = 1;

$(".prevBtn_code").click(function() {
    moveImageCode(false);
  });
  
$(".nextBtn_code").click(function() {
    moveImageCode(true);
});

function moveImageCode(next) {
	if($flag)
	{
		$flag = false;
		if(next)
		{
		

			$counterCode++;

			if($counterCode==1)
				$counterCode++;

			if($counterCode==2)
			{
				$(".colorbox1_code").animate({'top':'-100%'});
				$(".colorbox2_code").animate({'top':'0%'});
				$(".img1_code").animate({'top':'-50%'},700);
				$(".img2_code").animate({'top':'50%'},700);

			}

			if($counterCode==3)
			{
				$(".colorbox2_code").animate({'top':'-100%'});
				$(".colorbox3_code").animate({'top':'0%'});
				$(".img2_code").animate({'top':'-50%'},700);
				$(".img3_code").animate({'top':'50%'},700);

			}

			if($counterCode==4)
			{
				$(".colorbox3_code").animate({'top':'-100%'});
				$(".colorbox4_code").animate({'top':'0%'});
				$(".img3_code").animate({'top':'-50%'},700);
				$(".img4_code").animate({'top':'50%'},700);

			}

			if($counterCode > 4)
				$counterCode = 4;
		}
		else {



			$counterCode--;
			if($counterCode <= 1)
				$counterCode = 1;
			
			if($counterCode == 3)
			{
				$(".colorbox4_code").animate({'top':'100%'});
				$(".colorbox3_code").animate({'top':'0%'});
				$(".img4_code").animate({'top':'150%'},700);
				$(".img3_code").animate({'top':'50%'},700);
			
			}
			if($counterCode == 2)
			{
				$(".colorbox3_code").animate({'top':'100%'});
				$(".colorbox2_code").animate({'top':'0%'});
				$(".img3_code").animate({'top':'150%'},700);
				$(".img2_code").animate({'top':'50%'},700);
	
			}
			if($counterCode == 1)
			{
				$(".colorbox2_code").animate({'top':'100%'});
				$(".colorbox1_code").animate({'top':'0%'});
				$(".img2_code").animate({'top':'150%'},700);
				$(".img1_code").animate({'top':'50%'},700);
	
			}
			if($counterCode == 4)
				$counterCode--;
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
	d1.classList.add('up')
	d1.classList.remove('down')
	d3.classList.add('up')
	d3.classList.remove('down')
	d4.classList.add('up')
	d4.classList.remove('down')
})

exit3.addEventListener('click', () => {
	artwork_page.classList.add('close')
	artwork_page.classList.remove('open')
	work.classList.add('contract')
	work.classList.remove('expand')
	d1.classList.add('down')
	d1.classList.remove('up')
	d3.classList.add('down')
	d3.classList.remove('up')
	d4.classList.add('down')
	d4.classList.remove('up')

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


















