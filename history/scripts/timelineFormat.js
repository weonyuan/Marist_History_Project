/*!
 *	TimeLine v.1.2.1
 *	
 *	Fancy-TimeLine is free software: you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation, either version 3 of the License, or
 *	(at your option) any later version.
 *	
 *	Fancy-TimeLine is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *	
***/
var initPos = 0;

(function($) {  
	$.fn.fancyTimeline = function(params) {
		// global vars
		var actualPos = 0;
		var maxPos = 0;
		var itemWidth = 0;


		// default values
        var marginLeft = 0;
        itemWidth = 960;
        var dateWidth = 150;
        
        // append html
        html= '<div id="timeline" class="timeline">';
        html+= '	<div id="timeline-slider"></div>';
        html+= '	<div>';
        html+= '    	<div id="timeline-dates-line"></div>';
        html+= '    	<div id="timeline-dates"></div>';
        html+= '	</div>';
        html+= '</div>';
		
		$(this).append(html);
		
		var methods = {
			positionTo: function(id){
				// get new position
				var middle = (window.innerWidth/2);
				var dateOffset = $("#pointer-date-"+ id).offset();
				
				var diff = (dateOffset.left - middle);
				var sliderOffset = $("#timeline-dates").offset();
				
				var newLeft = ((sliderOffset.left)-diff)-($("#timeline").offset().left);
			},
			sliderTo: function(id){
				// back to default
				$('.timeline-item').removeClass("active");
				$('.pointer-date').empty();
				$('.date-focus').toggleClass("date-focus", 100);
				
				// get new position
				var middle = (window.innerWidth/2);
				var dateOffset = $("#date-"+ id).offset();
				
				var diff = (dateOffset.left - middle);
				var sliderOffset = $("#timeline-slider").offset();
				
				var newLeft = ((sliderOffset.left)-diff)-($("#timeline").offset().left)-(itemWidth/2);
				
				methods.positionTo(id);
				// move to new position
				$("#timeline-slider").animate({left: newLeft}, 250);
				$("#date-"+ id).toggleClass("active", 200);
				$("#pointer-date-"+ id).append("<div class='dot' />");
				$("#pointer-"+ id).toggleClass("date-focus", 100);

				// update the position
				actualPos = id;
			},
			moveForward: function(){
				// validate position
				if(actualPos < maxPos){
					var sum = ++actualPos;
					methods.sliderTo( sum );
				}else{
					methods.sliderTo( 0 );
				}
			},
			moveBackward: function(){
				// validate position
				if(actualPos > 0){
					methods.sliderTo( actualPos - 1 );
				}else{
					methods.sliderTo( maxPos );
				}
			}
		};
		
		var dates = "";
		var pointers = "";
		
		var dataObjs = params.data;
		
		maxPos = dataObjs.length-1;
		$("#middle").css("left", (window.innerWidth/2)-($("#timeline").offset().left));
		// Slider width calc
		var sliderLength = ((marginLeft + itemWidth) * (dataObjs.length+1));
		$("#timeline-slider").css("width", sliderLength);
	
		// Dates container width calc
		$("#timeline-dates").css("width", 960);
		var i=0;

		// Data input
		for (i=0; i<dataObjs.length; i++){
			var dateObj = dataObjs[i];
		
			var dateStr = "";
		
			if(dateObj.type == "default"){
				dateStr += '<div id="date-'+ i +'" class="timeline-item item-default" >';
				dateStr += 	'<div class="timeline-item-content" >';
				dateStr +=      dateObj.content;
				dateStr +=  '</div>';
				dateStr += '</div>';
			}
		
			dates += dateStr;
		
			pointers += '<div class="date-container">';
			pointers +=     '<div class="pointer-date" id="pointer-date-'+ i +'" />';
			
			if ((i+1) != dataObjs.length) {
				pointers +=  '<div class="pointer-date-separator" /><br/>';
			}
			else {
				pointers +=  '<div class="pointer-date-separator-last" /><br/>';
			}
			
			pointers +=     '<a class="date" id="pointer-'+ i +'">';
			pointers +=         dateObj.marker;
			pointers +=     '</a>';
			pointers += '</div>';
		}
		$('#timeline-slider').html(dates);
		$('#timeline-dates').html(pointers);
	
		$('.date').bind('click', function(){
			var position = $(this).attr('id').split('-');
			methods.sliderTo(position[1]);
		});

		$('.pointer-date').bind('click', function(){
			var position = $(this).attr('id').split('date-');
			methods.sliderTo(position[1]);
		});

		$('.timeline-item-i').bind('click', function(){
			$(this).next().toggle();
		});
	
		// Initial position
		methods.sliderTo(initPos);
        
    };  
})(jQuery);