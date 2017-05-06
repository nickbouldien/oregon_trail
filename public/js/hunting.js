
// every shot, subtract one bullet from game.suplies.bullet

// display area:
// show bullets remaining
// show the amount of (animals) shot

// at the end:
// multiply # animals shot by Math.random() to get poundsFood and update game.supplies.poundsFood
//

// have exit for hunter to leave early (before 30 seconds)

var startTime = new Date().getTime();  // start the timer
// if (startTime >= 30) {
//
// }; // stop hunting at 30 seconds

// function stopHunt(){
//   if new Date() - startTime >= 30 {
//
//   }
// }

function makeShapeAppear() {  //make first shape appear
    var top = Math.random()*500;
    var left = Math.random()*600;
    var width = (Math.random()*50) + 100;
    var height = Math.random()*200;

    if (Math.random() > .5) {
       document.getElementById('shape').style.borderRadius = '50%';
    } else {
        document.getElementById('shape').style.borderRadius = '0%';
    }
    document.getElementById('shape').style.backgroundColor= 'brown'; //getRandomColor();
    document.getElementById('shape').style.height = height + 'px';
    document.getElementById('shape').style.width = width + 'px';
    document.getElementById('shape').style.top = top + 'px';
    document.getElementById('shape').style.left = left + 'px';
    document.getElementById('shape').style.display = 'block';

    startTime = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 1000); // make new shape appear after random time <= 2 seconds
    //console.log('putting shape');
}

appearAfterDelay(); // put in appearAfterDelay?  that way it

// need function to subtract bullets even on misses
var food = 0;

function shotAnimal(e) {
  console.log('not working');
  document.getElementById('shape').style.background = 'red';
  //document.getElementById('shape').classList.add('change');

  // add random number of pounds food
  food += Math.floor(Math.random()*10)+2;
  // display total number of pounds food gained during hunt
  document.querySelector('.food').innerHTML = 'Food captured: ' + game.supplies.bullet;


  appearAfterDelay();
}

let shapes = document.getElementById('shape');
//console.log(shapes);
shapes.addEventListener("click", shotAnimal);

document.querySelector('.container').addEventListener('click', function(e){
  console.log('shots fired!');
  //decrease bullets by one for each shot
  game.supplies.bullet -= 1;

  // update display with number of bullets
  document.querySelector('.info').innerHTML = 'Bullets remaining: ' + game.supplies.bullet;

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

//
// <rect x='10' y='10' width='100' height='100' stroke='blue' fill='purple' />
