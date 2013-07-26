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
							'<span name="Farm" class="icon farm1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cemetery" class="icon cemetery1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="MacPherson" class="icon macpherson1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Old Marian" class="icon oldMarian1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cannery" class="icon cannery1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Marys" class="icon stMarys1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Novitiate" class="icon novitiate1"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="Brothers Dining/Study Area" class="icon studyArea"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon chapel"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Adrian Building" class="icon adrian"><img src="images/icon.png" width="25" height="25" /></span></div>'
							
			},
			{
				"marker": "1958",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1958-1969.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Farm" class="icon farm1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cemetery" class="icon cemetery1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Old Marian" class="icon oldMarian2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Cannery" class="icon cannery2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Marys" class="icon stMarys2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Novitiate" class="icon novitiate2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Brothers Dining/Study Area" class="icon studyArea1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon chapel1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Adrian Building" class="icon adrian1"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="Leo Hall" class="icon leo"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon sheahan"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon donnelly"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "1970",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1970-1979.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon marian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Brothers Dining/Study Area" class="icon studyArea1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon chapel1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon leo1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon sheahan1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon donnelly1"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="McCann Recreational Center" class="icon mccann"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon champagnat"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon studentCenter"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon dyson"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon longview"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon upperNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon byrne"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon steelPlant"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns"><img src="images/icon.png" width="25" height="25" /></span></div>'
							
			},
			{
				"marker": "1980",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1980-1993.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon marian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Brothers Dining/Study Area" class="icon studyArea2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon chapel2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon leo1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon sheahan1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon donnelly1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="McCann Recreational Center" class="icon mccann"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon champagnat"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon studentCenter"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon dyson"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon longview"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon upperNew"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon byrne"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon steelPlant"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="Foy Townhouses" class="icon foy"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Gartland Townhouses" class="icon gartland"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "1994",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1994-1999.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon marian"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon chapel3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon leo2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon sheahan2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon donnelly2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="McCann Recreational Center" class="icon mccann1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon champagnat1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon studentCenter1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon dyson1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon4 lowell1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon longview1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon upperNew1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon byrne1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon steelPlant1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Foy Townhouses" class="icon foy1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Gartland Townhouses" class="icon gartland1"><img src="images/icon.png" width="25" height="25" /></span>' +
							//NEW LOCATIONS
							'<span name="West Cedar Townhouses" class="icon lowerwestCedar"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Midrise Hall" class="icon midrise"><img src="images/icon.png" width="25" height="25" /></span></div>'
			},
			{
				"marker": "2000",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2000-2009.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon5 greystone2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon5 stPeters2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon5 kieran2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon5 marian1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon5 chapel4"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon5 leo3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon5 sheahan3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon5 donnelly3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="McCann Recreational Center" class="icon5 mccann2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon5 champagnat2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon5 studentCenter2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon5 dyson2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon5 lowell2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon5 longview2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon5 lowerNew2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon5 upperNew2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon5 byrne2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon5 fontaineAnnex2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon5 steelPlant2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon5 stAnns2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Foy Townhouses" class="icon5 foy2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Gartland Townhouses" class="icon5 gartland2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower West Cedar Townhouses" class="icon5 lowerwestCedar1"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Midrise Hall" class="icon5 midrise1"><img src="images/icon.png" width="25" height="25" /></span>' +
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
							'<div id="locations"><span name="Greystone" class="icon greystone3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Peters" class="icon stPeters3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Marian Hall" class="icon marian2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Chapel" class="icon chapel5"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Leo Hall" class="icon leo4"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Sheahan Hall" class="icon sheahan4"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Donnelly Hall" class="icon donnelly4"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="McCann Recreational Center" class="icon mccann3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Champagnat Hall" class="icon champagnat3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Student Center" class="icon studentCenter3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Dyson Center" class="icon dyson3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Longview Park" class="icon longview3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="New Townhouses" class="icon upperNew3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Byrne House" class="icon byrne3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Steel Plant" class="icon steelPlant3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Foy Townhouses" class="icon foy3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Gartland Townhouses" class="icon gartland3"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Lower West Cedar Townhouses" class="icon lowerwestCedar2"><img src="images/icon.png" width="25" height="25" /></span>' +
							'<span name="Midrise Hall" class="icon midrise2"><img src="images/icon.png" width="25" height="25" /></span>' +
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

		$('#locations span').click().CreateBubblePopup({
			manageMouseEvents: false
		});
		
		$('.greystone, .greystone1, .greystone2').click(function(event) {
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
		
		$('.kieran, .kieran1, .kieran2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Kieran Gatehouse<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of Kieran Gatehouse.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/kieran/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/kieran.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/kieran/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/kieran/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.stPeters, .stPeters1, .stPeters2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Peter&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St Peter&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.greenhouse').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Greenhouse<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of Greenhouse.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.farm').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Farm<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of Farm.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.cemetery').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Cemetery<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of Cemetery.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.macpherson').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>MacPherson<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of MacPherson.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.oldMarian, .marian, .marian1, .marian2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Marian Hall<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of Marian Hall.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.cannery').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Cannery<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of Cannery.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.stMarys').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.novitiate').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.studyArea, .studyArea1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.chapel, .chapel1, .chapel2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.adrian').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.leo, .leo1, .leo2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.sheahan, .sheahan1, .sheahan2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.donnelly, .donnelly1, .donnelly2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.mccann, .mccann1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.champagnat, .champagnat1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.studentCenter, .studentCenter1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.dyson, .dyson1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.lowell, .lowell1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.longview, .longview1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
			
		$('.lowerNew, .lowerNew1').click(function(event) {
		resetActiveBubble();
		button = $(this);
		active = true;
		button.ShowBubblePopup({
			manageMouseEvents: false,
			position : 'right',
			align	 : 'bottom',
			
			innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
						       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
						       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
						           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
						<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
	
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
		
		$('.upperNew, .upperNew1').click(function(event) {
		resetActiveBubble();
		button = $(this);
		active = true;
		button.ShowBubblePopup({
			manageMouseEvents: false,
			position : 'right',
			align	 : 'bottom',
			
			innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
						       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
						       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
						           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
						<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
	
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
			
		$('.byrne, .byrne1').click(function(event) {
		resetActiveBubble();
		button = $(this);
		active = true;
		button.ShowBubblePopup({
			manageMouseEvents: false,
			position : 'right',
			align	 : 'bottom',
			
			innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
						       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
						       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
						           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
						<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
	
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
		
		$('.fontaineAnnex, .fontaineAnnex1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.steelPlant, .steelPlant1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.stAnns, .stAnns1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.foy, .foy1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.gartland, .gartland1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.lowerwestCedar, .lowerwestCedar1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.midrise, .midrise1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.library, .library1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.tenney, .tenney1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.fontaineHall, .fontaineHall1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.fernTor, .fernTor1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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
		
		$('.hancock').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'bottom',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Mary&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">This is a short description of St. Mary&rsquo;s.<br/><br/></td></tr> \
							       <tr><td width="105" style="border-right: 2px solid #909090; text-align: center;"><a href="locations/stpeters/images/main.jpg" rel="prettyPhoto[gallery]" title="Kieran"><img src="images/gallery.jpg" width="25" height="25" />Gallery</a></td> \
							           <td width="87" style="text-align: center;"><a href="javascript:$.pageslide({ direction: \'left\', href: \'locations/stpeters.html\' })"><img src="images/info.jpg" width="25" height="25" />Info</a></td></tr></table> \
							<table class="gallery"><tr><td>&nbsp;</td><td><a href="locations/stpeters/images/01.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td> <td><a href="locations/stpeters/images/02.jpg" rel="prettyPhoto[gallery]">&nbsp;</a></td></tr></table>' ,
		
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