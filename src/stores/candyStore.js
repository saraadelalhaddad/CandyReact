import { makeObservable, observable, action } from "mobx";
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
    try {
      const formData = new FormData();
      for (const key in newCandy) formData.append(key, newCandy[key]);
      const response = await axios.post(
        "http://localhost:8000/candies",
        formData
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
      const formData = new FormData();
      for (const key in updatedCandy) formData.append(key, updatedCandy[key]);
      await axios.put(
        `http://localhost:8000/candies/${updatedCandy.id}`,
        formData
      );
      const candy = this.candies.find((candy) => candy.id === updatedCandy.id);
      for (const key in candy) candy[key] = updatedCandy[key];
      candy.image = URL.createObjectURL(updatedCandy.image);
    } catch (error) {
      console.log("CandyStore -> updatedCandy -> error", error);
    }
  };
}

const candyStore = new CandyStore();
candyStore.fetchCandies();
export default candyStore;
