// global variables
let vote = 3; // set to 25 when done
let items = [];

// DOM References

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultBtn = document.getElementById('show-results-btn');
let resultList = document.getElementById('results-list');
console.log(resultList);

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
function randomImg(){
  let randomItems = [];

  for (let i = 0; i < 3; i++){
    let img = Math.floor(Math.random() * items.length);  
    randomItems.push(img);
  }
  return randomItems;
}

function validateArray(array){
  let valid = false;
  while(!valid){
    for(let i = 0; i < array.length/2; i++){
      for(let j = (array.length - 1)/2; j >= 0; j--){
        if (array[i] === array[j]){
          array = randomImg();
        } else {
          valid = true;
          break;
        }
      }
    }
  }
}

function render(){
  let randomItems = randomImg();
  validateArray(randomItems);
  imgOne.src = items[randomItems[0]].src;
  imgOne.alt = items[randomItems[0]].name;
  imgTwo.src = items[randomItems[1]].src;
  imgTwo.alt = items[randomItems[1]].name;
  imgThree.src = items[randomItems[2]].src;
  imgThree.alt = items[randomItems[2]].name;

  items[randomItems[0]].views++;
  items[randomItems[1]].views++;
  items[randomItems[2]].views++;

  console.log(items);
  randomItems = [];
  }  
render();
console.log(items);

// Event listeners
imgContainer.addEventListener('click', handleClick);
resultBtn.addEventListener('click', handleSubmit);

// Event Handlers
function handleClick(e){
  if(vote > 0){
      vote--;
    
    render();
    let imgClick = e.target.alt; // why are we targeting alt? when img alt attribute is nothing

    for(let i = 0; i < items.length; i++){
      if(imgClick === items[i].name){
        items[i].votes++;
      }
    }
  }
}

function handleSubmit(){
  console.log("here")
  console.log(vote);
  if(vote === 0){
    for(let i = 0; i < items.length; i++){
      let elListItem = document.createElement('li');
      elListItem.textContent = `image ${i}: ${items[i].name} Votes: ${items[i].votes}`;
      resultList.appendChild(elListItem);
    }
  }

}