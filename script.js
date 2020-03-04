// TUMPERO

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

// ARTWORK 

const arwork_page = document.getElementById('artwork_page')
const billboard_artwork = document.getElementById('billboard_artwork')
const exit3 = document.getElementById('exit3')
const work = document.getElementById('work')

billboard_artwork.addEventListener('click', () => {
	artwork_page.classList.add('open')
	artwork_page.classList.remove('close')
	work.classList.add('expand')
	work.classList.remove('contract')
})

exit3.addEventListener('click', () => {
	artwork_page.classList.add('close')
	artwork_page.classList.remove('open')
	work.classList.add('contract')
	work.classList.remove('expand')

})

// CODE PORTFOLIO

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













// TEXT CAROUSEL

var carouselSlide2 = document.querySelector('#carousel_slide2')
var carouselText2 = document.querySelectorAll('#carousel_slide2 div')

var prevBtn = document.querySelector('#prevBtn')
var nextBtn = document.querySelector('#nextBtn')

// counter

var counter2 = 1
var size2 = carouselText2[0].clientHeight

carouselSlide2.style.transform = 'translateY(' + (-size2*counter2) +'px)'

// button listeners

nextBtn.addEventListener('click', ()=>{
	carouselSlide2.style.transition = 'transform 0.4s ease-in-out'
	counter2++
	carouselSlide2.style.transform = 'translateY(' + (-size2*counter2) +'px)'
})

prevBtn.addEventListener('click', ()=>{
	carouselSlide2.style.transition = 'transform 0.4s ease-in-out'
	counter2--
	carouselSlide2.style.transform = 'translateY(' + (-size2*counter2) +'px)'
})

carouselSlide2.addEventListener('transitionend', ()=> {
	if (carouselText2[counter2].id === 'lastClone2'){
		carouselSlide2.style.transition = 'none'
		counter2 = carouselText2.length -2 
		carouselSlide2.style.transform = 'translateY(' + (-size2*counter2) +'px)'
	}
	if (carouselText2[counter2].id === 'firstClone2'){
		carouselSlide2.style.transition = 'none'
		counter2 = carouselText2.length - counter2 
		carouselSlide2.style.transform = 'translateY(' + (-size2*counter2) +'px)'
	}
})


// MOBILE CAROUSEL

var carouselSlide = document.querySelector('#carousel_slide')
var carouselImages = document.querySelectorAll('#carousel_slide img')

var prevBtn = document.querySelector('#prevBtn')
var nextBtn = document.querySelector('#nextBtn')

// counter

var counter = 1
var size = carouselImages[0].clientHeight

carouselSlide.style.transform = 'translateY(' + (-size*counter) +'px)'

// button listeners

nextBtn.addEventListener('click', ()=>{
	carouselSlide.style.transition = 'transform 0.4s ease-in-out'
	counter++
	carouselSlide.style.transform = 'translateY(' + (-size*counter) +'px)'
})

prevBtn.addEventListener('click', ()=>{
	carouselSlide.style.transition = 'transform 0.4s ease-in-out'
	counter--
	carouselSlide.style.transform = 'translateY(' + (-size*counter) +'px)'
})

carouselSlide.addEventListener('transitionend', ()=> {
	if (carouselImages[counter].id === 'lastClone'){
		carouselSlide.style.transition = 'none'
		counter = carouselImages.length -2 
		carouselSlide.style.transform = 'translateY(' + (-size*counter) +'px)'
	}
	if (carouselImages[counter].id === 'firstClone'){
		carouselSlide.style.transition = 'none'
		counter = carouselImages.length - counter 
		carouselSlide.style.transform = 'translateY(' + (-size*counter) +'px)'
	}
})







// Function to toggle billboard and code images
$(function(){
    debugger;
    $(document).on('mouseenter', '#hoverMe', function(){
        $('img').toggleClass('hidden');
    });
});


















