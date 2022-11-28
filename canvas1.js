window.addEventListener("load", init)

function init() {
    let canvas = document.querySelector("#can");
    let context = canvas.getContext("2d");
    

    context.save();
    context.beginPath();
    context.fillStyle = "red"
    context.moveTo(30, 10);
    context.quadraticCurveTo(35, 20, 90, 10);
    context.lineTo(90, 70);
    context.quadraticCurveTo(35, 80, 30, 70);
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = "white"
    context.strokeStyle = "#a19d9d8d"
    context.moveTo(90, 10);
    context.quadraticCurveTo(155, 1, 170, 10);
    context.lineTo(170, 70);
    context.quadraticCurveTo(155, 60, 90, 70);
    context.stroke();
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = "red"
    context.moveTo(170, 10);
    context.quadraticCurveTo(210, 20, 240, 10);
    context.lineTo(240, 70);
    context.quadraticCurveTo(220, 80, 170, 70);
    context.closePath();
    context.fill();
  
    context.save()
    context.translate(110, 30)
    context.fillStyle = "red"
    context.moveTo(0, 0);
    context.lineTo(4, 5)
    context.lineTo(-8,4);
    context.lineTo(2, 8);
    context.lineTo(-5, 9.5);
    context.lineTo(9, 14);
    context.lineTo(1, 18);
    context.lineTo(17, 15);
    context.lineTo(17, 23);
    context.lineTo(18, 15);
    context.lineTo(34, 17);
    context.lineTo(27, 14);
    context.lineTo(42, 8);
    context.lineTo(33, 8);
    context.lineTo(45, 2);
    context.lineTo(32, 4);
    context.lineTo(37, -1);
    context.lineTo(23, 4);
    context.lineTo(30, -7);
    context.lineTo(23, -4);
    context.lineTo(18, -10);
    context.lineTo(14.5, -4);
    context.lineTo(6, -6);
    context.lineTo(14, 4);
    context.lineTo(-0.5, 0)
    context.fill();
    context.closePath();
    context.restore();
}