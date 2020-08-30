# Get-A-Pet Server by Wesley 

Get-A-Pet is a demo app for adopting pets in a queue.

Live App: https://get-a-pet.vercel.app/

## API Endpoints

BASEURL: https://peaceful-reaches-89913.herokuapp.com/

### GET /people

Gets an array of all the people in the queue

### POST /people

Requires body containing:

{
  'name':'Jane Doe'
}

Adds a name to the people in the queue.

### GET /pets

Gets the cat and dog objects first in their respective queues.

### DELETE /pets

Requires body containing:

{
  'whichPet':'cat or dog'
}

Adopts a pet matching the submitted body. Deletes the first matching pet from their queue as well as the first person in the people queue.

## Technologies

Get-A-Pet server uses the Express framework.
