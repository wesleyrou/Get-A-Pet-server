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
  const {whichPet,personName} = req.body;

  // People.dequeue();
  Pets.dequeue(whichPet);

  return res.status(204).json();
});

module.exports = router;
