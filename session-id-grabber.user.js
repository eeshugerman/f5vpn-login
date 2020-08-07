// ==UserScript==
// @name        F5 VPN Session ID Grabber
// @namespace   Violentmonkey Scripts
// @match       https://*/vdesk/webtop.eui?*
// @grant       GM.setClipboard
// @version     1.0
// @author      eeshugerman & zrhoffman
// @description See https://github.com/zrhoffman/f5vpn-login
// ==/UserScript==

matches = document.cookie.match('(?<=MRHSession=)[a-z0-9]*(?=;)');
if (matches === null) {
  console.warn('Unable to find session ID.');
}
else {
  sessionId = matches[0];
  GM.setClipboard(sessionId);
  console.log(`Found session ID and copied to clipboard: "${sessionId}".`);
}

