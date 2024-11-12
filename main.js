let dice1 = Math.floor(Math.random()*6)+1;
let dice2 = Math.floor(Math.random()*6)+1;
let area1 = document.getElementById("dice1-area");
let area2 = document.getElementById("dice2-area");
let result = document.getElementById("result");


function diceShowPicture(diceValue, area) {
	
	if(diceValue === 1) {
	area.src = `${diceValue}-dice.png`;	
	area.alt = "dice-${diceValue}";
}
else if(diceValue === 2) {
	area.src = `${diceValue}-dice.png`;	
	area.alt = "dice-${diceValue}";
}
else if(diceValue === 3) {
	area.src = `${diceValue}-dice.png`;	
	area.alt = "dice-${diceValue}";
}

else if(diceValue === 4) {
	area.src = `${diceValue}-dice.png`;	
	area.alt = "dice-${diceValue}";
}

else if(diceValue === 5) {
	area.src = `${diceValue}-dice.png`;	
	area.alt = "dice-${diceValue}";
}

else if(diceValue === 6) {
	area.src = `${diceValue}-dice.png`;	
	area.alt = "dice-${diceValue}";
}	
}



diceShowPicture(dice1, area1);
diceShowPicture(dice2, area2);



if(dice1 === dice2) {
	
	result.textContent = "Draw";
}

else if(dice1 < dice2) {
	
	result.textContent = "Player 2 Won";
}

else if(dice1 > dice2) {
	
	result.textContent = "Player 1 Won";
}


console.log(dice1);
console.log(dice2);