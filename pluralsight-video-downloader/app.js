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