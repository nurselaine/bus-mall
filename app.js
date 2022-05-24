// global variables
let votes = 10; // set to 25 when done
let items = [];

// DOM References

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultBtn = document.getElementById('show-results-btn');
let resultList = document.getElementById('result-list');

// Constructor

function Item(name, fileExtension = 'jpg'){
  this.votes = 0;
  this.views = 0;
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;

  items.push(this);
}

new Item('bag');
new Item('banana');
new Item('bathroom');
new Item('boots');
new Item('sweep', 'png');
new Item('breakfast');
new Item('bubblegum');
new Item('chair');
new Item('cthulhu');
new Item('dog-duck');
new Item('dragon');
new Item('pet-sweep');
new Item('scissors');
new Item('shark');
new Item('tauntaun');
new Item('unicorn');
new Item('water-can');
new Item('wine-glass');

console.log(items);

// Helper functions/executable Code

// this function will grab three different img from items array
let randomItems = [];
function randomImg(){
  for (let i = 0; i < 3; i++){
    let img = Math.floor(Math.random() * items.length);  
    randomItems.push(img);
  }
}
randomImg();

function validateArray(randomItems){
  let valid = false;
  while(!valid){
    if(randomItems[0] === randomItems[1] || randomItems[0] === randomItems[2] || randomItems[1] === randomItems[2]){
      randomImg();
    } else {
      valid = true;
      return randomItems;
    }
  }

}
validateArray(randomItems);
console.log(randomItems);

function render(){
    imgOne.src = items[randomItems[0]].src;
    imgOne.alt = items[randomItems[0]].name;
    imgTwo.src = items[randomItems[1]].src;
    imgTwo.alt = items[randomItems[1]].name;
    imgThree.src = items[randomItems[2]].src;
    imgThree.alt = items[randomItems[2]].name;
  }  
render();

// Event listeners

// Event Handlers