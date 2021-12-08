// Объявляем значения
import G_1 from "./G_1.js";
// const G_1 = [ 35,
//     {value : "center", x : 970, y : 735},
//     {value : "G101", x : 207, y : 735, name : "Г-101"},
//     {value : "G103", x : 260, y : 735, name : "Г-103"},
//     {value : "G105", x : 324, y : 735, name : "Г-105"},
//     {value : "G107", x : 381, y : 735, name : "Г-106"},
//     {value : "A101", x : 438, y : 735, name : "А-101"},
//     {value : "G109", x : 531, y : 735, name : "Г-109"},
//     {value : "G111", x : 590, y : 735, name : "Г-111"},
//     {value : "G113", x : 640, y : 735, name : "Г-113"},
//     {value : "G115", x : 677, y : 735, name : "Г-115"},
//     {value : "G117", x : 1219, y : 735, name : "Г-117"},
//     {value : "G119", x : 1269, y : 735, name : "Г-119"},
//     {value : "G121", x : 1322, y : 735, name : "Г-121"},
//     {value : "G123", x : 1374, y : 735, name : "Г-123"},
//     {value : "G125", x : 1564, y : 735, name : "Г-125"},
//     {value : "G127", x : 1612, y : 735, name : "Г-127"},
//     {value : "G129", x : 1674, y : 735, name : "Г-129"},
//     {value : "G102", x : 135, y : 735, name : "Г-102"},
//     {value : "G104", x : 261, y : 735, name : "Г-104"},
//     {value : "G106", x : 383, y : 735, name : "Г-106"},
//     {value : "G108", x : 492, y : 735, name : "Г-108"},
//     {value : "G110", x : 590, y : 735, name : "Г-110"},
//     {value : "G114", x : 636, y : 735, name : "Г-114"},
//     {value : "G116", x : 682, y : 735, name : "Г-116"},
//     {value : "G118", x : 723, y : 735, name : "Г-118"},
//     {value : "G120", x : 1220, y : 735, name : "Г-120"},
//     {value : "G122", x : 1270, y : 735, name : "Г-122"},
//     {value : "G124", x : 1320, y : 735, name : "Г-124"},
//     {value : "G126", x : 1375, y : 735, name : "Г-126"},
//     {value : "G128", x : 1500, y : 735, name : "Г-128"},
//     {value : "G130", x : 1600, y : 735, name : "Г-130"},
//     {value : "G131", x : 1675, y : 735, name : "Г-131"},
//     {value : "G132", x : 1740, y : 735, name : "Г-132"},
//     {value : "G109a", x : 490, y : 735, name : "Г-109а"},
//     {value : "G123a", x : 1426, y : 735, name : "Г-123а"},
//     {value : "G126a", x : 1430, y : 735, name : "Г-126а"}
// ]

// Подключаем канвасе и определяем размеры
const canv = document.getElementById("canv");
const ctx = canv.getContext("2d");

canv.width = window.innerWidth;
canv.height = window.innerHeight;

// Ставим картинку
const img = new Image();

img.onload = function() {
    ctx.drawImage(img, 0, 0, canv.width, canv.height);
};

img.src = "Pictures/G_1.png";

// Пишем функции для постройки маршута

const scaleX = canv.width / 1920;
const scaleY = canv.height / 1080;

function x_p(original){
    return Math.round(original * scaleX);
}

function y_p(original){
    return Math.round(original * scaleY);
}


// Создаем форму с маршутами
const form = document.createElement("form");

const selectStart = document.createElement("select");
for (let i=0; i<G_1[0]; i++){
    const option = document.createElement("option");
    let obj = G_1[2 + i];

    option.id = i;
    option.value = obj.value;
    option.text = obj.name;

    selectStart.append(option);
}
form.append(selectStart);

const selectEnd = document.createElement("select");
for (let i=0; i<G_1[0]; i++){
    const option = document.createElement("option");
    let obj = G_1[2 + i];

    option.id = i;
    option.value = obj.value;
    option.text = obj.name;

    selectEnd.append(option);
}
form.append(selectEnd);

const btn = document.createElement("button");
btn.textContent = "Построить!"
form.append(btn);

document.body.append(form);

// строим маршут
function drawRoad(value) {
    let idx_start;
    let idx_end;
    for (let i=2; i< G_1[0]; i++){
        if (G_1[i].value == value.start) idx_start = i;
        if (G_1[i].value == value.end) idx_end = i;
    }
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.moveTo(x_p(G_1[idx_start].x), y_p(G_1[idx_start].y));
    ctx.lineTo(x_p(G_1[1].x), y_p(G_1[1].y));
    ctx.lineTo(x_p(G_1[idx_end].x), y_p(G_1[idx_end].y));
    ctx.stroke();
}


// Получаем информацию кудо откуда
function callback(e) {
    e.preventDefault();
    const values = {
        start : selectStart.value,
        end : selectEnd.value
    };
    drawRoad(values);
}

form.addEventListener("submit", callback);
