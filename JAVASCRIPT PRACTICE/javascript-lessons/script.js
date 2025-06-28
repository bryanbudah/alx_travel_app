let xp = 0;
let health= 100;
let gold= 50;
let currentWeapon= 0;
let fighting;
let monsterHealth;
let inventory = [ "stick", "rock", "stone "] ;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
//initialize buttons//
button1.onClick = goStore;
button2.onClick = goCave;
button3.onClick = biteDragon;

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon(30 gold)";
    button1.innerText = "Go to town square";
    
}

function goCave() {
    console.log("Go to cave.")
}

function biteDragon() {
    console.log("Bite Dragon")
}