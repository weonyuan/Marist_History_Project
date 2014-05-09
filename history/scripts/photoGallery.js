$(document).ready(function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	var containerWidth = windowWidth * 0.8;
	var containerHeight = windowHeight * 0.8;

	loadImage(currentImage);
	getFocus();
	
	updateImageInfo();
});

function getFocus() {
	document.getElementById('imageContainer').focus();
}

//Prepares the photos array
function stackPhotos(buildingName, num) {
	var photos = new Array();
	for (var i = 0; i < (num - 1); i++) {
		photos[i] = [buildingName + '/images/' + (i + 1) + '.jpg'];
	}
	photos[num - 1] = [buildingName + '/images/main.jpg'];

	return photos;
}

var photos = stackPhotos(nameLowerCase, images);

var numImages = photos.length;
var previousImage = numImages - 1;
var currentImage = 0;
var nextImage = currentImage + 1;

$(document).keydown(function(e){
    if (e.keyCode == 37) { 
       	navigateImage(0);
       	return false;
    }
    else if (e.keyCode == 39) {
    	navigateImage(1);
    	return false;
    }
});

function loadImage(image) {
	$image = $('#image img');
	width = $image.width();
	height = $image.height();

	$image.css({
	    left: 0 - (width / 2),
	    top: 0 - (height / 2)
	});

	$('#image').empty().append('<img src="' + photos[image] + '" width="100%" height="100%">');
}

function navigateImage(direction) {
	if (direction === 0) {
		//Checks to see if there is only one image
		if (numImages == 0 || numImages == 1) {
			//do nothing
		}
		//Prepares navigation if user navigates to last picture of the array
		else if (previousImage == 0) {
			previousImage = numImages - 1;
			nextImage--;
			currentImage = nextImage - 1;
		}
		//Navigate back to last picture of the array
		else if (previousImage >= numImages - 1) {
			currentImage = previousImage;
			previousImage = currentImage - 1;
			nextImage = currentImage + 1;
		}
		//Navigates to previous picture
		else {
			previousImage--;
			currentImage--;
			nextImage--;
		}
		
	}
	else if (direction === 1) {
		if (numImages == 0 || numImages == 1) {
			//do nothing
		}
		//Navigate back to the first picture
		else if (nextImage >= numImages) {
			previousImage = currentImage;
			currentImage = 0;
			nextImage = currentImage + 1;
		}
		//Increments the pictures when user goes to the next picture
		else {
			previousImage = currentImage;
			currentImage++;
			nextImage++;	
		}
	}
	
	//Displays the picture
	loadImage(currentImage);
	updateImageInfo();
}

function updateImageInfo() {
	$('#imageInfo').empty().append('Image: ' + nextImage + '/' + numImages);
}