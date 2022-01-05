const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const exp = require('constants');

describe('Park', function() {

    let park;
    let dinosaur1;
    let dinosaur2;
    let dinosaur3;
    let dinosaur4;
    let dinosaur5;

  beforeEach(function () {
    park = new Park ('Jurassic Park', 100);
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
    assert.deepStrictEqual(actual, []);
  });

  it ('should count number of dinosaurs in collection', function(){
    const actual = park.collection.length;
    assert.deepStrictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 2)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const expected = [dinosaur2];
    const actual = park.collection;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most guests', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.mostGuests();
    const expected = dinosaur1;
    const actual = park.collection;
    assert.deepStrictEqual(actual, expected)
  });



  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
