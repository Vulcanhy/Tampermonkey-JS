// ==UserScript==
// @name        I am Groot!
// @namespace   https://github.com/lzghzr/TampermonkeyJS
// @version     0.0.4
// @author      lzghzr
// @description I am Groot!
// @match       http://*/*
// @match       https://*/*
// @require     https://cdn.jsdelivr.net/gh/lzghzr/TampermonkeyJS@a12e5f5baeea9c13a3dc2b6cac4b6ecef29533d5/libReplaceText/libReplaceText.js
// @license     MIT
// @grant       none
// @run-at      document-start
// ==/UserScript==
new ReplaceText([[/^[\s\S]*$/g, 'I am Groot!']], 'match');
