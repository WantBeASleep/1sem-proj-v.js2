import G1 from "../techInfo/G1.js"
import G2 from "../techInfo/G2.js"
import B2 from "../techInfo/B2.js"
import B3 from "../techInfo/B3.js"

function addForm() {
    const  form = document.createElement('form');
    const selectS = document.createElement('select');
    const selectE = document.createElement('select');
    const elemCount = G1.techinfo.countRooms + G2.techinfo.countRooms + B2.techinfo.countRooms + B3.techinfo.countRooms;

    const allRooms = G1.rooms.concat(G2.rooms, B2.rooms, B3.rooms);

    selectS.id = "selectS";
    selectE.id = "selectE";

    for (let i=1; i<elemCount; i++){
        const optionS = document.createElement('option');
        const optionE = document.createElement('option');

        optionS.id = i;
        optionE.id = i;

        optionS.text = allRooms[i-1].name;
        optionE.text = allRooms[i-1].name;

        optionS.value = allRooms[i-1].value;
        optionE.value = allRooms[i-1].value;

        selectS.append(optionS);
        selectE.append(optionE);
    }

    
    const btn = document.createElement("button");
    btn.textContent = "Построить!"

    form.append(selectS);
    form.append(selectE);
    form.append(btn);

    form.id = "inputform";

    document.body.append(form);
}

export default addForm;