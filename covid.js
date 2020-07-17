var symptoms = "", contact = "";

var stayHomeModal = document.getElementById("stay-home-modal");
var okModal = document.getElementById("ok-modal");
var stayHomeSpan = document.getElementsByClassName("close")[0];
var okSpan = document.getElementsByClassName("close")[1];

document.getElementById("submit").onclick = function(){
  if (symptoms=="y" || contact=="y"){
    stayHomeModal.style.display="block";
  }
  else {
    okModal.style.display = "block";
  }
}

stayHomeSpan.onclick = function(){
  modal.style.display = "none";
}
okSpan.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(){
  stayHomeModal.style.display="none";
  okModal.style.display = "none";
}

function choice(obj){
	console.log(obj);
	obj.classList.add('chosen');
	let parts = obj.id.split('-');
	this[parts[1]] = parts[0]
	console.log(symptoms, contact);
	let buttons = obj.parentNode.getElementsByTagName('button')
	let other = buttons[0] == obj ? buttons[1] : buttons[0]
	other.classList.remove('chosen');
}