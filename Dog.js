// Create the Dog class here

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
    console.log("crossed");
    this.hasBeenSwiped = true;
  }
}

export default Dog;
