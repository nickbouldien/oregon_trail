
// every shot, subtract one bullet from game.suplies.bullet

// display area:
// show bullets remaining
// show the amount of (animals) shot

// at the end:
// multiply # animals shot by Math.random() to get poundsFood and update game.supplies.poundsFood

// have exit for hunter to leave early (before 30 seconds)


let shapes = document.getElementById('shape');
let container = document.querySelector('.container');

const spots = document.querySelectorAll('.spot');
const scoreBoard = document.querySelector('.score');
const animals = document.querySelectorAll('.animal');
let lastSpot;

let timeUp = false;
let score = 0;

function randTime(min, max) {
  return Math.round(Math.random()* (max-min) + min);
}

function randomSpot(spots) {
  const idx = Math.floor(Math.random() * spots.length);
  const spot = spots[idx];

  if(spot === lastSpot){
    console.log('redo the spot');
    return randomSpot();
  }
  lastSpot = spot;
  return spot;
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  // create shapes
  makeShapeAppear()

  setTimeout(() => timeUp = true, 10000); //game ends after 10 seconds
}



// random location
function makeShapeAppear() {  //make first shape appear
    // var top = Math.random()*500;
    // var left = Math.random()*600;
    // var width = (Math.random()*50) + 100;
    // var height = Math.random()*200;
    //
    // document.getElementById('shape').style.backgroundColor = 'brown'; //getRandomColor();
    // document.getElementById('shape').style.height = height + 'px';
    // document.getElementById('shape').style.width = width + 'px';
    // document.getElementById('shape').style.top = top + 'px';
    // document.getElementById('shape').style.left = left + 'px';
    // document.getElementById('shape').style.display = 'block';

    const time = randTime(200, 1200);
    const spot = randomSpot(spots);
    spot.classList.add('up');

    setTimeout(() => {
      spot.classList.remove('up');
      if(!timeUp) {
          makeShapeAppear()
      }
    }, time);
}
//
// function appearAfterDelay() {
//      // make new shape appear after random time <= 2 seconds
//     //console.log('putting shape');
// }


// need function to subtract bullets even on misses
var food = 0;

function shotAnimal(e) {
  //console.log('not working');

  //if(!e.isTrusted) return; // cheater!

  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;

  //shapes.style.background = 'red';

  // add random number of pounds food
  //food += Math.floor(Math.random()*10)+2;
  // display total number of pounds food gained during hunt
  //document.querySelector('.food').innerHTML = 'Food captured: ' + game.supplies.bullet;

}

//console.log(shapes);
animals.forEach(animal => animal.addEventListener("click", shotAnimal));

//check for shots fired and count them
container.addEventListener('click', function(e){
  console.log('shots fired!');
  //decrease bullets by one for each shot
  bullets--;

  // update display with number of bullets
  //document.querySelector('.info').innerHTML = 'Bullets remaining: ' + game.supplies.bullet;

})


// document.getElementById('shape').onclick = function() {
//     //game.supplies.bullet -= 1;
//
//     document.getElementById('shape').style.display = 'none';
//     var endTime = new Date().getTime();
//     var timeTaken = (endTime - startTime)/1000;
//     document.getElementById('timeTaken').innerHTML = timeTaken;
//     appearAfterDelay();
// }
