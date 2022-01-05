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
module.exports = Park; 