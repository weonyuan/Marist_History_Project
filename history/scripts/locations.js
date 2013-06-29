hs.graphicsDir = '../images/highslide/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.fadeInOut = true;
hs.dimmingOpacity = 0.8;
hs.outlineType = 'rounded-white';
hs.captionEval = 'this.thumb.alt';
hs.marginBottom = 105; // make room for the thumbstrip and the controls
hs.numberPosition = 'caption';

// Add the slideshow providing the controlbar and the thumbstrip
hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 3500,
	repeat: false,
	useControls: true,
	overlayOptions: {
		position: 'bottom center',
		opacity: 0.75,
		hideOnMouseOut: true
	},
	thumbstrip: {
		position: 'bottom center',
		mode: 'horizontal',
		relativeTo: 'viewport'
	}
});

/* 
 * START IFRAME MOD
 *  
 * This mod only works with Highslide versions > 4.0.
 * 
 * NOTE:
 * For the thumbstrip paths be be correct, the main page and the frame page
 * must be in the same folder. Otherwise, new paths have to be set in 
 * hs.stripItemFormatter
 */ 


/**
 * Set the iframe's id in a custom hs variable
 */
hs.callingFrameId = 'myIframe';

/**
 * Override to also look for elements in the iframe
 */
hs.$ = function (id) {
	var iframe = document.getElementById(hs.callingFrameId);
	var iDoc = iframe.contentDocument || iframe.contentWindow.document;

	if (document.getElementById(id)) return document.getElementById(id);
	else if (iDoc.getElementById(id)) {
		// workaround for IE's missing importNode():
		iEl = iDoc.getElementById(id);
		return hs.createElement(iEl.tagName, { className: iEl.className, innerHTML: iEl.innerHTML } );
	}
	return null;
};

/**
 * Override to look for anchors within the iframe
 */
hs.Expander.prototype.getAdjacentAnchor = function(op) {
	var iframe = document.getElementById(hs.callingFrameId);
	var iDoc = iframe.contentDocument || iframe.contentWindow.document;

	var aAr = iDoc.getElementsByTagName('A'), hsAr = {}, activeI = -1, j = 0;
	for (i = 0; i < aAr.length; i++) {
		if (hs.isHsAnchor(aAr[i]) && ((this.slideshowGroup == hs.getParam(aAr[i], 'slideshowGroup')))) {
			hsAr[j] = aAr[i];
			if (aAr[i] == this.a) activeI = j;
			j++;
		}
	}
	return hsAr[activeI + op];
};

/**
 * Override to index anchors in the iframe
 */
hs.updateAnchors = function() {
	var el, els, all = [], images = [], htmls = [], groups = {}, re;


	var iframe = document.getElementById(hs.callingFrameId);
	var iDoc = iframe.contentDocument || iframe.contentWindow.document;

	for (var i = 0; i < hs.openerTagNames.length; i++) { /// loop through tag names
		els = iDoc.getElementsByTagName(hs.openerTagNames[i]);
		for (var j = 0; j < els.length; j++) { /// loop through each element
			el = els[j];
			re = hs.isHsAnchor(el);
			if (re) {
				hs.push(all, el);
				/// images
				if (re[0] == 'hs.expand') hs.push(images, el);
				/// htmls
				else if (re[0] == 'hs.htmlExpand') hs.push(htmls, el);
				/// groupwise
				var g = hs.getParam(el, 'slideshowGroup') || 'none';
				if (!groups[g]) groups[g] = [];
				hs.push(groups[g], el);
			}
		}
	}
	hs.anchors = { all: all, groups: groups, images: images, htmls: htmls };
	return hs.anchors;

};

/**
 * Override to add the offset of the iframe itself
 */
hs.getPosition = function(el)	{
	var parent = el;
	var p = { x: parent.offsetLeft, y: parent.offsetTop };
	while (parent.offsetParent)	{
		parent = parent.offsetParent;
		p.x += parent.offsetLeft;
		p.y += parent.offsetTop;
		if (parent != document.body && parent != document.documentElement) {
			p.x -= parent.scrollLeft;
			p.y -= parent.scrollTop;
		}
	}
	
    // add the offset of the iframe itself
	var ownerDocument = el.ownerDocument || el.document;
	//if (!/IFRAME/.test(el.tagName)) {
	if (ownerDocument != document) {
		var iframePos = hs.getPosition(document.getElementById(hs.callingFrameId));
		p.x += iframePos.x;
		p.y += iframePos.y;
	}

	return p;
};
//-- END IFRAME MOD


$(document).ready(function(){
				$('a.listItem').click(function(){
					$('source').remove();
					var $nextAudio = $(this).attr("href");
					var $nextAudio1 = $(this).attr("href");
					$nextAudio= "audio/" + $nextAudio + ".ogg";
				   	$nextAudio1= "audio/" + $nextAudio1 + ".mp3";
					$('<source>').attr('src', $nextAudio).appendTo('audio'); 
				   	$('<source>').attr('src', $nextAudio1).appendTo('audio'); 
					$('Your browser does not support the audio element. Use old version.').appendTo('audio');
					$('audio').load();
					$('div.info1').html($(this).html());
				
				return false;
				});
				
				$(".antiscroll-wrap").antiscroll();
			  	
				$('ul.tabs').each(function(){
					// For each set of tabs, we want to keep track of
					// which tab is active and it's associated content
					var $active, $content, $links = $(this).find('a');
			
					// If the location.hash matches one of the links, use that as the active tab.
					// If no match is found, use the first link as the initial active tab.
					$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
					$active.addClass('active');
					$content = $($active.attr('href'));
			
					// Hide the remaining content
					$links.not($active).each(function () {
						$($(this).attr('href')).hide();
					});
			
					// Bind the click event handler
					$(this).on('click', 'a', function(e){
						// Make the old tab inactive.
						$active.removeClass('active');
						$content.hide();
			
						// Update the variables with the new link and content
						$active = $(this);
						$content = $($(this).attr('href'));
			
						// Make the tab active.
						$active.addClass('active');
						$content.show();
			
						// Prevent the anchor's default click action
						e.preventDefault();
					});
				});  
			});