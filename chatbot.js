// Chat bot script
function startbot() {
	var headID = document.getElementsByTagName('head')[0];
	var newcss = document.createElement('link');
	var newscript = document.createElement('script');
	newcss.rel = 'stylesheet';
	newcss.type = 'test/css';
	window._botUsername = '853525';
	window._botName = 'WolfLTD';
	newcss.href = 'https://rebot.me/assets/css/bot.css';
	newscript.src = 'https://rebot.me/assets/js/bot.js';
	newscript.type = 'text/javascript';
	headID.appendChild(newcss);
	headID.appendChild(newscript);
}

// Modal Box Pop up
var modal = document.querySelector(".modal");
var close = document.querySelector(".close");

function toggle() {
	modal.classList.toggle("show-modal");
}

function windowsOnClick(event) {
	if(event.target == modal){
		toggle();
	}
}

function popup() {
	toggle();
}

close.addEventListener("click", toggle);
window.addEventListener("click", windowsOnClick);