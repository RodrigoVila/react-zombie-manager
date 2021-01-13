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

_We need the app to keep track of where each zombie is being held_
I had 2 ideas in mind: To create a single object for each new zombie and store it in its corresponding array(storage) or just keep track of how many zombies we have and move them around freely.
I chose the second one as they are usually a lot and if you kill one, you are not going to say "Oh hey! are you ID ig2x92sxd??" NO! you just kill the motherf.. you don't care about it's ID, but if I had chosen the first option, then each storage would have been an array which would have mapped each zombie inside. To move or delete specific ones, I would have used it's ID.

### Extras 👑

* Context is stored in localstorage to persist data
* You can add new storages after the original ones

### Copywriting 👋
🧟‍♂️🧟‍♂️ Zombies that arrived to give a hand with this project were taken from https://cryptozombies.io/

