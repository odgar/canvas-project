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
    if 
})


/*
canvas.addEventListener('mousedown', () => {
    ctx.beginPath();
    ctx.arc(250, 250, 150, 0, 2 * Math.PI)
    ctx.stroke();
})

/*
//rect = rectangle
canvas.addEventListener('mouseup', () => {
    ctx.clearRect(0,0,canvas.clientWidth, canvas.height);
})

/*
//need to draw da rectangle
ctx.lineTo(500, 190);
ctx.lineTo(500, 400);
ctx.lineTo(300, 400);
ctx.lineTo(300,190);
ctx.stroke(); 

// triangle
ctx.moveTo(400, 30);
ctx.lineTo(400, 30);
ctx.lineTo(500, 190);
ctx.lineTo(300, 190);
ctx.lineTo(400, 30);
ctx.stroke();

// door
ctx.moveTo(435, 400);
ctx.lineTo(435, 295);
ctx.lineTo(435, 400);
ctx.lineTo(435, 400);
ctx.lineTo(365, 400);
ctx.lineTo(365,295);
ctx.lineTo(435,295);
ctx.stroke(); */