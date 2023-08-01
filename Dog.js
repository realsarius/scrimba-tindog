// Create the Dog class here
import { disableButtons } from "./utils.js";

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getName() {
    console.log(this.name);
  }
  getDogHtml() {
    return `
      <div class="dogImg" style="background-image:url(${this.avatar});">
        <img src="./images/badge-nope.png" alt="nope text" id="badgeNope" />
        <img src="./images/badge-like.png" alt="like text" id="badgeLike" />
        <h1 id="dogName"> ${this.name}, ${this.age}</h1>
        <h2 id="dogName"> ${this.bio}</h1>
      </div>
      <div class="footer">
        <button id="crossBtn">
          <img src="./images/icon-cross.png" alt="No, I don't think so" id="crossImg" />
        </button>
        <button id="heartBtn">
        <img src="./images/icon-heart.png" alt="Yes, I think so" id="heartImg"/>
      </button>
      </div>
    `;
  }
  getCrossed() {
    document.querySelector("#badgeNope").style.opacity = "1";
    disableButtons();
    this.hasBeenSwiped = true;
  }
  getLiked() {
    document.querySelector("#badgeLike").style.opacity = "1";
    disableButtons();
    this.hasBeenLiked = true;
  }
}

export default Dog;
