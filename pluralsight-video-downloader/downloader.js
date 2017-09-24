(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fs = require('fs');

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('btn-download');
    // onClick's logic below:
    link.addEventListener('click', function() {
        chrome.extension.getBackgroundPage().console.log("HERE2");
    });
});
// $(function(){
//     chrome.extension.getBackgroundPage().console.log("HERE1");
//     var dropdown = document.getElementById("btn-download");
//     dropdown.addEventListener('click', () => {

//     });
//     $('#btn-download').click(function(){
//         chrome.extension.getBackgroundPage().console.log("HERE");
//     });
// });
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
