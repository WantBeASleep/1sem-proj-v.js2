import G1 from "../techInfo/G1.js"
import G2 from "../techInfo/G2.js"
import B2 from "../techInfo/B2.js"
import B3 from "../techInfo/B3.js"

const data = {
    G1,
    G2,
    B2,
    B3,
};

const canv = document.getElementById('canv');
const ctx = canv.getContext("2d");

canv.width = window.innerWidth;
canv.height = window.innerHeight;

const scaleX = canv.width / 1920;
const scaleY = canv.height / 1080;

function x(original){
    return Math.round(original * scaleX);
}

function y(original){
    return Math.round(original * scaleY);
}

function draw(imgName, build, from, to){

    ctx.clearRect(0, 0, canv.width, canv.height);

    const img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canv.width, canv.height);
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.moveTo(x(from.x), y(from.y));
        ctx.lineTo(x(data[build].center.x), y(data[build].center.y));
        ctx.lineTo(x(to.x), y(to.y));
        ctx.stroke();
    };
    img.src = imgName;
}

export default draw;
