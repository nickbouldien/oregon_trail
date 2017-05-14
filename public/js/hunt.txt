
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


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {  //make first shape appear
    var top = Math.random()*400;
    var left = Math.random()*400;
    var width = (Math.random()*200) + 100;
    var height = Math.random()*400;

    if (Math.random() > .5) {
       document.getElementById('shape').style.borderRadius = '50%';
    } else {
        document.getElementById('shape').style.borderRadius = '0%';
    }
    document.getElementById('shape').style.backgroundColor= getRandomColor();
    document.getElementById('shape').style.height = height + 'px';
    document.getElementById('shape').style.width = width + 'px';
    document.getElementById('shape').style.top = top + 'px';
    document.getElementById('shape').style.left = left + 'px';
    document.getElementById('shape').style.display = 'block';

    startTime = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 1200); // make new shape appear after random time <= 2 seconds
}

appearAfterDelay(); // put in appearAfterDelay?  that way it

// need function to subtract bullets even on misses

let shapes = document.querySelector('#shape');
shapes.addEventListener(click, hideShape);

function hideShape() {
  document.querySelector('#shape').style.color = 'blue';
}

// document.getElementById('shape').onclick = function() {
//     //game.supplies.bullet -= 1;
//
//     document.getElementById('shape').style.display = 'none';
//     var endTime = new Date().getTime();
//     var timeTaken = (endTime - startTime)/1000;
//     document.getElementById('timeTaken').innerHTML = timeTaken;
//     appearAfterDelay();
// }
