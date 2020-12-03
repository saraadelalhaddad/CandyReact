import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class BakeryStore {
  bakeries = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      bakeries: observable,
      loading: observable,
      fetchBakeries: action,
      //   createBakery: action,
      //   updateBakery: action,
      //   deleteBakery: action,
    });
  }

  fetchBakeries = async () => {
    try {
      const response = await axios.get("http://localhost:8000/bakeries");
      this.bakeries = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BakeryStore -> fetchBakeries -> error", error);
    }
  };

  //   createBakery = async (newBakery) => {
  //     try {
  //       const formData = new FormData();
  //       for (const key in newBakery) formData.append(key, newBakery[key]);
  //       const response = await axios.post(
  //         "http://localhost:8000/bakeries",
  //         formData
  //       );
  //       this.bakeries.push(response.data);
  //     } catch (error) {
  //       console.log("BakeryStore -> createBakery -> error", error);
  //     }
  //   };

  //   deleteBakery = async (bakeryId) => {
  //     try {
  //       await axios.delete(`http://localhost:8000/bakeries/${bakeryId}`);
  //       this.bakeries = this.bakeries.filter((bakery) => bakery.id !== bakeryId);
  //     } catch (error) {}
  //   };

  //   updateBakery = async (updatedBakery) => {
  //     try {
  //       const formData = new FormData();
  //       for (const key in updatedBakery) formData.append(key, updatedBakery[key]);
  //       await axios.put(
  //         `http://localhost:8000/bakeries/${updatedBakery.id}`,
  //         formData
  //       );
  //       const bakery = this.bakeries.find(
  //         (bakery) => bakery.id === updatedBakery.id
  //       );
  //       for (const key in bakery) bakery[key] = updatedBakery[key];
  //       bakery.image = URL.createObjectURL(updatedBakery.image);
  //     } catch (error) {
  //       console.log("bakeryStore -> updatedBakery -> error", error);
  //     }
  //   };
}

const bakeryStore = new BakeryStore();
bakeryStore.fetchBakeries();
export default bakeryStore;
