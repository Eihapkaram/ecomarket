<template>
  <v-app-bar style="position: fixed; top: 0px" height="100" class="bg-blue">
    <v-container fluid>
      <v-row id="" class="d-flex justify-space-around">
        <v-col cols="2">
          <v-list nav id="logop">
            <v-list-item>
              <img id="logo" src="@/assets/images/logo.png" />
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="8">
          <v-list id="catigorylinks" class="d-flex">
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
        <v-col
          cols="2"
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
            <div @click="openCart()" id="nav-icon-text">
              <v-icon size="40px" id="gropicon" ripple>mdi-cart-outline</v-icon
              ><span>cart</span>
            </div>
          </v-app-bar-nav-icon>
          <v-app-bar-nav-icon id="gropicon-text">
            <div @click="$router.push({ name: 'listpage' })" id="nav-icon-text">
              <v-icon size="40px" id="gropicon" ripple>mdi-heart-outline</v-icon
              ><v-badge
                offset-x="8"
                offset-y="-45"
                color="orange"
                max="5"
                :content="this.list.length"
              ></v-badge>
              <span><v-text-h6>Lists</v-text-h6></span>
            </div>
          </v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { CartStore1 } from "@/store/Cart";
import { ListsStore1 } from "@/store/Lists";
import { mystore } from "@/store";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      drawer: false,
      drawerCart: false,
    };
  },
  computed: {
    ...mapState(mystore, ["catigoryies"]),
    ...mapState(CartStore1, ["CartProduct"]),
    ...mapState(ListsStore1, ["list"]),
  },
  methods: {
    openaside() {
      this.$emit("opne");
    },
    openCart() {
      this.$emit("openCart");
    },

    ...mapActions(mystore, ["getcatigories"]),
  },
  async mounted() {
    await this.getcatigories();
  },
};
</script>

<style lang="css" scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: orange;
  }
}

#link {
  cursor: pointer;
}
#navlistlng {
  z-index: 5;
  position: fixed;
}
#linkcat {
  margin-left: 20px;
}
#headerCart {
  position: relative;
  top: 10px;
  margin-left: 0px;
  width: 96%;
  align-items: flex-start;
  background-color: white;
}
#nav-icon-text {
  display: flex;
  flex-flow: column;
}
#gropicon-text {
  margin-left: 15px;
}
#logop {
  background-color: transparent;
  position: relative;
  padding: 0px;
  padding-top: 5px;
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
</style>
