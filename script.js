// MENU
var burger = getElementById('burger')
var menu = getElementById('menu') 

menu.addEventListener('click', () => {
	menu.classList.toggle('open')
	burger.classList.toggle('spin')
})



// Function to toggle billboard and code images
$(function(){
    debugger;
    $(document).on('mouseenter', '#hoverMe', function(){
        $('img').toggleClass('hidden');
    });
});







// Function to click the buttons
function whatsappdown() {
	document.getElementById("buttonwhatsapp").src = "Images/ButtonWhatsapp 1.png"
}
function whatsappup() {
	document.getElementById("buttonwhatsapp").src = "Images/ButtonWhatsapp 0.png"
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

























