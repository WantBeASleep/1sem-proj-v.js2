import wayFounding from './wayFounding.js'
import draw from './draw.js';

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

function idxValue(array, value){
    let i = 0;
    while(array[i].value != value) {
        i++
    }
    return i;
}

function inputOpperator(){
    const form = document.getElementById('inputform');
    const selectS = document.getElementById('selectS');
    const selectE = document.getElementById('selectE');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const rstart = selectS.value;
        const rend = selectE.value;
        //rStart - roomStart
        const start = rstart.slice(0,2);
        const end = rend.slice(0,2);

        const way = wayFounding(start, end);

        

        if (way.count == 0) {
            const build = way.way[0];
            const imgName = '../Pictures/' + build + '.png';
            let idxFrom = idxValue(data[build].rooms, rstart);
            let idxTo = idxValue(data[build].rooms, rend);
            const from = {x : data[build].rooms[idxFrom].x, y : data[build].rooms[idxFrom].y};
            const to = {x : data[build].rooms[idxTo].x, y : data[build].rooms[idxTo].y};
            draw(imgName, build, from, to);
        } else {
            const buttons = [];
            for (let i=0; i<=way.count; i++){
                const btn = document.createElement('button');
                btn.textContent = way.way[i];
                btn.onclick = () => {
                    const build = way.way[i];
                    const imgName = '../Pictures/' + build + '.png';
                    if (i == 0) {
                        const nextbuild = way.way[i + 1];
                        let idxFrom = idxValue(data[build].rooms, rstart);
                        const from = {x : data[build].rooms[idxFrom].x, y : data[build].rooms[idxFrom].y};
                        const to = {x : data[build].transitPoints[nextbuild].x, y : data[build].transitPoints[nextbuild].y};
                        draw(imgName, build, from, to);
                    } else if (i == way.count) {
                        const prevbuild = way.way[i-1];
                        const from = {x : data[build].transitPoints[prevbuild].x, y : data[build].transitPoints[prevbuild].y};
                        let idxTo = idxValue(data[build].rooms, rend);
                        const to = {x : data[build].rooms[idxTo].x, y : data[build].rooms[idxTo].y};
                        draw(imgName, build, from, to);
                    } else {
                        const nextbuild = way.way[i + 1];
                        const prevbuild = way.way[i-1];
                        const from = {x : data[build].transitPoints[prevbuild].x, y : data[build].transitPoints[prevbuild].y};
                        const to = {x : data[build].transitPoints[nextbuild].x, y : data[build].transitPoints[nextbuild].y};
                        draw(imgName, build, from, to);
                    }
                }
                buttons.push(btn);
            }
            for (let i=0; i<=way.count; i++){
                document.body.append(buttons[i]);
            }
        }
    });
}

export default inputOpperator;
