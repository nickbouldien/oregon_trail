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
    this.recentlyRecovered = ""
    this.recentlyDeceased = ""
    this.recentlyFellIll = ""
    this.locations = [
        { name: "Rachel's Death Valley",
          source: "a.png"},
        { name: "Brady's Terranium",
          source: "b.png"}
      ] // all the locations in the game
    this.daysSpent = 0;
    this.currentLocation = 0; // index of the locations array
    this.diseases = [
      {name: "cholera", chance: 30},
      {name: "dysentery", chance: 20},
      {name: "broken leg", chance: 80},
      {name: "broken arm", chance: 60},
      {name: "bitten by snake", chance: 100},
      {name: "influenza", chance: 20},
      {name: "spontaneous combustion", chance: 5000}
    ]
    if (id === undefined) {
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
  diseaseRecovery(chance, partyMemberIndex){
    let i = partyMemberIndex
    let randomNum = Math.floor(Math.random() * chance) + 1
    if (randomNum === 1){
      this.partyMembers[i].disease = ""
      this.partyMembers[i].status = "well"
      this.recentlyRecovered = this.partyMembers[i].name
      return true
    }

  }
  getSick(chance, partyMemberIndex){
    let i = partyMemberIndex
    let randomNum = Math.floor(Math.random() * chance) + 1
    if (randomNum === 1){
      return true
    }
  }

  checkSick(){
    for (var i = 0; i < this.partyMembers.length; i++){
      if (this.partyMembers[i].status == "well"){

      }
    }
  }

  checkRecovered(){
    for (var i = 0; i < this.partyMembers.length; i++){
      if (this.partyMembers[i].status == "sick"){
        switch(this.partyMembers[i].disease){
          case "dysentery":
            if (this.diseaseRecovery(4, i)){
              return true
            }
            break;
          case "cholera":
            if (this.diseaseRecovery(20, i)){
              return true
            }
            break;
          case "broken leg":
            if (this.diseaseRecovery(5, i)){
              return true
            }
            break;
          case "broken arm":
            if (this.diseaseRecovery(3, i)){
              return true
            }
            break;
          case "bitten by snake":
            if (this.diseaseRecovery(10, i)){
              return true
            }
            break;
          case "influenza":
            if (this.diseaseRecovery(3, i)){
              return true
            }
            break;
          default:
            break;
        }
      }
    }
    return false
  }
  takeTurn(){
    if (this.currentLocation === this.locations.length-1 ){
      return "game-won"
    }
    if (this.checkRecovered()){
      return "recovered"
    }
    if (this.checkSick()){
      return "sick"
    }
    //check if recovered
    //check if sick
    // check if dead
    //check if damage
    //decrement supplies
    //if all false, next location
    this.currentLocation++
    this.supplies.poundsFood -= 10
    return 'location'
  }
}

module.exports = Game
