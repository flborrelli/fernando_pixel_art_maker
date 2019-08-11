// Select color input
var chooseColor = document.getElementById('colorPicker').value;
var defaultColor = "#0000ff";

// Select size input
var size = document.getElementById('sizePicker');
var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()
var canvas = document.getElementById('pixelCanvas');

size.addEventListener('submit', function(event) {
    event.preventDefault()
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});

function makeGrid(height,width) {
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    canvas.innerHTML = null;
    for (var m = 0; m < height; m++) {
        var row = canvas.insertRow(m);
        for (var n = 0; n < width; n++) {
            var column = row.insertCell(n);
            window.addEventListener("load", startup, false);
            function startup() {
                colorPicker = document.querySelector("#colorPicker");
                colorPicker.value = defaultColor;
                colorPicker.addEventListener("input", updateFirst, false);
                colorPicker.addEventListener("change", updateAll, false);
                colorPicker.select();
              }
            })
        }
    }
};