<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item>1</v-list-item>
        <v-list-item>1</v-list-item>
        <v-list-item>1</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      id="drowerCArt"
      width="500"
      location="right"
      v-model="drawerCart"
    >
      <v-container>
        <v-row justify="end"
          ><v-icon
            style="cursor: pointer; z-index: 10"
            @click="this.drawerCart = false"
            >mdi-close</v-icon
          ></v-row
        >
        <v-row
          id="headerCart"
          class="d-flex flex-column"
          style="height: fit-content; position: static"
        >
          <span class="text-h4">Shopping Cart</span>
          <span>items : {{ this.CartProduct.length }}</span>
          <v-progress-linear
            color="deep-orange"
            height="10"
            style="z-index: 5"
            :model-value="this.CartProduct.length * 20"
            striped
          ></v-progress-linear>
        </v-row>
        <div id="itemCartcon">
          <v-row
            style="
              height: fit-content;
              position: relative;
              margin-bottom: 30px;
              width: 98%;
              top: 100px;
            "
            v-for="item in this.CartProduct"
            :key="item.id"
          >
            <v-table style="width: 100%; margin-bottom: 60px">
              <thead>
                <th>product</th>
                <th style="padding-left: 10px">price</th>
                <th width="200px">qunanitiy</th>
                <th>title</th>
              </thead>
              <tr>
                <td>
                  <img
                    width="150"
                    style="position: relative; left: -10px"
                    :src="item.thumbnail"
                  />
                </td>
                <td>
                  <div>
                    <span style="color: brown; width: 100px"
                      >{{ Math.ceil(item.price) * item.quantity }}$</span
                    >
                  </div>
                </td>
                <td>
                  <span style="color: brown">{{ item.quantity }}</span>
                </td>
                <td>
                  <div style="width: 135px">
                    <span>{{ item.title }}</span>
                  </div>
                </td>
                <td>
                  <v-icon
                    @click="this.delitem(item.id)"
                    style="position: relative; top: -60px"
                    >mdi-close</v-icon
                  >
                </td>
              </tr>
            </v-table>
          </v-row>
        </div>
        <v-div id="conCartBtn" class="d-flex flex-column">
          <br />
          <v-btn
            @click="this.delcart()"
            class="bg-blue"
            id="btnadd"
            variant="outline"
            width="500px"
            prepend-icon="mdi-delete-empty"
            >check out</v-btn
          >

          <v-btn
            @click="this.$router.push({ name: 'CartPage' })"
            class="bg-black"
            id="btnadd"
            variant="outline"
            width="500px"
            prepend-icon="mdi-cart"
            >view cart</v-btn
          >
        </v-div>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar style="position: absolute" height="160" class="bg-blue">
      <v-container fluid>
        <v-row id="row1" class="d-flex justify-space-around">
          <v-col cols="3">
            <v-list nav id="logop">
              <v-list-item>
                <img id="logo" src="../assets/images/logo.png" />
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="5">
            <span style="position: relative">
              <input
                style="outline: none"
                class="bg-weghit"
                type="search"
                placeholder="search"
                v-model="this.searchvalue"
              /><v-icon
                @click="this.Search(this.searchvalue)"
                style="position: absolute"
                ripple
                color="black"
                id="iconsearch"
                >mdi-magnify</v-icon
              >
            </span>
          </v-col>
          <v-col
            cols="3"
            style="display: flex; flex-flow: row; position: relative"
            ><v-app-bar-nav-icon id="gropicon-text" @click="openaside()">
              <div id="nav-icon-text">
                <v-icon size="40px" id="gropicon1" ripple>mdi-menu</v-icon>
                <span>menu</span>
              </div>
              <v-badge
                offset-x="-55"
                offset-y="-35"
                color="orange"
                max="5"
                :content="this.CartProduct.length"
              ></v-badge>
            </v-app-bar-nav-icon>
            <v-app-bar-nav-icon id="gropicon-text">
              <div
                @click="this.drawerCart = !this.drawerCart"
                id="nav-icon-text"
              >
                <v-icon size="40px" id="gropicon" ripple
                  >mdi-cart-outline</v-icon
                ><span>cart</span>
              </div>
            </v-app-bar-nav-icon>
            <v-app-bar-nav-icon id="gropicon-text">
              <div id="nav-icon-text">
                <v-icon size="40px" id="gropicon" ripple
                  >mdi-account-outline</v-icon
                >
                <span><v-text-h6>sgin</v-text-h6></span>
              </div>
            </v-app-bar-nav-icon>
            <v-app-bar-nav-icon id="gropicon-text">
              <div
                @click="$router.push({ name: 'listpage' })"
                id="nav-icon-text"
              >
                <v-icon size="40px" id="gropicon" ripple
                  >mdi-heart-outline</v-icon
                ><v-badge
                  offset-x="8"
                  offset-y="-55"
                  color="orange"
                  max="5"
                  :content="this.list.length"
                ></v-badge>
                <span><v-text-h6>Lists</v-text-h6></span>
              </div>
            </v-app-bar-nav-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="7"
            style="display: flex; flex-flow: row nowrap; position: relative"
            ><v-list id="catigorylinks" class="d-flex">
              <v-list-item active="true" id="link">
                <router-link :to="{ name: 'home' }">home</router-link>
              </v-list-item>
              <v-list-item
                ><router-link
                  id="linkcat"
                  v-for="cat in this.catigoryies"
                  :key="cat.titel"
                  :to="{
                    name: 'catigory',
                    params: { catigory: cat.route },
                  }"
                  >{{ cat.titel }}</router-link
                ></v-list-item
              >
            </v-list>
          </v-col>
          <v-col cols="6" id="langhelp">
            <v-menu eager id="lang" activator="#btnlang">
              <v-list style="background-color: beige; width: 100px">
                <v-list-item
                  active-color="red"
                  base-color="blue"
                  append-icon="mdi-home"
                >
                  <v-list-item-title>en</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>ar</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <span style="cursor: pointer" id="btnlang">
              lang<v-icon>mdi-home</v-icon>
            </span>

            help<v-icon>mdi-home</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <FixedNav @opne="openaside()" @openCart="openCart()" />
    <v-main> <slot></slot> </v-main>
  </v-layout>
