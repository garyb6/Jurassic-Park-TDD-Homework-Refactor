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
module.exports = Park; 