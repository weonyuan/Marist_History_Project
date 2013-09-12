var button = false;
var active = true;
var closeActive = false;

$(document).ready(function(){
		var dates = [
			{
				"marker": "1904",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1904.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "1905",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1905-1929.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Greenhouse" class="icon greenhouse"><a href="locations/greenhouse.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon farm"><a href="locations/farm.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon cemetery"><a href="locations/cemetery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="MacPherson" class="icon macpherson"><a href="locations/macpherson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon oldMarian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cannery" class="icon cannery"><a href="locations/cannery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon stMarys"><a href="locations/stmarys.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "1930",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1930-1945.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
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
			},
			{
				"marker": "1946",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1946-1957.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon1 farm"><a href="locations/farm.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon1 cemetery"><a href="locations/cemetery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="MacPherson" class="icon1 macpherson"><a href="locations/macpherson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon1 oldMarian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cannery" class="icon1 cannery"><a href="locations/cannery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon1 stMarys"><a href="locations/stmarys.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Novitiate" class="icon1 novitiate"><a href="locations/novitiate.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Brothers Dining/Study Area" class="icon1 studyArea"><a href="locations/studyArea.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Chapel" class="icon1 chapel"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Adrian Building" class="icon1 adrian"><a href="locations/adrian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
							
			},
			{
				"marker": "1958",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1958-1969.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Farm" class="icon1 farm"><a href="locations/farm.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cemetery" class="icon1 cemetery"><a href="locations/cemetery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Old Marian" class="icon2 oldMarian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Cannery" class="icon2 cannery"><a href="locations/cannery.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Marys" class="icon2 stMarys"><a href="locations/stmarys.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Novitiate" class="icon2 novitiate"><a href="locations/novitiate.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Brothers Dining/Study Area" class="icon2 studyArea"><a href="locations/studyArea.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Chapel" class="icon2 chapel"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Adrian Building" class="icon2 adrian"><a href="locations/adrian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Leo Hall" class="icon leo"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon sheahan"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon donnelly"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "1970",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1970-1979.jpg)"></div>' +
							'<span name="Greystone" class="icon3 greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon3 stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon3 kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon3 marian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Brothers Dining/Study Area" class="icon3 studyArea1"><a href="locations/studyArea.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Chapel" class="icon3 chapel1"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon3 leo1"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon3 sheahan1"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon3 donnelly1"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="McCann Recreational Center" class="icon3 mccann"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon3 champagnat"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon3 studentCenter"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon3 dyson"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon3 lowell"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon3 longview"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lower Townhouses" class="icon3 lowerNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon3 upperNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon3 byrne"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon3 fontaineAnnex"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant" class="icon3 steelPlant"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Anns Hermitage" class="icon3 stAnns"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
							
			},
			{
				"marker": "1980",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1980-1993.jpg)"></div>' +
							'<span name="Greystone" class="icon3 greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon3 stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon3 kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon3 marian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Brothers Dining/Study Area" class="icon3 studyArea1"><a href="locations/studyArea.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Chapel" class="icon3 chapel1"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon3 leo1"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon3 sheahan1"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon3 donnelly1"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="McCann Recreational Center" class="icon3 mccann"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon3 champagnat"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon3 studentCenter"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon3 dyson"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon3 lowell"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon3 longview"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lower Townhouses" class="icon3 lowerNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon3 upperNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon3 byrne"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon3 fontaineAnnex"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant" class="icon3 steelPlant"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Anns Hermitage" class="icon3 stAnns"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="Foy Townhouses" class="icon3 foy"><a href="locations/foy.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Gartland Townhouses" class="icon3 gartland"><a href="locations/gartland.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "1994",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1994-1999.jpg)"></div>' +
							'<span name="Greystone" class="icon3 greystone"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon3 stPeters"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon3 kieran"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon3 marian"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Chapel" class="icon4 chapel1"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon4 leo1"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon4 sheahan1"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon4 donnelly1"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="McCann Recreational Center" class="icon4 mccann"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon4 champagnat"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon4 studentCenter"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon4 dyson"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon4 lowell"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon4 longview"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lower Townhouses" class="icon4 lowerNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon4 upperNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon4 byrne"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon4 fontaineAnnex"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant" class="icon4 steelPlant"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Anns Hermitage" class="icon4 stAnns"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Foy Townhouses" class="icon4 foy"><a href="locations/foy.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Gartland Townhouses" class="icon4 gartland"><a href="locations/gartland.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="West Cedar Townhouses" class="icon4 lowerwestCedar"><a href="locations/westCedar.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Midrise Hall" class="icon4 midrise"><a href="locations/midrise.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "2000",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2000-2009.jpg)"></div>' +
							'<span name="Greystone" class="icon5 greystone1"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon5 stPeters1"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon5 kieran1"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon5 marian1"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Chapel" class="icon5 chapel1"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon5 leo1"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon5 sheahan1"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon5 donnelly1"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="McCann Recreational Center" class="icon5 mccann"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon5 champagnat"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon5 studentCenter"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon5 dyson"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon5 lowell"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon5 longview"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lower Townhouses" class="icon5 lowerNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon5 upperNew"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon5 byrne"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon5 fontaineAnnex"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant" class="icon5 steelPlant"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Anns Hermitage" class="icon5 stAnns"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Foy Townhouses" class="icon5 foy"><a href="locations/foy.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Gartland Townhouses" class="icon5 gartland"><a href="locations/gartland.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lower West Cedar Townhouses" class="icon5 lowerwestCedar"><a href="locations/westcedar.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Midrise Hall" class="icon5 midrise"><a href="locations/midrise.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATIONS
							'<span name="James A. Cannavino Library" class="icon5 library"><a href="locations/library.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Tenney Stadium" class="icon5 tenney"><a href="locations/tenney.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Hall" class="icon5 fontaineHall"><a href="locations/fontaine.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fern Tor Arboretum" class="icon5 fernTor"><a href="locations/fernTor.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			},
			{
				"marker": "2010",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2010-2012.jpg)"></div>' +
							'<span name="Greystone" class="icon greystone2"><a href="locations/greystone.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Peters" class="icon stPeters2"><a href="locations/stpeters.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran2"><a href="locations/kieran.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Marian Hall" class="icon marian2"><a href="locations/marian.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Chapel" class="icon chapel2"><a href="locations/chapel.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Leo Hall" class="icon leo2"><a href="locations/leo.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Sheahan Hall" class="icon sheahan2"><a href="locations/sheahan.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Donnelly Hall" class="icon donnelly2"><a href="locations/donnelly.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="McCann Recreational Center" class="icon mccann1"><a href="locations/mccann.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Champagnat Hall" class="icon champagnat1"><a href="locations/champagnat.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Student Center" class="icon studentCenter1"><a href="locations/studentCenter.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Dyson Center" class="icon dyson1"><a href="locations/dyson.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell1"><a href="locations/lowell.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Longview Park" class="icon longview1"><a href="locations/longview.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew1"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="New Townhouses" class="icon upperNew1"><a href="locations/newtownhouses.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Byrne House" class="icon byrne1"><a href="locations/byrne.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex1"><a href="locations/fontaineAnnex.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Steel Plant" class="icon steelPlant1"><a href="locations/steelPlant.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns1"><a href="locations/stanns.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Foy Townhouses" class="icon foy1"><a href="locations/foy.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Gartland Townhouses" class="icon gartland1"><a href="locations/gartland.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Lower West Cedar Townhouses" clolass="icon lowerwestCedar1"><a href="locations/westcedar.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Midrise Hall" class="icon midrise1"><a href="locations/midrise.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="James A. Cannavino Library" class="icon library1"><a href="locations/library.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Tenney Stadium" class="icon tenney1"><a href="locations/tenney.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fontaine Hall" class="icon fontaineHall1"><a href="locations/fontaine.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							'<span name="Fern Tor Arboretum" class="icon fernTor1"><a href="locations/fernTor.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>' +
							//NEW LOCATION
							'<span name="Hancock Center" class="icon hancock"><a href="locations/hancock.html" class="location"><img src="images/icon.png" width="25" height="25" /></a></span>'
			}
		];
    
        $(".timeline-container").fancyTimeline({
        	initPos: 0,
        	data: dates
        });
        
        $("a.location").pageslide({ direction: "left", modal: false });
});
