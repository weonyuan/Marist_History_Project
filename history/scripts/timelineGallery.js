var currentName = "";

$(document).ready(function(){
		var dates = [
			{
				"marker": "2010",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2010-2012.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#2010"></div>'
			},
			{
				"marker": "2000",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2000-2009.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#2000"></div>'
			},
			{
				"marker": "1994",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1994-1999.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1994"></div>'
			},
			{
				"marker": "1980",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1980-1993.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1980"></div>'
			},
			{
				"marker": "1970",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1970-1979.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1970"></div>'		
			},
			{
				"marker": "1958",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1958-1969.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1958"></div>'
			},
			{
				"marker": "1946",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1946-1957.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1946"></div>'	
			},
			{
				"marker": "1930",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1930-1945.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1930"></div>'
			},
			{
				"marker": "1905",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1905-1929.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1905"></div>'
			},
			{
				"marker": "1904",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1904.jpg); height: 530px;"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1904"></div>'
			}

		];
    
        $(".timeline-container").fancyTimeline({
        	initPos: 0,
        	data: dates
        });
        
        $(".timeline-container").append(function() {
        	$(this).append('<div class="hoverBox" style="display: none;"><span>Hover over a building</span></div>');
        	$(".hoverBox:hidden").delay(500).fadeIn(800);
        });
        
		$("area.location").hover(function() {
			$(".hoverBox span").empty();
			currentName = $(this).attr("alt");
			$(".hoverBox span").append(currentName);
			$(this).css("cursor: hand");
		}, function() {
			$(".hoverBox span").empty();
		});
});
