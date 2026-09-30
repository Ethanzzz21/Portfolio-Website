
const CANVAS = document.getElementById("sineWave");
const CONTEXT = CANVAS.getContext("2d");
console.log(CANVAS.width)
console.log(CANVAS.height)

const AMPLITUDE = CANVAS.height - 100;
const FREQUENCY = 0.05;
const PHASE = 0;

function drawSineWave() {

    CONTEXT.beginPath();
    CONTEXT.moveTo(0, CANVAS.height/2);

    for (let x = 0; x < CANVAS.width; x++) {
        let y = AMPLITUDE*Math.sin(FREQUENCY*x + PHASE);
        CONTEXT.lineTo(x, y + CANVAS.height/2);
    }

    CONTEXT.strokeStyle = "blue";
    CONTEXT.stroke();
}

drawSineWave();
