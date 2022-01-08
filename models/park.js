const Park = function(name, price, collection){
    this.name = name;
    this.price = price;
    this.collection = collection;
}

Park.prototype.getDinosaurBySpecies = function (species){
    return this.collection.filter(dinosaur => dinosaur.species === species)
}

Park.prototype.numberOfDinosaurs = function(){
    return this.collection.length
}
Park.prototype.addDinosaur = function (dinosaur){
    this.collection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur){
    this.collection.pop(dinosaur)
}

Park.prototype.getMostPopular = function(){
    let bnog = this.collection.reduce((max, dinosaur) => max.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay ? max : dinosaur);
    return bnog 
}
// let maxGame = games.reduce((max, game) => max.votes > game.votes ? max : game);


module.exports = Park; 

// let max = -Infinity, argmax;
// for( dinosaur of collection)
//     if(dinosaur.guestsAttractedPerDay >= max)
//     max = dinosaur.guestsAttractedPerDay, argmax = dinosaur;
// argmax;

    // const mostPopular = this.collection.reduce((max, dinosaur) => max.dinosaur.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay ? max : dinosaur);
    // return mostPopular