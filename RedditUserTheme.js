// ==UserScript==
// @name         Reddit Dark Theme
// @version      0.1
// @description  It's a dark theme... for reddit...
// @icon         http://keycdn.mturkcrowd.com/data/avatars/l/0/132.jpg?1452627961
// @author       Danny Hinshaw
// @namespace    http://nulleffort.com/
// @match        https://www.reddit.com/*
// ==/UserScript==

/*jshint esversion: 6 */
(function() {
	'use strict';

	// Define CSS rules for theme
	const css = `#header { background-color: #393994; }
		        body { background-color: #0F0F14; }
		        a.title.may-blank.loggedin.outbound  { color: #5454A7; }
		        a.title.may-blank.loggedin.outbound:visited  { color: purple; }
		        a.title.may-blank.loggedin  { color: #5454A7; }
		        a.title.may-blank.loggedin:visited  { color: purple; }
		        a.title.may-blank  { color: #5454A7; }
		        a.title.may-blank:visited  { color: purple; }
		        a.title.may-blank.outbound  { color: #5454A7; }
		        a.title.may-blank.outbound:visited  { color: purple; }
		        p { color: #5454A7; }
		        div.listing-chooser.initialized, div.side { background-color: #222271 }`,
		  style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode(css));
	document.head.appendChild(style);
	console.log(document.querySelectorAll('div.spacer'));

	// Remove individual ad's on load
	const sponsorBox = document.querySelectorAll('.sponsorshipbox')[0];

	if (sponsorBox) {
		sponsorBox.remove();
	}

	document.getElementById('ad_main').remove();

	// Timeout to remove ad's that are loaded after the page has finished loading
	setTimeout(() => {
		[].forEach.call(document.querySelectorAll('p.tagline'), p => {
			if (p.innerText.includes('promoted')) {
				p.parentNode.parentNode.remove();
			}
		});
	}, 500);

})();
