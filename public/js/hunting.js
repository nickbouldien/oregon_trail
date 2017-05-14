
// every shot, subtract one bullet from game.suplies.bullet

// display area:
// show bullets remaining
// show the amount of (animals) shot

// at the end:
// multiply # animals shot by Math.random() to get poundsFood and update game.supplies.poundsFood

// have exit for hunter to leave early (before 30 seconds)


let scoreBoard = document.querySelector('.score');
let timeUp = false;
let score = 0;
//let bulletsRemaining =


function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  // create shapes
  makeShapeAppear()

  setTimeout(() => timeUp = true, 10000); //game ends after 10 seconds
}

function randTime(min, max) {
  return Math.round(Math.random()* (max-min) + min);
}


// random location
function makeShapeAppear() {  //make first shape appear
    var top = Math.random()*500;
    var left = Math.random()*600;
    var width = (Math.random()*50) + 100;
    var height = Math.random()*200;

    document.getElementById('shape').style.backgroundColor = 'brown'; //getRandomColor();
    document.getElementById('shape').style.height = height + 'px';
    document.getElementById('shape').style.width = width + 'px';
    document.getElementById('shape').style.top = top + 'px';
    document.getElementById('shape').style.left = left + 'px';
    document.getElementById('shape').style.display = 'block';

    const time = randTime(200, 1200);

    setTimeout(() => {
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

  if(!e.isTrusted) return; // cheater!

  score++;
  scoreBoard.textContent = score;

  document.getElementById('shape').style.background = 'red';

  // add random number of pounds food
  //food += Math.floor(Math.random()*10)+2;
  // display total number of pounds food gained during hunt
  //document.querySelector('.food').innerHTML = 'Food captured: ' + game.supplies.bullet;

}

let shapes = document.getElementById('shape');
//console.log(shapes);
shapes.addEventListener("click", shotAnimal);



document.querySelector('.container').addEventListener('click', function(e){
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
