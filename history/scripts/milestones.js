if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
}
else { // code for IE6, IE5
  xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}
xmlhttp.open('GET', 'milestones.xml', false);
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

var x = xmlDoc.getElementsByTagName('milestone');	
var i = getUrlVars()['id'];

var name = (x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue);
var nameLowerCase = x[i].getAttribute('name');
var feature = x[i].getElementsByTagName('feature')[0].getElementsByTagName('li')[0].childNodes[0].nodeValue;
var info = (x[i].getElementsByTagName('info')[0].childNodes[0].nodeValue);

function display() {
	$('.building-name').append(name);

	for (var j = 0; j < x[i].getElementsByTagName('info').length; j++) {
		info = (x[i].getElementsByTagName('info')[j].childNodes[0].nodeValue);
		$('.antiscroll-inner').append('<p>' + info + '</p>');
	}
	
    for (var k = 0; k < x[i].getElementsByTagName('feature')[0].getElementsByTagName('li').length; k++) {
        feature = x[i].getElementsByTagName('feature')[0].getElementsByTagName('li')[k].childNodes[0].nodeValue;
        $('#feature ul').append('<li>' + feature + '</li>');
    }

	$('.thumbnail').append('<img src="../locations/' + nameLowerCase + '/main.jpg" alt="' + name + '" onerror="imgError(this)" width="120px" height="120px">');
	$('.antiscroll-wrap').antiscroll();
}

function imgError(image) {
    image.onerror = "";
    image.src = "../locations/noMain1.jpg";
    image.alt = "No Building Image";
    return true;
}
