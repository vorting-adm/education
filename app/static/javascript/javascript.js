function closeDoor(){
	document.querySelector('.bumble-door-left').classList.remove('open-door-left')
	document.querySelector('.bumble-door-left').classList.add('close-door-left')
	document.querySelector('.bumble-door-right').classList.remove('open-door-right')
	document.querySelector('.bumble-door-right').classList.add('close-door-right')
	document.querySelector('.menu').classList.remove('hide-menu')
	document.querySelector('.menu').classList.add('view-menu')
	document.querySelector('.page-info').classList.remove('hide-info')
	document.querySelector('.page-info').classList.add('view-info')

    document.querySelector('.door').classList.remove('open-door')
	document.querySelector('.door').classList.add('close-door')
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

	document.querySelector('.door').classList.remove('close-door')
	document.querySelector('.door').classList.add('open-door')

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

let textBox = document.querySelector('.screen'),
    text    = textBox.innerText,
    newHTML = '';

for(i = 0; i < text.length; i++){
    newHTML += '<span>'+text[i]+'<span>';
}
textBox.innerHTML = newHTML;

let spans   = textBox.querySelectorAll('span'),
    count   = 0,
    timeout = 0;

function typing_text(){
    spans[count].classList.add('visible');
    if(spans[count].innerText == ' ' || spans[count].innerHTML == ' '){
        timeout = Math.floor(Math.random() * Math.floor(1000));
        spans[count].classList.add('cursor');
    }else{
        timeout = 50;
    }

    if (count < text.length - 1){
        setTimeout(() => {
            spans[count].classList.remove('cursor');
            count ++;
            typing_text();
        }, timeout);
    }
}

typing_text();