function expand(obj){
	let h = "11.4em";
	let expEl = obj.getElementsByClassName('expand')[0];
	if (expEl.style.height == h) expEl.style.height = "0";
	else expEl.style.height = h;
}

