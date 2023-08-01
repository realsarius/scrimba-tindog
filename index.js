// Remember to import the data and Dog class!
import dogs from "./data.js";
import Dog from "./Dog.js";

document.addEventListener("click", (e) => {
  if (e.target.id === "crossBtn" || e.target.id === "crossImg") {
    dog.getCrossed();
    dog = getNewDog();
    render();
  }

  if (e.target.id === "heartBtn" || e.target.id === "heartImg") {
    console.log("heart");
  }
});

const getNewDog = () => {
  const newDog = dogs.length != 0 ? new Dog(dogs.shift()) : {};
  return newDog;
};

const render = () => {
  document.querySelector("#dogMain").innerHTML = dog.getDogHtml();
};

let dog = getNewDog();

render();

// const crossBtn = document.querySelector("#crossBtn");
// const heartBtn = document.querySelector("#heartBtn");
