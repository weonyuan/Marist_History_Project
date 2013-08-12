var button = false;
var active = true;

$(document).ready(function(){
		var dates = [
			{
				"marker": "1904",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1904.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"></span>' +
							'<span name="St. Peters" class="icon stPeters"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"></span></div>'
			},
			{
				"marker": "1905",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1905-1929.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"></span>' +
							'<span name="St. Peters" class="icon stPeters"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"></span>' +
							//NEW LOCATIONS
							'<span name="Greenhouse" class="icon greenhouse"></span>' +
							'<span name="Farm" class="icon farm"></span>' +
							'<span name="Cemetery" class="icon cemetery"></span>' +
							'<span name="MacPherson" class="icon macpherson"></span>' +
							'<span name="Old Marian" class="icon oldMarian"></span>' +
							'<span name="Cannery" class="icon cannery"></span>' +
							'<span name="St. Marys" class="icon stMarys"></span></div>'
			},
			{
				"marker": "1930",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1930-1945.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"></span>' +
							'<span name="St. Peters" class="icon stPeters"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"></span>' +
							'<span name="Greenhouse" class="icon greenhouse"></span>' +
							'<span name="Farm" class="icon farm"></span>' +
							'<span name="Cemetery" class="icon cemetery"></span>' +
							'<span name="MacPherson" class="icon macpherson"></span>' +
							'<span name="Old Marian" class="icon oldMarian"></span>' +
							'<span name="Cannery" class="icon cannery"></span>' +
							'<span name="St. Marys" class="icon stMarys"></span>' +
							//NEW LOCATION
							'<span name="Novitiate" class="icon novitiate"></span></div>'
			},
			{
				"marker": "1946",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1946-1957.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"></span>' +
							'<span name="St. Peters" class="icon stPeters"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"></span>' +
							'<span name="Farm" class="icon farm1"></span>' +
							'<span name="Cemetery" class="icon cemetery1"></span>' +
							'<span name="MacPherson" class="icon macpherson1"></span>' +
							'<span name="Old Marian" class="icon oldMarian1"></span>' +
							'<span name="Cannery" class="icon cannery1"></span>' +
							'<span name="St. Marys" class="icon stMarys1"></span>' +
							'<span name="Novitiate" class="icon novitiate1"></span>' +
							//NEW LOCATIONS
							'<span name="Brothers Dining/Study Area" class="icon studyArea"></span>' +
							'<span name="Chapel" class="icon chapel"></span>' +
							'<span name="Adrian Building" class="icon adrian"></span></div>'
							
			},
			{
				"marker": "1958",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1958-1969.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone"></span>' +
							'<span name="St. Peters" class="icon stPeters"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran"></span>' +
							'<span name="Farm" class="icon farm1"></span>' +
							'<span name="Cemetery" class="icon cemetery1"></span>' +
							'<span name="Old Marian" class="icon oldMarian2"></span>' +
							'<span name="Cannery" class="icon cannery2"></span>' +
							'<span name="St. Marys" class="icon stMarys2"></span>' +
							'<span name="Novitiate" class="icon novitiate2"></span>' +
							'<span name="Brothers Dining/Study Area" class="icon studyArea1"></span>' +
							'<span name="Chapel" class="icon chapel1"></span>' +
							'<span name="Adrian Building" class="icon adrian1"></span>' +
							//NEW LOCATIONS
							'<span name="Leo Hall" class="icon leo"></span>' +
							'<span name="Sheahan Hall" class="icon sheahan"></span>' +
							'<span name="Donnelly Hall" class="icon donnelly"></span></div>'
			},
			{
				"marker": "1970",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1970-1979.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone1"></span>' +
							'<span name="St. Peters" class="icon stPeters1"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran1"></span>' +
							'<span name="Marian Hall" class="icon marian"></span>' +
							'<span name="Brothers Dining/Study Area" class="icon studyArea2"></span>' +
							'<span name="Chapel" class="icon chapel2"></span>' +
							'<span name="Leo Hall" class="icon leo1"></span>' +
							'<span name="Sheahan Hall" class="icon sheahan1"></span>' +
							'<span name="Donnelly Hall" class="icon donnelly1"></span>' +
							//NEW LOCATIONS
							'<span name="McCann Recreational Center" class="icon mccann"></span>' +
							'<span name="Champagnat Hall" class="icon champagnat"></span>' +
							'<span name="Student Center" class="icon studentCenter"></span>' +
							'<span name="Dyson Center" class="icon dyson"></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell"></span>' +
							'<span name="Longview Park" class="icon longview"></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew"></span>' +
							'<span name="New Townhouses" class="icon upperNew"></span>' +
							'<span name="Byrne House" class="icon byrne"></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex"></span>' +
							'<span name="Steel Plant" class="icon steelPlant"></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns"></span></div>'
							
			},
			{
				"marker": "1980",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1980-1993.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone1"></span>' +
							'<span name="St. Peters" class="icon stPeters1"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran1"></span>' +
							'<span name="Marian Hall" class="icon marian"></span>' +
							'<span name="Brothers Dining/Study Area" class="icon studyArea2"></span>' +
							'<span name="Chapel" class="icon chapel2"></span>' +
							'<span name="Leo Hall" class="icon leo1"></span>' +
							'<span name="Sheahan Hall" class="icon sheahan1"></span>' +
							'<span name="Donnelly Hall" class="icon donnelly1"></span>' +
							'<span name="McCann Recreational Center" class="icon mccann"></span>' +
							'<span name="Champagnat Hall" class="icon champagnat"></span>' +
							'<span name="Student Center" class="icon studentCenter"></span>' +
							'<span name="Dyson Center" class="icon dyson"></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell"></span>' +
							'<span name="Longview Park" class="icon longview"></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew"></span>' +
							'<span name="New Townhouses" class="icon upperNew"></span>' +
							'<span name="Byrne House" class="icon byrne"></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex"></span>' +
							'<span name="Steel Plant" class="icon steelPlant"></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns"></span>' +
							//NEW LOCATIONS
							'<span name="Foy Townhouses" class="icon foy"></span>' +
							'<span name="Gartland Townhouses" class="icon gartland"></span></div>'
			},
			{
				"marker": "1994",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/1994-1999.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone1"></span>' +
							'<span name="St. Peters" class="icon stPeters1"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran1"></span>' +
							'<span name="Marian Hall" class="icon marian"></span>' +
							'<span name="Chapel" class="icon chapel3"></span>' +
							'<span name="Leo Hall" class="icon leo2"></span>' +
							'<span name="Sheahan Hall" class="icon sheahan2"></span>' +
							'<span name="Donnelly Hall" class="icon donnelly2"></span>' +
							'<span name="McCann Recreational Center" class="icon mccann1"></span>' +
							'<span name="Champagnat Hall" class="icon champagnat1"></span>' +
							'<span name="Student Center" class="icon studentCenter1"></span>' +
							'<span name="Dyson Center" class="icon dyson1"></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon4 lowell1"></span>' +
							'<span name="Longview Park" class="icon longview1"></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew1"></span>' +
							'<span name="New Townhouses" class="icon upperNew1"></span>' +
							'<span name="Byrne House" class="icon byrne1"></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex1"></span>' +
							'<span name="Steel Plant" class="icon steelPlant1"></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns1"></span>' +
							'<span name="Foy Townhouses" class="icon foy1"></span>' +
							'<span name="Gartland Townhouses" class="icon gartland1"></span>' +
							//NEW LOCATIONS
							'<span name="West Cedar Townhouses" class="icon lowerwestCedar"></span>' +
							'<span name="Midrise Hall" class="icon midrise"></span></div>'
			},
			{
				"marker": "2000",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2000-2009.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone2"></span>' +
							'<span name="St. Peters" class="icon stPeters2"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran2"></span>' +
							'<span name="Marian Hall" class="icon marian1"></span>' +
							'<span name="Chapel" class="icon chapel4"></span>' +
							'<span name="Leo Hall" class="icon leo3"></span>' +
							'<span name="Sheahan Hall" class="icon sheahan3"></span>' +
							'<span name="Donnelly Hall" class="icon donnelly3"></span>' +
							'<span name="McCann Recreational Center" class="icon mccann2"></span>' +
							'<span name="Champagnat Hall" class="icon champagnat2"></span>' +
							'<span name="Student Center" class="icon studentCenter2"></span>' +
							'<span name="Dyson Center" class="icon dyson2"></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell2"></span>' +
							'<span name="Longview Park" class="icon longview2"></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew2"></span>' +
							'<span name="New Townhouses" class="icon upperNew2"></span>' +
							'<span name="Byrne House" class="icon byrne2"></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex2"></span>' +
							'<span name="Steel Plant" class="icon steelPlant2"></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns2"></span>' +
							'<span name="Foy Townhouses" class="icon foy2"></span>' +
							'<span name="Gartland Townhouses" class="icon gartland2"></span>' +
							'<span name="Lower West Cedar Townhouses" class="icon lowerwestCedar1"></span>' +
							'<span name="Midrise Hall" class="icon midrise1"></span>' +
							//NEW LOCATIONS
							'<span name="James A. Cannavino Library" class="icon library"></span>' +
							'<span name="Tenney Stadium" class="icon tenney"></span>' +
							'<span name="Fontaine Hall" class="icon fontaineHall"></span>' +
							'<span name="Fern Tor Arboretum" class="icon fernTor"></span></div>'
			},
			{
				"marker": "2010",
				"type": "default",
				"content":  '<div class="timeline" style="background-image: url(images/maps/2010-2012.jpg)"></div>' +
							'<div id="locations"><span name="Greystone" class="icon greystone3"></span>' +
							'<span name="St. Peters" class="icon stPeters3"></span>' +
							'<span name="Kieran Gatehouse" class="icon kieran3"></span>' +
							'<span name="Marian Hall" class="icon marian2"></span>' +
							'<span name="Chapel" class="icon chapel5"></span>' +
							'<span name="Leo Hall" class="icon leo4"></span>' +
							'<span name="Sheahan Hall" class="icon sheahan4"></span>' +
							'<span name="Donnelly Hall" class="icon donnelly4"></span>' +
							'<span name="McCann Recreational Center" class="icon mccann3"></span>' +
							'<span name="Champagnat Hall" class="icon champagnat3"></span>' +
							'<span name="Student Center" class="icon studentCenter3"></span>' +
							'<span name="Dyson Center" class="icon dyson3"></span>' +
							'<span name="Lowell Thomas Communications Center" class="icon lowell3"></span>' +
							'<span name="Longview Park" class="icon longview3"></span>' +
							'<span name="Lower Townhouses" class="icon lowerNew3"></span>' +
							'<span name="New Townhouses" class="icon upperNew3"></span>' +
							'<span name="Byrne House" class="icon byrne3"></span>' +
							'<span name="Fontaine Annex" class="icon fontaineAnnex3"></span>' +
							'<span name="Steel Plant" class="icon steelPlant3"></span>' +
							'<span name="St. Anns Hermitage" class="icon stAnns3"></span>' +
							'<span name="Foy Townhouses" class="icon foy3"></span>' +
							'<span name="Gartland Townhouses" class="icon gartland3"></span>' +
							'<span name="Lower West Cedar Townhouses" class="icon lowerwestCedar2"></span>' +
							'<span name="Midrise Hall" class="icon midrise2"></span>' +
							'<span name="James A. Cannavino Library" class="icon library1"></span>' +
							'<span name="Tenney Stadium" class="icon tenney1"></span>' +
							'<span name="Fontaine Hall" class="icon fontaineHall1"></span>' +
							'<span name="Fern Tor Arboretum" class="icon fernTor1"></span>' +
							//NEW LOCATION
							'<span name="Hancock Center" class="icon hancock"></span></div>'
			}
		];
    
        $(".timeline-container").fancyTimeline({
        	initPos: 0,
        	data: dates
        });

		$('#locations span').click().CreateBubblePopup({
			manageMouseEvents: false
		});
		
		$('.greystone, .greystone1, .greystone2, .greystone3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Greystone <a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Office of the current College President.<br/><br/></td></tr> \
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
				closingDelay: 100,
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
		
		$('.kieran, .kieran1, .kieran2, .kieran3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Kieran Gatehouse<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Office space. Private residence.<br/><br/></td></tr> \
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
		
		$('.stPeters, .stPeters1, .stPeters2, .stPeters3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Peter&rsquo;s<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Residence for administrative offices.<br/><br/></td></tr> \
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
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Greenhouse<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Constructed by the Marist Brothers.<br/><br/></td></tr> \
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
		
		$('.farm, .farm1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Farm<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Constructed by the Marist Brothers.<br/><br/></td></tr> \
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
		
		$('.cemetery, .cemetery1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Cemetery<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Constructed by the Marist Brothers.<br/><br/></td></tr> \
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
		
		$('.macpherson, .macpherson1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
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
		
		$('.oldMarian, .oldMarian1, .oldMarian2, .marian, .marian1, .marian2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Marian Hall<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Dormitory for Freshman and Sophomore residents.<br/><br/></td></tr> \
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
		
		$('.cannery, .cannery1, .cannery2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Cannery<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Constructed by the Marist Brothers.<br/><br/></td></tr> \
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
		
		$('.stMarys, .stMarys1, .stMarys2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
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
		
		$('.novitiate, .novitiate1, .novitiate2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Novitiate<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.studyArea, .studyArea1, .studyArea2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Study Area<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.chapel, .chapel1, .chapel2, .chapel3, .chapel4, .chapel5').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Our Lady Seat of Wisdom Chapel<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Currently owned by Marist College.<br/><br/></td></tr> \
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
		
		$('.adrian, .adrian1').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Adrian Building<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Formerly housed the Alumni office and Marist Poll.<br/><br/></td></tr> \
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
		
		$('.leo, .leo1, .leo2, .leo3, .leo4').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Leo Hall<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Dormitory for Freshman residents.<br/><br/></td></tr> \
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
		
		$('.sheahan, .sheahan1, .sheahan2, .sheahan3, .sheahan4').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Sheahan Hall<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Dormitory for Freshman residents.<br/><br/></td></tr> \
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
		
		$('.donnelly, .donnelly1, .donnelly2, .donnelly3, .donnelly4').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Donnelly Hall<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Academic building. Administrative offices.<br/><br/></td></tr> \
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
		
		$('.mccann, .mccann1, .mccann2, .mccann3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>James J. McCann Recreation Center<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Athletic building. Recreational center.<br/><br/></td></tr> \
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
		
		$('.champagnat, .champagnat1, .champagnat2, .champagnat3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Champagnat Hall<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Dormitory for Freshman residents.<br/><br/></td></tr> \
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
		
		$('.studentCenter, .studentCenter1, .studentCenter2, .studentCenter3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Student Center<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">.<br/><br/></td></tr> \
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
		
		$('.dyson, .dyson1, .dyson2, .dyson3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Dyson Center<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.lowell, .lowell1, .lowell2, .lowell3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Lowell Thomas Communications Center<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.longview, .longview1, .longview2, .longview3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Longview Park<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
			
		$('.lowerNew, .lowerNew1, .lowerNew2, .lowerNew3').click(function(event) {
		resetActiveBubble();
		button = $(this);
		active = true;
		button.ShowBubblePopup({
			manageMouseEvents: false,
			position : 'right',
			align	 : 'middle',
			
			innerHtml: '<table><tr><td colspan="2"><h2>Lower New Townhouses<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.upperNew, .upperNew1, .upperNew2, .upperNew3').click(function(event) {
		resetActiveBubble();
		button = $(this);
		active = true;
		button.ShowBubblePopup({
			manageMouseEvents: false,
			position : 'right',
			align	 : 'middle',
			
			innerHtml: '<table><tr><td colspan="2"><h2>Upper New Townhouses<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
			
		$('.byrne, .byrne1, .byrne2, .byrne3').click(function(event) {
		resetActiveBubble();
		button = $(this);
		active = true;
		button.ShowBubblePopup({
			manageMouseEvents: false,
			position : 'right',
			align	 : 'middle',
			
			innerHtml: '<table><tr><td colspan="2"><h2>Byrne House<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.fontaineAnnex, .fontaineAnnex1, .fontaineAnnex2, .fontaineAnnex3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Fontaine Annex<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.steelPlant, .steelPlant1, .steelPlant2, .steelPlant3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Steel Plant Studio<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.stAnns, .stAnns1, .stAnns2, .stAnns3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>St. Ann&rsquo;s Hermitage<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.foy, .foy1, .foy2, .foy3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Foy Townhouses<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.gartland, .gartland1, .gartland2, .gartland3').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Gartland Commons<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
							       <tr><td colspan="2" class="description">Built in 1985.<br/><br/></td></tr> \
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
		
		$('.lowerwestCedar, .lowerwestCedar1, .lowerwestCedar2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Lower West Cedar Townhouses<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.midrise, .midrise1, .midrise2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Midrise Hall<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
		
		$('.library, .library1, .library2').click(function(event) {
			resetActiveBubble();
			button = $(this);
			active = true;
			button.ShowBubblePopup({
				manageMouseEvents: false,
				position : 'right',
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>James A. Cannavino Library<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Tenney Stadium<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Fontaine Hall<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Fern Tor Arborteum<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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
				align	 : 'middle',
				
				innerHtml: '<table><tr><td colspan="2"><h2>Hancock Hall<a href="javascript: resetActiveBubble();" style="position: relative; left: 108px; bottom: 8px; font-weight: bold;">X</a></h2></td></tr> \
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