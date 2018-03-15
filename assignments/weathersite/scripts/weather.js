// JavaScript Document

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true );

weatherObject.send();

weatherObject.onload = function() {
    
        var weatherInfo = JSON.parse(weatherObject.responseText);
        console.log(weatherInfo);
        
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
}//end of onload  
//Create and populate