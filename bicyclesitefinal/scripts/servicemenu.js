var output = document.querySelector('section');
var requestURL = 'https://footea.github.io/service/data/servicemenu.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var jsondata = request.response;
	var cities = jsondata['services'];
	for (var i = 0; i < cities.length; i++) {
        
        if (i === 2) {continue;}
        var myArticle = document.createElement('article');
		var level = document.createElement('h2');
		var year = document.createElement('p');
        var motto = document.createElement('p');
        var population = document.createElement('p');
        var avgrain = document.createElement('p');
        var eventlist = document.createElement('ul');
        var townimg = document.createElement('img');
        
        
        
        
        
        city.textContent = services[i].name;  
        year.textContent = 'Established: ' + services[i].yearFounded;
        motto.textContent = '"' + cities[i].motto + '"';
        population.textContent ='Population: ' + cities[i].currentPopulation;
        avgrain.textContent = 'Average Rainfall: ' + cities[i].averageRainfall + '"';
        
        
        
        var currentEvents = services[i].events;
        for (var j = 0; j < currentEvents.length; j++) {
            var listItem = document.createElement('li'); 
            listItem.textContent = currentEvents[j];
        eventlist.appendChild(listItem);
    }
        
        
        
		myArticle.appendChild(city);
		myArticle.appendChild(motto);
        myArticle.appendChild(year);
        myArticle.appendChild(population);
        myArticle.appendChild(avgrain);
        myArticle.appendChild(eventlist);
        
        
        
        
        output.appendChild(myArticle);
	}
};