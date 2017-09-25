var fs = require('browserify-fs');

fs.mkdir('/home', function() {
    fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
        fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
            chrome.extension.getBackgroundPage().console.log(data);
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     var link = document.getElementById('btn-download');
//     // onClick's logic below:
//     link.addEventListener('click', function() {
//         chrome.extension.getBackgroundPage().console.log("HERE2");
//     });
// });
// $(function(){
//     chrome.extension.getBackgroundPage().console.log("HERE1");
//     var dropdown = document.getElementById("btn-download");
//     dropdown.addEventListener('click', () => {

//     });
//     $('#btn-download').click(function(){
//         chrome.extension.getBackgroundPage().console.log("HERE");
//     });
// });