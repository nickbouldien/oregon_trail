class PartyMember {
  constructor(name){
    this.name = name;
    this.status = "well"; // sick/hurt, well, dead
    this.disease = ""; //update for specific injury/disease
    //if this.disease != "", this.status != well
  }

}

module.exports = PartyMember;
