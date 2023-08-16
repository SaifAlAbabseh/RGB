var redValue = 0;
var greenValue = 0;
var blueValue = 0;
var currentRGB = "rgb(0,0,0)";

function changedValue(color, value) {
    if(color == "red") {  //Red
        redValue = value;
    } 
    else if(color == "green") {  //Green
        greenValue = value;
    } 
    else {  //Blue
        blueValue = value;
    }
    document.getElementById(color+"-range-value").innerHTML = value;
    currentRGB = "rgb("+redValue+","+greenValue+","+blueValue+")";
    document.body.style.backgroundColor = currentRGB;
}

function copyRGB() {
    let copyButton = document.getElementById("copy-button");
    if(copyButton.innerHTML == "Copy RGB") {
        navigator.clipboard.writeText(currentRGB);
        copyButton.innerHTML = "Copied to clipboard!";
        setTimeout(function() {
            copyButton.innerHTML = "Copy RGB";
        }, 2000);
    }
}