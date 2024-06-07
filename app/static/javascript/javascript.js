function closeDoor() {
  document
    .querySelector(".bumble-door-left")
    .classList.remove("open-door-left");
  document.querySelector(".bumble-door-left").classList.add("close-door-left");
  document
    .querySelector(".bumble-door-right")
    .classList.remove("open-door-right");
  document
    .querySelector(".bumble-door-right")
    .classList.add("close-door-right");
  document.querySelector(".menu").classList.remove("hide-menu");
  document.querySelector(".menu").classList.add("view-menu");
  document.querySelector(".page-info").classList.remove("hide-info");
  document.querySelector(".page-info").classList.add("view-info");

  document.querySelector(".door").classList.remove("open-door");
  document.querySelector(".door").classList.add("close-door");
}

function openDoor() {
  document.querySelector(".menu").classList.remove("view-menu");
  document.querySelector(".menu").classList.add("hide-menu");
  document.querySelector(".register").classList.add("hide-reg");
  document.querySelector(".register").classList.remove("view-reg");
  document.querySelector(".page-info").classList.remove("view-info");
  document.querySelector(".page-info").classList.add("hide-info");
  document
    .querySelector(".bumble-door-left")
    .classList.remove("close-door-left");
  document.querySelector(".bumble-door-left").classList.add("open-door-left");
  document
    .querySelector(".bumble-door-right")
    .classList.remove("close-door-right");
  document.querySelector(".bumble-door-right").classList.add("open-door-right");

  document.querySelector(".door").classList.remove("close-door");
  document.querySelector(".door").classList.add("open-door");
}

function viewRegForm() {
  document.querySelector(".menu").classList.remove("view-menu");
  document.querySelector(".menu").classList.add("hide-menu");
  document.querySelector(".register").classList.remove("hide-reg");
  document.querySelector(".register").classList.add("view-reg");
}

function viewAuthForm() {
  document.querySelector(".menu").classList.add("view-menu");
  document.querySelector(".menu").classList.remove("hide-menu");
  document.querySelector(".register").classList.add("hide-reg");
  document.querySelector(".register").classList.remove("view-reg");
}


const textBox = document.querySelector(".text"),
  text = textBox.innerText,
  newHTML = "";
document.querySelector(".text").innerHTML = "";

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

i = -1;
setInterval(function () {
  if (i >= text.length - 1) {
    return false;
  } else {
    ++i;
    if (text[i] == " ") {
      document.querySelector(".text").innerHTML +=
        '<span class = "cursor"> </span>';
        
    }
    if (text[i-1] == " ") {
        sleep(Math.floor(Math.random() * Math.floor(1000)))
        
        document.querySelector(".cursor").remove()
      }
      document.querySelector(".text").innerHTML += text[i];
        // document.querySelector(".cursor").remove()
      
  }
}, 100);
