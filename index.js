// Remember to import the data and Dog class!
import dogs from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", (e) => {
  if (e.target.id === "crossBtn" || e.target.id === "crossImg") {
    if (Object.keys(dog).length !== 0) {
      dog.getCrossed();
      setTimeout(() => {
        dog = getNewDog();
        render();
      }, 1500);
    }
  }

  if (e.target.id === "heartBtn" || e.target.id === "heartImg") {
    if (Object.keys(dog).length !== 0) {
      dog.getLiked();
      setTimeout(() => {
        dog = getNewDog();
        render();
      }, 1500);
    }
  }
});

const getNewDog = () => {
  const newDog = dogs.length != 0 ? new Dog(dogs.shift()) : {};
  return Object.keys(newDog).length !== 0 ? newDog : {};
};

const render = () => {
  if (Object.keys(dog).length !== 0) {
    document.querySelector("#dogMain").innerHTML = dog.getDogHtml();
  }
};

let dog = getNewDog();

render();
