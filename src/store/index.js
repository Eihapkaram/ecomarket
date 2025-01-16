import { defineStore } from "pinia";
export const mystore = defineStore("mystore", {
  state: () => ({
    result: [],
    catigory0: "",
    all: "",
    searchrsult: "",
    SingleProduct: "",
    catigoryies: [
      {
        titel: "Beauty",
        route: "beauty",
      },
      {
        titel: "Laptops",
        route: "laptops",
      },
      {
        titel: "Mens Shirts",
        route: "mens-shirts",
      },
      {
        titel: "Mens Watches",
        route: "mens-watches",
      },
      {
        titel: "Bags",
        route: "womens-bags",
      },
      {
        titel: "Jewellery",
        route: "womens-jewellery",
      },
      {
        titel: "Decoration",
        route: "home-decoration",
      },
    ],
    catigoryProducts: "",
    catigoryProducts1: "",
  }),
  actions: {
    async getruslt(item) {
      this.result.push(item);
      console.log(this.result);
    },
    async getcatigories() {
      await fetch("https://dummyjson.com/products/categories")
        .then((res) => {
          let catigory = res.json();
          return catigory;
        })
        .then((catigory) => (this.catigory0 = catigory));
    },
    async getall() {
      await fetch("https://dummyjson.com/products")
        .then((res) => {
          let alle = res.json();
          return alle;
        })
        .then((alle) => {
          this.all = alle.products;
          console.log(this.all);
        });
    },
    async getSingle(id) {
      await fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          let alle = res.json();
          return alle;
        })
        .then((alle) => {
          this.SingleProduct = alle;
          console.log(this.SingleProduct);
        });
    },
    async getCatigoryProduct(catigory) {
      await fetch(`https://dummyjson.com/products/category/${catigory}`)
        .then((res) => {
          let pro = res.json();

          return pro;
        })
        .then((pro) => {
          console.log(pro.products);
          this.catigoryProducts = pro.products;
        });
    },
    async getCatigoryProduct1(catigory) {
      await fetch(`https://dummyjson.com/products/category/${catigory}`)
        .then((res) => {
          let pro = res.json();

          return pro;
        })
        .then((pro) => {
          console.log(pro.products);
          this.catigoryProducts1 = pro.products;
        });
    },
    async getSearchProduct(query) {
      await fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => {
          let pro = res.json();

          return pro;
        })
        .then((pro) => {
          console.log(pro.products);
          this.searchrsult = pro.products;
        });
    },
  },
});
