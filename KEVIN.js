
/* TICKET INSTRUCTIONS
var request = new XMLHttpRequest();
request.open('GET', 'https://mnorthstg.prod.acquia-sites.com/wse/Fares/v3/9de8f3b1-1701-4229-8ebc-346914043f4a/buyingtickets.json', true);
request.onload = function(){
  var data = JSON.parse(this.response);
  console.log(data);
}

request.send();
*/

/*
var stationRequest = new XMLHttpRequest();
stationRequest.open('GET', 'https://mnorthstg.prod.acquia-sites.com/wse/Mymnr/v5/api/stations/9de8f3b1-1701-4229-8ebc-346914043f4a/', true);
stationRequest.onload = function(){
  var data = JSON.parse(this.response);
  console.log(data);
}
stationRequest.send();
*/




/*
var departBy = new XMLHttpRequest();
departBy.open('GET', 'https://mnorthstg.prod.acquia-sites.com/wse/trains/v4/24/46/DepartBy/2020/7/16/1200/9de8f3b1-1701-4229-8ebc-346914043f4a/Tripstatus.json ', true);
departBy.onload = function(){
  var data = JSON.parse(this.response);
  console.log(data.GetTripStatusJsonResult[0]);
}
departBy.send();
*/