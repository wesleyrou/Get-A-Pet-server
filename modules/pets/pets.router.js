const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const pets = Pets.get();
  return res.status(200).json(pets);
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const {whichPet} = req.body;

  const people = People.get();
  const pets = Pets.get();

  //If there are no people in Queue
  if(people.length <= 0){
    return res.status(400).json('No one in queue');
  }

  //Choose a pet to adopt
  switch(whichPet){

  //If there are no dogs in Queue
  case 'dog':
    if(pets.dog === null){
      return res.status(400).json('No dogs to adopt');
    } else {
      //Remove a person and a dog from Queue
      People.dequeue();
      Pets.dequeue('dog');
      return res.status(204).end();
    }

  //If there are no cats in Queue
  case 'cat':
    if(pets.cat === null){
      return res.status(400).json('No cats to adopt');
    } else {
      //Remove a person and a cat from Queue
      People.dequeue();
      Pets.dequeue('cat');
      return res.status(204).end();
    }
  default:
    return;
  }
});

module.exports = router;
