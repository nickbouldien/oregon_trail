const Game = require('./models/game')
const PartyMember = require('./models/partyMember')
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
//app.use(expressLayouts);


app.get('/', function(request, response) {
  response.render('home');
});

app.post('/nameTravelers', function(request, response){
  //console.log(request.body);
  let numberTravelers = request.body.quantity;
  console.log("num" + numberTravelers);
  response.render('partyMembers', {members: numberTravelers});
});

app.post('/outset', function(request, response){
  //create a new game with random supplies
  let game = new Game()
  //add players to game
  let nameObj = request.body
  for (var property in nameObj){
    let traveler = new PartyMember(nameObj[property])
    game.partyMembers.push(traveler)
  }
  //save the game
  game.save()
  //persist this game's id by writing the game id into a cookie
  response.cookie('gameId', game.id)
  //display the outset page
  response.render('outset', {game: game});
})
app.get('/location', function(request, response){
  //load the game and display current location
  let gameId = response.cookie('gameId')
  let game = new Game(gameId)
  game.load()
  response.render('location', {game: game})
})

app.listen(3000, function(){
  console.log('listening on port 3000');
})
