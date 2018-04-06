var output = document.querySelector('section');
var requestURL = 'https://footea.github.io/data/servicemenu.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var jsondata = request.response;
	var repair = jsondata['services'];
	for (var i = 0; i < repair.length; i++) {
        
        
        var myArticle = document.createElement('article');
		var level = document.createElement('h1');
		var cost = document.createElement('h2');
        var first = document.createElement('p');
        var second = document.createElement('p');
        var third = document.createElement('p');
        var fourth = document.createElement('p');
        var last = document.createElement('p');
        
        
        
        
        
        level.textContent = repair[i].name;  
        cost.textContent = repair[i].cost;
        first.textContent = repair[i].first;
        second.textContent = repair[i].second;
        third.textContent = repair[i].third;
        fourth.textContent = repair[i].fourth;
        last.textContent = repair[i].last;
        
        
        
  
        
        
        
		myArticle.appendChild(level);
		myArticle.appendChild(cost);
        myArticle.appendChild(first);
        myArticle.appendChild(second);
        myArticle.appendChild(third);
        myArticle.appendChild(fourth);
        myArticle.appendChild(last);
        
        
        
        
        output.appendChild(myArticle);
	}
};