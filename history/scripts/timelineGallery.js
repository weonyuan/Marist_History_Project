$(document).ready(function(){
		var dates = [
			{
				"marker": "1904",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1904.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/greystone.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/kieran.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "1905",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1905-1929.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/greystone.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/kieran.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Greenhouse" class="icon greenhouse"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/greenhouse.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon farm"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/farm.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon cemetery"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/cemetery.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="MacPherson" class="icon macpherson"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/macpherson.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon oldMarian"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/marian.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Canary" class="icon canary"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/canary.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon stMarys"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stmarys.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "1930",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1930-1945.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/greystone.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/kieran.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Greenhouse" class="icon greenhouse"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/greenhouse.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon farm"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/farm.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon cemetery"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/cemetery.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="MacPherson" class="icon macpherson"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/macpherson.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon oldMarian"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/marian.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Canary" class="icon canary"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/canary.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon stMarys"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stmarys.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATION
							'<span name="Novitiate" class="icon novitiate"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/novitiate.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "1946",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1946-1957.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/greystone.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/kieran.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon1 farm"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/farm.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon1 cemetery"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/cemetery.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="MacPherson" class="icon1 macpherson"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/macpherson.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon1 oldMarian"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/marian.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Canary" class="icon1 canary"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/canary.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon1 stMarys"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stmarys.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Novitiate" class="icon1 novitiate"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/novitiate.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Brothers Dining/Study Area" class="icon1 studyArea"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/studyArea.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Chapel" class="icon1 chapel"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/chapel.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Adrian Building" class="icon1 adrian"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/adrian.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>'
							
			},
			{
				"marker": "1958",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1958-1969.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/greystone.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/kieran.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon1 farm"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/farm.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon1 cemetery"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/cemetery.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon1 oldMarian"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/marian.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Canary" class="icon1 canary"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/canary.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon1 stMarys"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stmarys.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Brothers Dining/Study Area" class="icon1 studyArea"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/studyArea.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Chapel" class="icon1 chapel"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/chapel.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Adrian Building" class="icon1 adrian"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/adrian.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Leo Hall" class="icon leo"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/leo.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon sheahan"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/sheahan.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon donnelly"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/donnelly.html\' })"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "1970",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1970-1979.jpg)"></div>'
			},
			{
				"marker": "1980",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1980-1993.jpg)"></div>'
			},
			{
				"marker": "1994",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1994-1999.jpg)"></div>'
			},
			{
				"marker": "2000",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2000-2009.jpg)"></div>'
			},
			{
				"marker": "2010",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2010-2012.jpg)"></div>'
			}
		];
    
        $(".timeline-container").fancyTimeline({
        	initPos: 0,
        	data: dates
        });
    });