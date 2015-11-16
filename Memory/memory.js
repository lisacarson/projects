
var array = ['img/dog.png','img/dog.png','img/bee.png','img/bee.png','img/chick.png','img/chick.png','img/dolphin.png','img/dolphin.png','img/elephant.png','img/elephant.png','img/ewe.png','img/ewe.png','img/fish.png','img/fish.png','img/gecko.png','img/gecko.png','img/owl.png','img/owl.png','img/pig.png','img/pig.png','img/rabbit.png','img/rabbit.png','img/turtle.png','img/turtle.png'];
var values = [];
var cardsIds = [];
var cardsFlipped = 0;
Array.prototype.shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	cardsFlipped = 0;
	var output = '';
    array.shuffle();
	for(var i = 0; i < array.length; i++){
		output += '<div id="card_'+i+'" onclick="FlipCard(this,\''+array[i]+'\')"></div>';
	}
	document.getElementById('board').innerHTML = output;
}
  // Flip Cards
function FlipCard(card,val){
	if(card.innerHTML == "" && values.length < 2){
		card.style.background = '#FFF';
		card.innerHTML = '<img src="'+val+'" />';
		if(values.length == 0){
			values.push(val);
			cardsIds.push(card.id);
		} else if(values.length == 1){
			values.push(val);
			cardsIds.push(card.id);
			if(values[0] == values[1]){
				cardsFlipped += 2;
				// Clear both arrays
				values = [];
            	cardsIds = [];
				// Check to see if the whole board is cleared
				if(cardsFlipped == array.length){
					alert("Board cleared... generating new board");
					document.getElementById('board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip back over
				    var card1 = document.getElementById(cardsIds[0]);
				    var card2 = document.getElementById(cardsIds[1]);
				    card1.style.background = '#f2e8c4';
            	    card1.innerHTML = "";
				    card2.style.background = '#f2e8c4';
            	    card2.innerHTML = "";
				    // Clear arrays
				    values = [];
            	    cardsIds = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
newBoard();
