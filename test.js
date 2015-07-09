function getContent(){
    return
    "browser-ie.png\n"+
    "chrome.png\n"+
    "firefox.jpg";
}

var pos = 0;
var imgs = [];

function loaded(){
    var values = getValues().split("\n");

    for(var i = 0; i < values.length;
        var img = new Image();
        img.src = values[i];
        imgs.push(img);
    }
    alert("LOADED!");
    draw(imgs[pos]);
}

function back(){
    pos--;
    if(pos < 0)
        pos = imgs.length - 1;

    draw(imgs[pos]);
}

function forward(){
    pos++;
    if(pos >= imgs.length)
        pos = 0;

    draw(imgs[pos]);
}

function draw(img){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
}