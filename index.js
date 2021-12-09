import addForm from './modules/addForm.js';
import inputOpperator from './modules/inputOpperator.js'

const canv = document.getElementById('canv');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

document.body.append(canv);

addForm();
inputOpperator();