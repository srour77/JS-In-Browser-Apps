const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 70;
let drawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(ev) {
    if (!drawing) {return;}
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(ev.offsetX, ev.offsetY);
    ctx.stroke();

    lastX = ev.offsetX;
    lastY = ev.offsetY;

    hue++;
    if (hue >= 360) {
        hue = 0;
    }
}

canvas.addEventListener('mousedown', function(ev){
    drawing = true;
    lastX = ev.offsetX;
    lastY = ev.offsetY;
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', function(){
    drawing = false;
});

canvas.addEventListener('mouseout', function(){
    drawing = false;
});