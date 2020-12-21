import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class CandyStore {
  candies = [];
  loading = true;
  constructor() {
    makeObservable(this, {
      candies: observable,
      loading: observable,
      fetchCandies: action,
      createCandy: action,
      updateCandy: action,
      deleteCandy: action,
    });
  }
  fetchCandies = async () => {
    try {
      const response = await instance.get("/candies");
      this.candies = response.data;
      this.loading = false;
    } catch (error) {
      console.error("CandyStore -> fetchCandies -> error", error);
    }
  };

  createCandy = async (newCandy, bakery) => {
    try {
      const formData = new FormData();
      for (const key in newCandy) formData.append(key, newCandy[key]);
      const res = await instance.post(
        `/bakeries/${bakery.id}/candies`,
        formData
      );
      res.data.bakery = bakery;
      this.candies.push(res.data);
      bakery.candies.push({ id: res.data.id });
    } catch (error) {
      console.log("CandyStore -> createCandy -> error", error);
    }
  };

  deleteCandy = async (candyId) => {
    try {
      await instance.delete(`/candies/${candyId}`);
      this.candies = this.candies.filter((candy) => candy.id !== candyId);
    } catch (error) {}
  };

  updateCandy = async (updatedCandy) => {
    try {
      const formData = new FormData();
      for (const key in updatedCandy) formData.append(key, updatedCandy[key]);
      await instance.put(`/candies/${updatedCandy.id}`, formData);
      const candy = this.candies.find((candy) => candy.id === updatedCandy.id);
      for (const key in updatedCandy) candy[key] = updatedCandy[key];
      candy.image = URL.createObjectURL(updatedCandy.image);
    } catch (error) {
      console.log("CandyStore -> updatedCandy -> error", error);
    }
  };

  getCandyById = (candyId) =>
    this.candies.find((candy) => candy.id === candyId);
}

const candyStore = new CandyStore();
candyStore.fetchCandies();
export default candyStore;
