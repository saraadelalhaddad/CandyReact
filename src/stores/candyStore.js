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

  createCandy = async (newCandy) => {
    // newCandy.slug = slugify(newCandy.name);
    // newCandy.id = this.candies[this.candies.length - 1].id + 1;
    // this.candies.push(newCandy);
    try {
      const response = await axios.post(
        "http://localhost:8000/candies",
        newCandy
      );
      this.candies.push(response.data);
    } catch (error) {
      console.log("CandyStore -> createCandy -> error", error);
    }
  };
  deleteCandy = async (candyId) => {
    try {
      await axios.delete(`http://localhost:8000/candies/${candyId}`);
      this.candies = this.candies.filter((candy) => candy.id !== candyId);
    } catch (error) {}
  };

  updateCandy = async (updatedCandy) => {
    try {
      await axios.put(
        `http://localhost:8000/candies/${updatedCandy.id}`,
        updatedCandy
      );
      const candy = this.candies.find((candy) => candy.id === updatedCandy.id);
      for (const key in candy) candy[key] = updatedCandy[key];
      candy.slug = slugify(candy.name);
    } catch (error) {
      console.log("CandyStore -> updatedCandy -> error", error);
    }
  };
}

const candyStore = new CandyStore();
candyStore.fetchCandies();
export default candyStore;
