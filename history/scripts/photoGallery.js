$(document).ready(function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	var containerWidth = windowWidth * 0.8;
	var containerHeight = windowHeight * 0.8;
	
	loadImage(currentImage);
	
	$('.imageContainer').append(nextImage + '/' + numImages);
		
});

var images = ['../../locations/greystone/images/01.jpg',
			  '../../locations/greystone/images/02.jpg',
			  '../../locations/greystone/images/03.jpg',
			  '../../locations/greystone/images/04.jpg',
			  '../../locations/greystone/images/05.jpg',
			  '../../locations/greystone/images/06.jpg',
			  '../../locations/greystone/images/07.jpg',
			  '../../locations/greystone/images/08.jpg',
			  '../../locations/greystone/images/09.jpg',
			  '../../locations/greystone/images/10.jpg',
			  '../../locations/greystone/images/11.jpg',
			  '../../locations/greystone/images/12.jpg',
			  '../../locations/greystone/images/13.jpg',
			  '../../locations/greystone/images/14.jpg',
			  '../../locations/greystone/images/15.jpg',
			  '../../locations/greystone/images/16.jpg',
			  '../../locations/greystone/images/17.jpg',
			  '../../locations/greystone/images/18.jpg',
			  '../../locations/greystone/images/19.jpg',
			  '../../locations/greystone/images/20.jpg',
			  '../../locations/greystone/images/21.jpg',
			  '../../locations/greystone/images/22.jpg',
			  '../../locations/greystone/images/23.jpg',
			  '../../locations/greystone/images/24.jpg',
			  '../../locations/greystone/images/25.jpg',
			  '../../locations/greystone/images/26.jpg',
			  '../../locations/greystone/images/27.jpg',
			  '../../locations/greystone/images/28.jpg',
			  '../../locations/greystone/images/29.jpg',
			  '../../locations/greystone/images/30.jpg',
			  '../../locations/greystone/images/31.jpg',
			  '../../locations/greystone/images/32.jpg',
			  '../../locations/greystone/images/33.jpg',
			  '../../locations/greystone/images/34.jpg',
			  '../../locations/greystone/images/35.jpg',
			  '../../locations/greystone/images/36.jpg',
			  '../../locations/greystone/images/37.jpg',
			  '../../locations/greystone/images/main.jpg'];

var numImages = images.length;
var previousImage = numImages - 1;
var currentImage = 0;
var nextImage = currentImage + 1;

function loadImage(image) {
	$('.imageContainer').empty().append('<img src="' + photos[image] + '" width="490px" height="60%">' + '<br>');
}

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

function navigateImage(direction) {
	if (direction === 0) {
		//Sets up navigation when user wants to navigate back to last picture
		if (previousImage == 0) {
			previousImage = numImages - 1;
			nextImage--;
			currentImage = nextImage - 1;
		}
		//Navigate back to last picture
		else if (previousImage >= numImages - 1) {
			currentImage = previousImage;
			previousImage = currentImage - 1;
			nextImage = currentImage + 1;
		}
		else {
			previousImage--;
			currentImage--;
			nextImage--;
		}
		
	}
	else if (direction === 1) {
		//Navigate back to the first picture
		if (nextImage >= numImages) {
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

	$('.imageContainer').append(nextImage + '/' + numImages);
}