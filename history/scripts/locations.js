if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
}
else { // code for IE6, IE5
  xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}
xmlhttp.open('GET', 'locations.xml', false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML; 

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var x = xmlDoc.getElementsByTagName('building');			
var i = getUrlVars()['id'];

var name = (x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue);
var nameLowerCase = x[i].getAttribute('name');
var date = (x[i].getElementsByTagName('date')[0].childNodes[0].nodeValue);
var desc = (x[i].getElementsByTagName('desc')[0].childNodes[0].nodeValue);
var info = (x[i].getElementsByTagName('info')[0].childNodes[0].nodeValue);
var images = (x[i].getElementsByTagName('images')[0].childNodes[0].nodeValue);

function display() {
	$('.name').append(name);
	$('.date').append('Built in ' + date);
	$('.desc').append(desc);

	//$('.antiscroll-inner').append('<p>' + info + '</p>');
	for (var j = 0; j < x[i].getElementsByTagName('info').length; j++) {
		info = (x[i].getElementsByTagName('info')[j].childNodes[0].nodeValue);
		$('.antiscroll-inner').append('<p>' + info + '</p>');
	}
	
	$('.thumbnail').append('<img src="../locations/' + nameLowerCase + '/main.jpg">');
	$('.antiscroll-wrap').antiscroll();
}

