document.addEventListener('DOMContentLoaded', () => {
    playAll();
});


//function to play correct audio
function playAll() {
    var gedi = new Audio('assets/gedi.mp3');
    var alarm = new Audio('assets/alarm.mp3');
    var vsauce = new Audio('assets/vsauce.mp3');
    vsauce.play();
    gedi.play();
    alarm.play();
};


const canvas = document.getElementById("canvas");
const body = document.querySelector("body");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var theColor = '';
var lineW = 5;
let prevX = null;
let prevY = null;
let draw = false;

body.style.backgroundColor = "#FFFFFF";
var theInput = document.getElementById("favcolor");

const ctx = canvas.getContext("2d");
ctx.lineWidth = lineW;

document.getElementById("ageInputId").onInputId = function(){
draw = null;
document.getElementById("ageInputId").value;
document.getElementById("ageOutputId").innerHTML = lineW;
ctx.lineWidth = lineW;
};

let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr;
    })
})

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
});

let SaceBtn = document.querySelector("save");
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click();
});

window.addEventListener("mousedown", (e) => draw = true);
window.addEventListener("mouseup", (e) => draw = false);

window.addEventListener("mousedown", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX;
        prevY = e.clientY;
        return
    }

    let currentX = e.clientX;
    let currentY = e.clientY;

    ctx.beginpath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY
});







