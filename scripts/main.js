/*
const myHeading = document.querySelector('h2');
const myAdvancesSettings = document.getElementById('advancedSettings');
myHeading.textContent = 'Random Shop Name!';
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

function logSubmit(event) {
  alert('test');
}*/
import { requirejs } from './module.js';
var itemsdatabase = require('../content/items.xml');

var common = document.getElementById('commonitems');
var uncommon = document.getElementById('uncommonitems');
var rare = document.getElementById('rareitems');
var veryrare = document.getElementById('veryrareitems');
var legendary = document.getElementById('legendaryitems');

/*
var itemsdatabase = "../content/items.xml";

let parser = new DOMParser();
var xmlDoc = parser.parseFromString(itemsdatabase,"text/xml");
*/

function rollFunction(){
	let includes = [];
	
	if(common.checked === true){
		includes.push("common");
	}
	if(uncommon.checked === true){
		includes.push("uncommon");
	}
	if(rare.checked === true){
		includes.push("rare");
	}
	if(veryrare.checked === true){
		includes.push("very rare");
	}
	if(legendary.checked === true){
		includes.push("legendary");
	}
	console.log(includes);
}
