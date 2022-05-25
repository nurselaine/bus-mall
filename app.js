// *******************  global variables

let vote = 25; // set to 25 when done
let items = [];

// *******************  DOM References

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultBtn = document.getElementById('show-results-btn');
let resultList = document.getElementById('results-list');

// *******************  Canvas References

let ctx = document.getElementById('myChart');

// *******************  Constructor

function Item(name, fileExtension = 'jpg'){
  this.votes = 0;
  this.views = 0;
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;

  items.push(this);
}

// ************************ Create local storage

// retrieve items from local storage 
let retrieveItems = localStorage.getItem('items');
console.log(items);

// converting retrieved objects back to useable code
let parsedItems = JSON.parse(retrieveItems);
console.log(parsedItems);

// accumulate data for chart
if (retrieveItems){
  items = parsedItems;
  console.log(items);
} else {
  console.log('hello');
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
}

// *************** Helper functions/executable Code

// this function will grab three different img from items array
function randomImg(){
  return Math.floor(Math.random()*items.length);
}

let randomItems = [];
function render(){
  while(randomItems.length < 6){
    let randomNum = randomImg();
    if (!randomItems.includes(randomNum)){
      randomItems.push(randomNum);
    }
  }
  console.log(randomItems);
  imgOne.src = items[randomItems[0]].src;
  imgOne.alt = items[randomItems[0]].name;
  imgTwo.src = items[randomItems[1]].src;
  imgTwo.alt = items[randomItems[1]].name;
  imgThree.src = items[randomItems[2]].src;
  imgThree.alt = items[randomItems[2]].name;

  items[randomItems[0]].views++;
  items[randomItems[1]].views++;
  items[randomItems[2]].views++;
  
  randomItems.splice(0,3);
  }  
render();
// console.log(randomItems);
// console.log(items);

// ************************  Function to  Render Chart
function renderChart(){
  let names = [];
  let votes = [];
  let view = [];

  for(let i = 0; i < items.length; i++){
    names.push(items[i].name);
    votes.push(items[i].votes);
    view.push(items[i].views);
  }

  let myChartObj = {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: [
                '#7400b8',
                '#5e60ce',
                '#4ea8de',
                '#48bfe3',
                '#64dfdf',
                '#72efdd'
            ],
            borderColor: [
                '#7400b8',
                '#5e60ce',
                '#4ea8de',
                '#48bfe3',
                '#64dfdf',
                '#72efdd'
            ],
            borderWidth: 1
        },
        {
          label: '# of Views',
          data: view,
          backgroundColor: [
            '#0081a7',
            '#5e60ce',
            '#4ea8de',
            '#48bfe3',
            '#64dfdf',
            '#72efdd'
          ],
          borderColor: [
              '#0081a7',
                '#5e60ce',
                '#4ea8de',
                '#48bfe3',
                '#64dfdf',
                '#72efdd'
          ],
          borderWidth: 1
      }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  };
  new Chart(ctx, myChartObj);
} 
// renderChart();

// ***********************  Event listeners
imgContainer.addEventListener('click', handleClick);
resultBtn.addEventListener('click', handleSubmit);

// ****************************  Event Handlers
function handleClick(e){
  // console.log(randomItems);
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
  console.log(vote);
  if(vote === 0){
    // for(let i = 0; i < items.length; i++){
    //   let elListItem = document.createElement('li');
    //   elListItem.textContent = `${items[i].name} Votes: ${items[i].votes}`;
    //   resultList.appendChild(elListItem);
    // }
    renderChart();
  // stringify data
  let stringifiedItems = JSON.stringify(items);
  console.log(stringifiedItems);

  // use stringified objects and move into local storage
  localStorage.setItem('items', stringifiedItems);
  }
}