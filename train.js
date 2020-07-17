function originDropDown() {
  document.getElementById("destination-dropdown").classList.toggle("hide");
  document.getElementById("origin-dropdown").classList.toggle("show");
}
function filterOrigin() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("origin-input");
  filter = input.value.toUpperCase();
  div = document.getElementById("origin-dropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function destinationDropDown() {
  document.getElementById("origin-dropdown").classList.toggle("hide");
  document.getElementById("destination-dropdown").classList.toggle("show");
}

function filterDestination() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("destination-input");
  filter = input.value.toUpperCase();
  div = document.getElementById("destination-dropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

var stations = {};
var sData;

fetch('https://mnorthstg.prod.acquia-sites.com/wse/Mymnr/v5/api/stations/9de8f3b1-1701-4229-8ebc-346914043f4a/').then(resp => resp.json()).then(json => {
  sData = json;

	let origin = document.getElementById('origin-dropdown');
	let dest = document.getElementById('destination-dropdown');

	for (let station of json){
		stations[station.Name] = station;
		let html = `<option value="${station.Name}">${station.Name}</option>`;
		origin.innerHTML += html;
		dest.innerHTML += html;
	}
});

function mod(n, m) {
  return ((n % m) + m) % m;
}

let time = document.getElementById('time-dropdown');
for (var i = -1; i < 23; i++){
  time.innerHTML += '<option>' + (mod(i,12)+1) + (i < 12 ? ' am' : ' pm') + "</option>";
}


var map = L.map('map').setView([41.5, -73], 8);

L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=IbN90CLdKmgfvvi2lna8', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

//Disable zoom and dragging

map.dragging.disable();
map.zoomControl.remove();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();

async function fare(){
	let orig = document.getElementById('origin-dropdown');
	let dest = document.getElementById('destination-dropdown');
	let time = document.getElementById('time-dropdown');

	if(orig.value != '' && dest.value != '' && time.value != ''){
		// console.log(orig.value, dest.value, time.value);
		origin = stations[orig.value];
		destination = stations[dest.value];
		console.log(origin, destination);
		let resp = await fetch(`https://mnorthstg.prod.acquia-sites.com/wse/fares/v3/${origin.Code}/${destination.Code}/9de8f3b1-1701-4229-8ebc-346914043f4a/fares.json`);
		try {
			let json = await resp.json();
			document.getElementById('fare-stuff').innerHTML = json;
		}
		catch {
			document.getElementById('fare-stuff').innerHTML = "No Fare Available";
		}
	}

}