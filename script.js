// TUMPERO

var tumpero_page = document.getElementById('tumpero_page')
var billboard_tumpero = document.getElementById('billboard_tumpero')
var exit = document.getElementById('exit')

billboard_tumpero.addEventListener('click', () => {
	tumpero_page.classList.add('open')
	tumpero_page.classList.remove('close')
})

exit.addEventListener('click', () => {
	tumpero_page.classList.add('close')
	tumpero_page.classList.remove('open')

})


// CODE PORTFOLIO

var quase_page = document.getElementById('quase_page')
var code_quase = document.getElementById('code_quase')
var exit2 = document.getElementById('exit2')

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
var carouselImages2 = document.querySelectorAll('#carousel_slide2 img')

var prevBtn = document.querySelector('#prevBtn')
var nextBtn = document.querySelector('#nextBtn')

// counter

var counter2 = 1
var size2 = carouselImages2[0].clientHeight

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
	if (carouselImages2[counter2].id === 'lastClone2'){
		carouselSlide2.style.transition = 'none'
		counter2 = carouselImages2.length -2 
		carouselSlide2.style.transform = 'translateY(' + (-size2*counter2) +'px)'
	}
	if (carouselImages2[counter2].id === 'firstClone2'){
		carouselSlide2.style.transition = 'none'
		counter2 = carouselImages2.length - counter2 
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







// Function to click the buttons
function behancedown() {
	document.getElementById("buttonbehance").src = "Images/ButtonBehance 1.png"
}
function behanceup() {
	document.getElementById("buttonbehance").src = "Images/ButtonBehance 0.png"
}

function githubdown() {
	document.getElementById("buttongithub").src = "Images/ButtonGithub 1.png"
}
function githubup() {
	document.getElementById("buttongithub").src = "Images/ButtonGithub 0.png"
}

function linkedindown() {
	document.getElementById("buttonlinkedin").src = "Images/ButtonLinkedin 1.png"
}
function linkedinup() {
	document.getElementById("buttonlinkedin").src = "Images/ButtonLinkedin 0.png"
}

function maildown() {
	document.getElementById("buttonmail").src = "Images/ButtonMail 1.png"
}
function mailup() {
	document.getElementById("buttonmail").src = "Images/ButtonMail 0.png"
}


















