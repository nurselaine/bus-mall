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

// Canvas References

let ctx = document.getElementById('myChart');

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
// console.log(items);

// Helper functions/executable Code

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
  console.log(randomItems);
  }  
render();
// console.log(randomItems);
// console.log(items);

// // Function to  Render Chart
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
          label: '# of Views',
          data: view,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
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

// Event listeners
imgContainer.addEventListener('click', handleClick);
resultBtn.addEventListener('click', handleSubmit);

// Event Handlers
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
  console.log("here")
  console.log(vote);
  if(vote === 0){
    // for(let i = 0; i < items.length; i++){
    //   let elListItem = document.createElement('li');
    //   elListItem.textContent = `${items[i].name} Votes: ${items[i].votes}`;
    //   resultList.appendChild(elListItem);
    // }
    renderChart();
  }
}