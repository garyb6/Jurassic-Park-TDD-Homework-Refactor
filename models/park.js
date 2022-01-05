const Park = function(name, price){
    this.name = name;
    this.price = price;
    this.collection = []
}

Park.prototype.numberOfDinosaurs = function(){
    return this.collection.length
}
Park.prototype.addDinosaur = function (dinosaur){
    this.collection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur){
    const indexOfDinosaur = this.collection.indexOf(dinosaur)
    this.collection.splice(indexOfDinosaur, 1)
}

Park.prototype.mostGuests = function(){
    var maxGuests = Math.max(...this.collection.map(e => e.dinosaur.guestsAttractedPerDay));
    var dinosaur = this.collection.find(dinosaur => dinosaur.guestsAttractedPerDay === maxGuests);
    return dinosaur
}


module.exports = Park; 

// let max = -Infinity, argmax;
// for( dinosaur of collection)
//     if(dinosaur.guestsAttractedPerDay >= max)
//     max = dinosaur.guestsAttractedPerDay, argmax = dinosaur;
// argmax;

    // const mostPopular = this.collection.reduce((max, dinosaur) => max.dinosaur.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay ? max : dinosaur);
    // return mostPopular