</template>
<script>
import { mystore } from "@/store";
import { CartStore1 } from "@/store/Cart";
import { ListsStore1 } from "@/store/Lists";
import { mapState, mapActions } from "pinia";
import FixedNav from "./Home/FixedNav.vue";
export default {
  components: { FixedNav },
  data() {
    return {
      drawer: false,
      drawerCart: false,
      quant: 1,
      localitem: "",
      todolist: [],
      searchvalue: "",
    };
  },
  computed: {
    ...mapState(mystore, ["catigoryies", "searchrsult"]),
    ...mapState(CartStore1, ["CartProduct"]),
    ...mapState(ListsStore1, ["list"]),
  },
  methods: {
    openCart() {
      this.drawerCart = !this.drawerCart;
    },
    openaside() {
      this.drawer = !this.drawer;
    },
    Search(data) {
      this.$router.push({ name: "searchpage" });
      this.getSearchProduct(data);
    },
    delcart() {
      this.CartProduct.splice(0, 1);
    },

    ...mapActions(mystore, ["getcatigories", "getSearchProduct"]),
    ...mapActions(CartStore1, ["GetCart", "delitem", "update"]),
    ...mapActions(ListsStore1, ["updateL", "GetCartL"]),
  },
  async mounted() {
    await this.updateL();
    await this.GetCartL();
    await this.update();
    await this.GetCart();
    await this.getcatigories();
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: orange;
  }
}
input {
  background-color: azure;
  height: 50px;
  width: 400px;
  top: 8px;
  border-radius: 30px;
  padding-left: 15px;
  position: relative;
  left: -90px;
}
#iconsearch {
  position: relative;
  left: 270px;
  top: 5px;
  z-index: 2;
  flex-flow: row-reverse;
}
#gropicon {
  margin: 10px;
  position: relative;
  color: rgb(247, 199, 109);
}
#gropicon1 {
  margin: 10px;
  position: relative;
}
#langhelp {
  display: flex;
  flex-flow: row-reverse;
  margin-left: -150px;
  position: relative;
  top: 15px;
  gap: 10px;
}
#lang {
  position: relative;
  left: 0px;
  top: 0px;
}
#nav-icon-text {
  display: flex;
  flex-flow: column;
}
#gropicon-text {
  margin-left: 20px;
}
#logop {
  background-color: transparent;
  position: relative;
  left: -80px;
}
#logo {
  height: fit-content;
  width: fit-content;
}
#catigorylinks {
  background-color: transparent;
  overflow: initial;
}
#row1 {
  position: relative;
  top: 10px;
}
#link {
  cursor: pointer;
}
#navlistlng {
  z-index: 5;
  position: fixed;
}
#linkcat {
  margin-left: 10px;
}
#headerCart {
  position: relative;
  top: 10px;
  margin-left: 0px;
  width: 96%;
  align-items: flex-start;
  background-color: white;
}
#qountbtn {
  position: relative;
  height: 50px;
  left: 0px;
  border-radius: 15px;
  border: 2px solid black;
  width: 80px;
}
#plus {
  position: relative;
  left: -20px;
  top: 5px;
  z-index: 3;
}
#munse {
  position: relative;
  left: 30px;
  top: 5px;
  z-index: 3;
}
#qointcon {
  display: flex;
  flex-flow: column;
  position: relative;
  background-color: white;
}
#conten {
  display: flex;
  flex-flow: column;
}
#itemCartcon {
  height: 400px;
  overflow-y: scroll;
}
#itemCartcon::-webkit-scrollbar {
  width: 5px;
}
#itemCartcon::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: rgb(0, 0, 0);
}
#itemCartcon::-webkit-scrollbar-track {
  width: 5px;
  background-color: rgb(253, 253, 253);
}
#itemCartcon::-webkit-scrollbar-button {
  display: none;
}
#drowerCArt::-webkit-scrollbar {
  width: 5px;
  display: none;
}
#btnadd {
  border-radius: 30px;
  height: 50px;
}
#conCartBtn {
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
