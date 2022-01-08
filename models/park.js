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
//make this better, currently can only remove last dino

Park.prototype.getMostPopular = function(){
    return this.collection.reduce((max, dinosaur) => max.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay ? max : dinosaur);
}

Park.prototype.calculateVisitors = function(day){
    return this.collection.reduce((total, dinosaur) => total + dinosaur.guestsAttractedPerDay * day, 0)
}

module.exports = Park; 

// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10