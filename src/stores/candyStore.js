import candies from "../candies";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
class CandyStore {
  candies = candies;
  constructor() {
    makeObservable(this, {
      candies: observable,
      createCandy: action,
      deleteCandy: action,
    });
  }
  createCandy = (newCandy) => {
    newCandy.slug = slugify(newCandy.name);
    newCandy.id = this.candies[this.candies.length - 1].id + 1;
    this.candies.push(newCandy);
  };
  deleteCandy = (candyId) => {
    this.candies = this.candies.filter((candy) => candy.id !== candyId);
  };
}

const candyStore = new CandyStore();
export default candyStore;
