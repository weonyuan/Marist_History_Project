var currentName = "";

$(document).ready(function(){
		var dates = [
			/*{
				"marker": "1904",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1904.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},*/
			{
				"marker": "1904",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1904.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1904"></div>'
			},
			/*{
				"marker": "1905",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1905-1929.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1905"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Greenhouse" class="icon greenhouse"><a href="locations/greenhouse.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon farm"><a href="locations/farm.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon cemetery"><a href="locations/cemetery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="MacPherson" class="icon macpherson"><a href="locations/macpherson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon oldMarian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cannery" class="icon cannery"><a href="locations/cannery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon stMarys"><a href="locations/stmarys.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},*/
			{
				"marker": "1905",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1905-1929.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1905"></div>'
			},
			/*{
				"marker": "1930",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1930-1945.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1930"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Greenhouse" class="icon greenhouse"><a href="locations/greenhouse.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon farm"><a href="locations/farm.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon cemetery"><a href="locations/cemetery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="MacPherson" class="icon macpherson"><a href="locations/macpherson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon oldMarian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cannery" class="icon cannery"><a href="locations/cannery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon stMarys"><a href="locations/stmarys.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATION
							'<span name="Novitiate" class="icon novitiate"><a href="locations/novitiate.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},*/
			{
				"marker": "1930",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1930-1945.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1930"></div>'
			},
			/*{
				"marker": "1946",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1946-1957.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon farm"><a href="locations/farm.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon cemetery"><a href="locations/cemetery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="MacPherson" class="icon macpherson"><a href="locations/macpherson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon oldMarian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cannery" class="icon cannery"><a href="locations/cannery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon stMarys"><a href="locations/stmarys.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Novitiate" class="icon novitiate"><a href="locations/novitiate.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Brothers Dining/Study Area" class="icon studyArea"><a href="locations/studyArea.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Our Lady Seat of Wisdom Chapel" class="icon chapel"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Adrian Building" class="icon adrian"><a href="locations/adrian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
							
			},*/
			{
				"marker": "1946",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1946-1957.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1946"></div>'
							
			},
			/*{
				"marker": "1958",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1958-1969.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon farm"><a href="locations/farm.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon cemetery"><a href="locations/cemetery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon oldMarian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cannery" class="icon cannery"><a href="locations/cannery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon stMarys"><a href="locations/stmarys.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Novitiate" class="icon novitiate"><a href="locations/novitiate.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Brothers Dining/Study Area" class="icon studyArea"><a href="locations/studyArea.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Our Lady Seat of Wisdom Chapel" class="icon chapel"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Adrian Building" class="icon adrian"><a href="locations/adrian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Leo Hall" class="icon leo"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon sheahan"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon donnelly"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},*/
			{
				"marker": "1958",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1958-1969.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1958"></div>'
			},
			/*{
				"marker": "1970",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1970-1979.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon marian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Brothers Dining/Study Area" class="icon studyArea1"><a href="locations/studyArea.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Our Lady Seat of Wisdom Chapel" class="icon chapel1"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon leo1"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon sheahan1"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon donnelly1"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="James J. McCann Recreational Center" class="icon mccann"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon champagnat"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon studentCenter"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon dyson"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon longview"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon lowerNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon upperNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon byrne"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant Studio" class="icon steelPlant"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Ann&rsquo;s Hermitage" class="icon stAnns"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
							
			},*/
			{
				"marker": "1970",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1970-1979.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1970"></div>'
							
			},
			/*{
				"marker": "1980",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1980-1993.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon marian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Brothers Dining/Study Area" class="icon studyArea1"><a href="locations/studyArea.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Our Lady Seat of Wisdom Chapel" class="icon chapel1"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon leo1"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon sheahan1"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon donnelly1"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="James J. McCann Recreational Center" class="icon mccann"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon champagnat"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon studentCenter"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon dyson"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon longview"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon lowerNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon upperNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon byrne"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant Studio" class="icon steelPlant"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Ann&rsquo;s Hermitage" class="icon stAnns"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Foy Townhouses" class="icon foy"><a href="locations/foy.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Gartland Commons" class="icon gartland"><a href="locations/gartland.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},*/
			{
				"marker": "1980",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1980-1993.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1980"></div>'
			},
			/*{
				"marker": "1994",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1994-1999.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon marian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Our Lady Seat of Wisdom Chapel" class="icon chapel1"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon leo1"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon sheahan1"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon donnelly1"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="James J. McCann Recreational Center" class="icon mccann"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon champagnat"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon studentCenter"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon dyson"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon longview"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon lowerNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon upperNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon byrne"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant Studio" class="icon steelPlant"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Ann&rsquo;s Hermitage" class="icon stAnns"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Foy Townhouses" class="icon foy"><a href="locations/foy.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Gartland Commons" class="icon gartland"><a href="locations/gartland.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="West Cedar Townhouses" class="icon lowerwestCedar"><a href="locations/westCedar.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Midrise Hall" class="icon midrise"><a href="locations/midrise.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},*/
			{
				"marker": "1994",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1994-1999.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#1994"></div>'
			},
			/*{
				"marker": "2000",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2000-2009.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone1"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters1"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran1"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon marian1"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Our Lady Seat of Wisdom Chapel" class="icon chapel1"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon leo1"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon sheahan1"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon donnelly1"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="James J. McCann Recreational Center" class="icon mccann"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon champagnat"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon studentCenter"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon dyson"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon longview"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon lowerNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon upperNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon byrne"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant Studio" class="icon steelPlant"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Ann&rsquo;s Hermitage" class="icon stAnns"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Foy Townhouses" class="icon foy"><a href="locations/foy.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Gartland Commons" class="icon gartland"><a href="locations/gartland.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lower West Cedar Townhouses" class="icon lowerwestCedar"><a href="locations/westcedar.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Midrise Hall" class="icon midrise"><a href="locations/midrise.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="James A. Cannavino Library" class="icon library"><a href="locations/library.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Tenney Stadium" class="icon tenney"><a href="locations/tenney.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Hall" class="icon fontaineHall"><a href="locations/fontaine.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fern Tor Arboretum" class="icon fernTor"><a href="locations/fernTor.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},*/
			{
				"marker": "2000",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2000-2009.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#2000"></div>'
			},
			/*{
				"marker": "2010",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2010-2012.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone2"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peter&rsquo;s" class="icon stPeters2"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran2"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon marian2"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Our Lady Seat of Wisdom Chapel" class="icon chapel2"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon leo2"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon sheahan2"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon donnelly2"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="James J. McCann Recreational Center" class="icon mccann1"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon champagnat1"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon studentCenter1"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon dyson1"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell1"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon longview1"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon lowerNew1"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon upperNew1"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon byrne1"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex1"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant Studio" class="icon steelPlant1"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Ann&rsquo;s Hermitage" class="icon stAnns1"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Foy Townhouses" class="icon foy1"><a href="locations/foy.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Gartland Commons" class="icon gartland1"><a href="locations/gartland.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lower West Cedar Townhouses" clolass="icon lowerwestCedar1"><a href="locations/westcedar.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Midrise Hall" class="icon midrise1"><a href="locations/midrise.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="James A. Cannavino Library" class="icon library1"><a href="locations/library.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Tenney Stadium" class="icon tenney1"><a href="locations/tenney.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Hall" class="icon fontaineHall1"><a href="locations/fontaine.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fern Tor Arboretum" class="icon fernTor1"><a href="locations/fernTor.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATION
							'<span name="Hancock Center" class="icon hancock"><a href="locations/hancock.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			}*/
			{
				"marker": "2010",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2010-2012.jpg)"><img src="images/invisible.png" class="map" width="960" height="530" usemap="#2010"></div>'
			}
		];
    
        $(".timeline-container").fancyTimeline({
        	initPos: 0,
        	data: dates
        });
        
        $("area.location").click(function() {
        	var count = 
            api_images = ['locations/greystone/images/*'];
            api_titles = ['Title Dogs', 'Title Yard 1', 'Title Yard 2', 'Title Yard 3'];
            api_descriptions = ['Dogs', 'Yard 1', 'Yard 2', 'Yard 3'];
            $.prettyPhoto.open(api_images, api_titles, api_descriptions);
        });
        
        $("area.location").pageslide({
        	direction: "left",
        	modal: false
    	});
        
        $(".timeline-container").append(function() {
        	$(this).append('<div class="hoverBox" style="display: none;"><span>Hover over a building</span></div>');
        	$(".hoverBox:hidden").delay(500).fadeIn(800);
        });
        
		$("area.location").hover(function() {
			$(".hoverBox span").empty();
			currentName = $(this).attr("alt");
			$(".hoverBox span").append(currentName);
		}, function() {
			$(".hoverBox span").empty();
		});
});
