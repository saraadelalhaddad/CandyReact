import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class CandyStore {
  candies = [];
  constructor() {
    makeObservable(this, {
      candies: observable,
      fetchCandies: action,
      createCandy: action,
      updateCandy: action,
      deleteCandy: action,
    });
  }
  fetchCandies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/candies");
      this.candies = response.data;
    } catch (error) {
      console.error("CandyStore -> fetchCandies -> error", error);
    }
  };

  createCandy = (newCandy) => {
    newCandy.slug = slugify(newCandy.name);
    newCandy.id = this.candies[this.candies.length - 1].id + 1;
    this.candies.push(newCandy);
  };
  deleteCandy = (candyId) => {
    this.candies = this.candies.filter((candy) => candy.id !== candyId);
  };
  updateCandy = (updatedCandy) => {
    const candy = this.candies.find((candy) => candy.id === updatedCandy.id);
    for (const key in candy) candy[key] = updatedCandy[key];
    candy.slug = slugify(candy.name);
  };
}

const candyStore = new CandyStore();
candyStore.fetchCandies();
export default candyStore;
