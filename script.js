// ECHO is on.
var random,
dieArr = [], 
genDie = document.querySelector('#die'),
rollDice = document.querySelector('#diceroll');


document.addEventListener('DOMContentLoaded', function(){
    var Die = function() {
        var randomNumb = Math.floor((Math.random()*6)+1);
        this.value = randomNumb;
        this.dieDiv = document.createElement('div');
        this.dieDiv.className = 'die-div';
        document.body.appendChild(this.dieDiv); 
        this.dieDiv.innerText = randomNumb;
        this.dieDiv.addEventListener('click', this.roll.bind(this));        
        this.dieDiv.addEventListener('dblclick', this.removeDiv.bind(this));   
    }
    Die.prototype.roll = function() {
        this.value = Math.floor((Math.random()*6)+1); 
        this.dieDiv.innerText = this.value;
        console.log(this.dieDiv.innerText = this.value);
        
    }  
    Die.prototype.removeDiv = function() {
        this.dieDiv.remove();
        dieArr.pop();
    }
      
    genDie.addEventListener('click', function(){
        var die = new Die();
        dieArr.push(die);
    });
    rollDice.addEventListener('click', function(){
        for(var i = 0; i < dieArray.length; i++){
            dieArr[i].roll();
        }
    });
});
