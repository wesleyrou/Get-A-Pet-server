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

    return [
      cat,
      dog
    ];
  },

  dequeue(type) {
    // Remove a pet from the queue.
    let adoptee;
    switch(type){
    case 'dog':
      adoptee = pets.dogs.dequeue();
      //Refill dogs if we've run out
      if(pets.dogs.first === null){
        store.dogs.forEach(dog => pets.dogs.enqueue(dog));
      }
      return adoptee;
    case 'cat':
      adoptee = pets.cats.dequeue();
      //Refill dogs if we've run out
      if(pets.cats.first === null){
        store.cats.forEach(cat => pets.cats.enqueue(cat));
      }
      return adoptee;
    default:
      return;
    }
  }
};
