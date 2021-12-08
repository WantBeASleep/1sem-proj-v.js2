//info-code

const TestRoute = {
    startPoint : {
        x : 970,
        y : 1000
    }
}

const GK = {
    centerPoint: {
        x : 970,
        y : 740
    },
    G109 : {
        x : 533,
        y : 740
    }
};

//code
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scaleX = canvas.width / 1920;
const scaleY = canvas.height / 1080;

function wholePixelX(original){
    return Math.round(original * scaleX);
}

function wholePixelY(original){
    return Math.round(original * scaleY);
}


let img = new Image();

img.onload = function() {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.src = "Pictures/G_1.png";

const btn = document.getElementById("btn");

btn.onclick = () => {
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = "5"
    let x1 = wholePixelX(TestRoute.startPoint.x);
    let y1 = wholePixelY(TestRoute.startPoint.y);
    let x2 = wholePixelX(GK.centerPoint.x);
    let y2 = wholePixelY(GK.centerPoint.y);
    let x3 = wholePixelX(GK.G109.x);
    let y3 = wholePixelY(GK.G109.y);
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.stroke();
}

canvas.addEventListener('click', (e) => {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    if ((x > wholePixelX(803)) && (x < wholePixelX(1130)) && (y > wholePixelY(57) && (y < wholePixelY(477)))) {
        console.log("BIBLIOTEKA");
        alert("Я точно джавахейтер, java по пасти, js по масти");
    }
    // 803, 57
    // 1130, 477
});


console.log(window.innerWidth, window.innerHeight);