// idk
let penColor = "#000000"; // De pen color
let brushSize = 5;//de pen size


document.addEventListener('DOMContentLoaded', () => {
    playAll();
});
 


//function to play correct audio
function playAll() {
    var gedi = new Audio('assets/gedi.mp3');
   // var alarm = new Audio('assets/alarm.mp3');
    var vsauce = new Audio('assets/vsauce.mp3');
    vsauce.play();
    gedi.play();
    alarm.play();
};



const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
canvas.addEventListener("mousedown", () => {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = penColor;
    ctx.lineCap='round';
});
canvas.addEventListener("mousemove", e => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    undoStack.push(canvas.toDataURL());

});

    // Clear Canvas Button
    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    });

    // Undo Button
const undoButton = document.getElementById('undo');
undoButton.addEventListener('click', () => {
    if (undoStack.length > 1) { redoStack.push(undoStack.pop()); 
        const img = new Image();
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        };
        img.src = undoStack[undoStack.length - 1];
    }
});


// Undo and Redo stacks
let undoStack = [canvas.toDataURL()];
let redoStack = [];

const brushSizeInput = document.getElementById('brushSize');
brushSizeInput.addEventListener('input', () => {
    brushSize = brushSizeInput.value;
});

   // Pen color 
   const penInput = document.getElementById('pen');
   penInput.addEventListener('input', () => {
    penColor = penInput.value;
   });

      // save

const save = document.getElementById('save');
