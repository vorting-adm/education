function closeDoor(){
	document.querySelector('.bumble-door-left').classList.remove('open-door-left')
	document.querySelector('.bumble-door-left').classList.add('close-door-left')
	document.querySelector('.bumble-door-right').classList.remove('open-door-right')
	document.querySelector('.bumble-door-right').classList.add('close-door-right')
	document.querySelector('.menu').classList.remove('hide-menu')
	document.querySelector('.menu').classList.add('view-menu')
	document.querySelector('.page-info').classList.remove('hide-info')
	document.querySelector('.page-info').classList.add('view-info')
}

function openDoor(){
	document.querySelector('.menu').classList.remove('view-menu')
	document.querySelector('.menu').classList.add('hide-menu')
	document.querySelector('.register').classList.add('hide-reg')
	document.querySelector('.register').classList.remove('view-reg')
	document.querySelector('.page-info').classList.remove('view-info')
	document.querySelector('.page-info').classList.add('hide-info')
	document.querySelector('.bumble-door-left').classList.remove('close-door-left')
	document.querySelector('.bumble-door-left').classList.add('open-door-left')
	document.querySelector('.bumble-door-right').classList.remove('close-door-right')
	document.querySelector('.bumble-door-right').classList.add('open-door-right')

}

function viewRegForm(){
	document.querySelector('.menu').classList.remove('view-menu')
	document.querySelector('.menu').classList.add('hide-menu')
	document.querySelector('.register').classList.remove('hide-reg')
	document.querySelector('.register').classList.add('view-reg')
	
}

function viewAuthForm(){
	document.querySelector('.menu').classList.add('view-menu')
	document.querySelector('.menu').classList.remove('hide-menu')
	document.querySelector('.register').classList.add('hide-reg')
	document.querySelector('.register').classList.remove('view-reg')
	
}