# React Zombie Manager ⚛️ 

_App made for a technical interview_

## How to run 🚀

* Download or clone repository
* Go to project folder
* Install dependencies `npm install`. 
* Run project `npm start`

## What is it about 📦

_The idea was to build a project management app. You can add, move or delete Zombies between different quarantine storages_

### Front and Back end 🔧

_I used React (CRA) for the front end. No back end was used in this app._

### Why did I make some decisions? 📋

When I read: _"We need the app to keep track of where each zombie is being held"_
I understood that we need to move numbers of zombies between storages, but perhaps what we need was an object containing each zombie with its corresponding ID. In that case I would create an array for each storage and push each zombie into it. In case we need to move or kill it, I would have identified him with his ID to perform the "Update" or "Delete" operation.
Another idea was to use an array of IDs, instead of objects.
### Extras 👑

* Context is stored in localstorage to persist data
* You can add new storages after the original ones

### Copywriting 👋
🧟‍♂️🧟‍♂️ Zombies that arrived to give a hand with this project were taken from https://cryptozombies.io/

