var button = false;
var active = true;

$(document).ready(function(){
		var dates = [
			{
				"marker": "1904",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1904.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "1905",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1905-1929.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="Greenhouse" class="icon greenhouse"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Farm" class="icon farm"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cemetery" class="icon cemetery"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="MacPherson" class="icon macpherson"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Old Marian" class="icon oldMarian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cannery" class="icon cannery"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Marys" class="icon stMarys"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "1930",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1930-1945.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Greenhouse" class="icon greenhouse"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Farm" class="icon farm"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cemetery" class="icon cemetery"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="MacPherson" class="icon macpherson"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Old Marian" class="icon oldMarian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cannery" class="icon cannery"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Marys" class="icon stMarys"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATION
							'<span name="Novitiate" class="icon novitiate"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "1946",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1946-1957.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Farm" class="icon1 farm"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cemetery" class="icon1 cemetery"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="MacPherson" class="icon1 macpherson"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Old Marian" class="icon1 oldMarian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cannery" class="icon1 cannery"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Marys" class="icon1 stMarys"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Novitiate" class="icon1 novitiate"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="Brothers Dining/Study Area" class="icon1 studyArea"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon1 chapel"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Adrian Building" class="icon1 adrian"><img src="images/icon.png" width="25" height="25" /></span></div>'
							
			},
			{
				"marker": "1958",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1958-1969.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Farm" class="icon1 farm"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cemetery" class="icon1 cemetery"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Old Marian" class="icon2 oldMarian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cannery" class="icon2 cannery"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Marys" class="icon2 stMarys"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Novitiate" class="icon2 novitiate"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Brothers Dining/Study Area" class="icon2 studyArea"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon2 chapel"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Adrian Building" class="icon2 adrian"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="Leo Hall" class="icon leo"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon sheahan"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon donnelly"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "1970",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1970-1979.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon3 greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon3 stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon3 kieran"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon3 marian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Brothers Dining/Study Area" class="icon3 studyArea1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon3 chapel1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon3 leo1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon3 sheahan1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon3 donnelly1"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="McCann Recreational Center" class="icon3 mccann"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon3 champagnat"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon3 studentCenter"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon3 dyson"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon3 lowell"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon3 longview"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon3 lowerNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon3 upperNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon3 byrne"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon3 fontaineAnnex"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon3 steelPlant"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon3 stAnns"><img src="images/icon.png" width="25" height="25" /></span></div>'
							
			},
			{
				"marker": "1980",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1980-1993.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon3 greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon3 stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon3 kieran"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon3 marian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Brothers Dining/Study Area" class="icon3 studyArea1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon3 chapel1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon3 leo1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon3 sheahan1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon3 donnelly1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="McCann Recreational Center" class="icon3 mccann"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon3 champagnat"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon3 studentCenter"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon3 dyson"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon3 lowell"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon3 longview"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon3 lowerNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon3 upperNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon3 byrne"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon3 fontaineAnnex"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon3 steelPlant"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon3 stAnns"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="Foy Townhouses" class="icon3 foy"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Gartland Townhouses" class="icon3 gartland"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "1994",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1994-1999.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon3 greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon3 stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon3 kieran"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon3 marian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon4 chapel1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon4 leo1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon4 sheahan1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon4 donnelly1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="McCann Recreational Center" class="icon4 mccann"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon4 champagnat"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon4 studentCenter"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon4 dyson"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon4 lowell"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon4 longview"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon4 lowerNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon4 upperNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon4 byrne"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon4 fontaineAnnex"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon4 steelPlant"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon4 stAnns"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Foy Townhouses" class="icon4 foy"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Gartland Townhouses" class="icon4 gartland"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="West Cedar Townhouses" class="icon4 lowerwestCedar"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Midrise Hall" class="icon4 midrise"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "2000",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2000-2009.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon5 greystone1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon5 stPeters1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon5 kieran1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon5 marian1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon5 chapel1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon5 leo1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon5 sheahan1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon5 donnelly1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="McCann Recreational Center" class="icon5 mccann"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon5 champagnat"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon5 studentCenter"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon5 dyson"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon5 lowell"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon5 longview"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon5 lowerNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon5 upperNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon5 byrne"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon5 fontaineAnnex"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon5 steelPlant"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon5 stAnns"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Foy Townhouses" class="icon5 foy"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Gartland Townhouses" class="icon5 gartland"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower West Cedar Townhouses" class="icon5 lowerwestCedar"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Midrise Hall" class="icon5 midrise"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="James A. Cannavino Library" class="icon5 library"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Tenney Stadium" class="icon5 tenney"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Hall" class="icon5 fontaineHall"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fern Tor Arboretum" class="icon5 fernTor"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "2010",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2010-2012.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon marian2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon chapel2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon leo2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon sheahan2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon donnelly2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="McCann Recreational Center" class="icon mccann1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon champagnat1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon studentCenter1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon dyson1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon longview1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon upperNew1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon byrne1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon steelPlant1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Foy Townhouses" class="icon foy1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Gartland Townhouses" class="icon gartland1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower West Cedar Townhouses" class="icon lowerwestCedar1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Midrise Hall" class="icon midrise1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="James A. Cannavino Library" class="icon library1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Tenney Stadium" class="icon tenney1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Hall" class="icon fontaineHall1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fern Tor Arboretum" class="icon fernTor1"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATION
							'<span name="Hancock Center" class="icon hancock"><img src="images/icon.png" width="25" height="25" /></span></div>'
			}
		];
    
        $(".timeline-container").fancyTimeline({
        	initPos: 0,
        	data: dates
        });

		$('#locations span').CreateBubblePopup({
			manageMouseEvents: false
		});
		
		$('.greystone').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Greystone <a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of Greystone.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/greystone/images/main.jpg" rel="prettyPhoto[gallery]" title="Greystone"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/greystone.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/greystone/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/03.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/04.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/05.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/06.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/07.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/08.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/09.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/10.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/11.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/12.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/13.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/14.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/15.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/16.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/17.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/18.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/19.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/20.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/21.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/22.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/23.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/24.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/25.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/26.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/27.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/28.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/29.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/30.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/31.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/32.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/33.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/34.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/35.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/36.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/37.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/38.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/39.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/40.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/41.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr> \
								   <tr><td><a href="locations/greystone/images/42.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/greystone/images/43.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td>&nbsp;</td></tr></tbody></table>' ,
		
				innerHtmlStyle: {
									color:'#FFFFFF', 
									'text-align':'left'
								},
				themeName: 'all-black',
				themePath: 'mainStyles/popup',
				alwaysVisible: false,
				closingDelay: 400,
				selectable: true,
				afterShown: function() {
	                active = false;
	                $(".jquerybubblepopup-innerHtml a[rel^='prettyPhoto']").prettyPhoto();
	                $(".jquerybubblepopup").bind("mouseenter", function() {
	                    active = true;
	                }).bind("mouseleave", function() {
	                    active = false;
	                    
	                
                });
            }
			});
		});
		
		$(window).bind('click',function() {
	        resetActiveBubble();
	    });
	    
});

function resetActiveBubble() {
	    if ( button && active == false ) {
	        button.RemoveBubblePopup();
	        button.CreateBubblePopup({
	            manageMouseEvents: false
	        });    
	    }
}