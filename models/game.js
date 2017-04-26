var fs = require('fs')

class Game {
  constructor(id){
    this.partyMembers = [] //array of each partyMember (object)
    this.supplies = {
      oxen: Math.floor(Math.random()*10)+1,
      setsClothing: Math.floor(Math.random()*20)+1,
      bullet: Math.floor(Math.random()*500)+1,
      wagonWheels: Math.floor(Math.random()*6)+1,
      wagonTongues: Math.floor(Math.random()*10)+1,
      wagonAxels: Math.floor(Math.random()*5)+1,
      poundsFood: Math.floor(Math.random()*200)+101
    }
    this.locations = [
        { name: "Rachel's Death Valley",
          source: "a.png"},
        { name: "Brady's Terranium",
          source: "b.png"}
      ] // all the locations in the game
    this.daysSpent = 0;
    this.currentLocation = 0; // index of the locations array
    if (this.id===undefined) {
      this.id = Date.now()
    }
    else {
      this.id = id
    }
  }
  save(){
    fs.writeFileSync('game' + this.id + '.json', JSON.stringify(this))

  }
  load(){
    var rawFile = fs.readFileSync('game' + this.id + '.json')
    var tempGame = JSON.parse(rawFile)
    this.partyMembers = tempGame.partyMembers
    this.supplies = tempGame.supplies
    this.locations = tempGame.locations
    this.daysSpent = tempGame.daysSpent
    this.currentLocation = tempGame.currentLocation
  }
  takeTurn(){
    //check if recovered
    //check if sick
    //check if damaged
    //if all false, next location
    this.currentLocation++
    return 'new location'
  }
}

module.exports = Game
