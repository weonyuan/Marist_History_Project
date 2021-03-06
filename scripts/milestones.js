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
var milestone = x[i].getElementsByTagName('id')[0].childNodes[0].nodeValue;
var feature = x[i].getElementsByTagName('feature')[0].getElementsByTagName('li')[0].childNodes[0].nodeValue;

function display() {
	$('.milestone-name').append(name);

	for (var j = 0; j < x[i].getElementsByTagName('feature')[0].getElementsByTagName('li').length; j++) {
		feature = x[i].getElementsByTagName('feature')[0].getElementsByTagName('li')[j].childNodes[0].nodeValue;
		$('#info ul').append('<li>' + feature + '</li>');
	}

	$('.milestone-cover').append('<img src="../images/milestones/' + milestone + '.jpg" alt="' + name + '" onerror="imgError(this)" width="100%" height="200px">');
}

function imgError(image) {
    image.onerror = "";
    image.src = "../images/milestones/noCover.jpg";
    image.alt = "No Milestone Cover";
    return true;
}