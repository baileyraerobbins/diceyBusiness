let arr = []; //empty array
let counter = 1; //increment value

const newDiceBtn = document.getElementById('newDiceBtn');
const rollDiceBtn = document.getElementById('rollDiceBtn');
const sumDiceBtn = document.getElementById('sumDiceBtn');

const container = document.getElementById('diceContainer');
container.className = 'container';
document.body.appendChild(container);

class Die {
    constructor() {
        this.div = document.createElement('div'); //create div for dice
        this.div.className = 'dice'; //add class name to div
        this.value = document.createTextNode(counter); //create value for dice
        this.div.appendChild(this.value); //append value to dice
        arr.push(this); //push items to array
        this.roll();//call roll method
        container.appendChild(this.div); //append to div body
        this.div.addEventListener('click', () => this.roll()); //update die value with single click
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            let id = arr.indexOf(this);
            arr.splice(id, 1);
        })
    }
    roll() {
        this.value = Math.floor(Math.random() * 6 + 1); //choose random number
        this.div.textContent = this.value; //assign value to text content
    }
};

newDiceBtn.addEventListener('click', function () {
    new Die();
    console.log(arr)
});

rollDiceBtn.addEventListener('click', function () {
    for (let i = 0; i < arr.length; i++) {
        arr[i].roll();
    }
});

sumDiceBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].value;
    }
    alert(`The total number of die equals ${sum}.`)
});
