const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const exp = require('constants');
const { Console } = require('console');

describe('Park', function() {

    let park, dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5;

  beforeEach(function () {
    park = new Park ('Jurassic Park', 100, [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5]);
    dinosaur1 = new Dinosaur ('T-Rex', 'Carnivore', 100)
    dinosaur2 = new Dinosaur ('Brachiosaurus', 'Herbivore', 50)
    dinosaur3 = new Dinosaur ('Stegosaurus', 'Herbivore', 50)
    dinosaur4 = new Dinosaur ('Triceratops', 'Herbivore', 75)
    dinosaur5 = new Dinosaur ('Oviraptor', 'Omnivore', 25)
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5]);
  });


  it('should be able to find all dinosaurs of a particular species', function(){
    const expected = [dinosaur1];
    const actual = park.getDinosaurBySpecies('T-Rex');
    assert.deepStrictEqual(actual, expected)
  });

  it ('should count number of dinosaurs in collection', function(){
    const actual = park.collection.length;
    const expected = 5
    assert.deepStrictEqual(actual, expected)
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 7)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur5);
    const actual = park.collection;
    const expected = [dinosaur1, dinosaur2, dinosaur3, dinosaur4]
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most guests', function(){
    const expected = dinosaur1;
    const actual = park.getMostPopular();
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const expected = 300
    const actual = park.calculateVisitors(1)
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const expected = 109500
    const actual = park.calculateVisitors(365)
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate total revenue for one year', function(){
    const expected = 10950000
    const actual = park.calculateRevenue(365)
    assert.deepStrictEqual(actual, expected)
  });

});
