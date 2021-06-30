// // var button = document.getElementsByClassName('btn');
// var city = document.getElementsByClassName('enterprofile');
// // var name=document.getElementsByClassName('name');
// // var des= document.getElementsByClassName('description');
// // var temp= document.getElementsByClassName('temperature');
// // var img= document.getElementById('profilepic');
// console.log(city);
// function startt(){

const key = 'b81251dbf378a1ac5006c18c552af915';
if(key=='b81251dbf378a1ac5006c18c552af915') document.getElementById('temp').innerHTML ;
// var cityID= document.getElementsByClassName("enterprofile");
// var cityID = document.getElementsByClassName("enterprofile").value;
// console.log(cityID);

function weatherr( cityID ) {
	cityID=document.getElementsByClassName("enterprofile")[0].value;
	console.log(document.getElementsByClassName("enterprofile")[0].value);
console.log(cityID);
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) 
	.then(function(data) {
		// console.log(cityID);
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
    var description = data.weather[0].description; 
    
    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = data.name;
	})
	.catch(function() {
		alert("Wrong city name");
	});
}

// var cityID = document.getElementsByClassName("enterprofile")[0].value;
// console.log(cityID);
// var x= document.getElementsByClassName('enterprofile');
// console.log(x);
// window.onload = function() {
//   var cityID = document.getElementsByClassName("enterprofile");
// 	weatherr( 'mumbai' );
// }    