const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    let cat = null, dog = null;
    try{
      cat = pets.cats.show();
    }catch(e){
    }

    try{
      dog = pets.dogs.show();
    } catch(e){
    }    

    return {
      cat,
      dog
    };
  },

  dequeue(type) {
    // Remove a pet from the queue.
    switch(type){
    case 'dog':
      return pets.dogs.dequeue();
    case 'cat':
      return pets.cats.dequeue();
    default:
      return;
    }
  }
};
