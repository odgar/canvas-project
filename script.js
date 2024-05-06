document.addEventListener('DOMContentLoaded', () => {
    playAll();
});


//function to play correct audio
function playAll() {
    var gedi = new Audio('assets/gedi.mp3');
    var alarm = new Audio('assets/alarm.mp3');
    gedi.play();
    alarm.play();
};


const canvas = document.getElementById('drawing-board');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("mousedown", () => {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = 5;
});

canvas.addEventListener("mousemove", e => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});