<template>
  <br />
  <div>
    <v-slide-group>
      <v-slide-group-item v-for="pro in this.catigoryProducts1" :key="pro.id">
      </v-slide-group-item>
    </v-slide-group>
  </div>

  <div style="height: 38rem">
    <header id="head">
      <h3 class="ml-10 text-h5">
        TopMobile <img style="width: 30px" src="" />
      </h3>
      <v-spacer></v-spacer>
      <div
        class="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        @click="
          this.$router.push({
            name: 'catigory',
            params: { catigory: 'smartphones' },
          })
        "
      >
        <div class="progress-bar">
          <span class="mr-5" id="ig">Show ALL</span>
        </div>
      </div>
    </header>
    <br />
    <swiper
      :scrollbar="{
        hide: true,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :mousewheel="true"
      :keyboard="true"
      :slides-per-view="3"
      :spaceBetween="auto"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        id="swip"
        v-for="pro in this.catigoryProducts1"
        :key="pro.id"
      >
        <v-card width="350px" height="520px">
          <v-row>
            <v-btn id="lovebtn" @focus="lovefun(pro)" icon="mdi-heart"></v-btn
            ><v-spacer></v-spacer>
            <span id="availbel" class="d-flex">{{
              pro.availabilityStatus
            }}</span>
          </v-row>
          <img
            id="big-img"
            width="200px"
            style="position: relative; top: -30px"
            class="mx-auto"
            :src="pro.thumbnail"
          />
          <v-card-item style="position: relative; top: -50px; left: -10px">
            <v-card-title>{{ pro.title }}</v-card-title>
            <v-rating
              v-model="pro.rating"
              ripple
              readonly
              :length="5"
              :size="20"
              active-color="orange"
              class="d-flex"
            /><br />
            <v-card-subtitle class="d-flex text-h6" style="color: brown"
              >price : {{ pro.price }} $
            </v-card-subtitle>
            <v-card-subtitle class="d-flex"
              >brand : {{ pro.brand }}
            </v-card-subtitle>
            <v-card-text>
              <swiper
                :scrollbar="{
                  hide: true,
                }"
                :pagination="{
                  clickable: true,
                }"
                :navigation="true"
                :mousewheel="true"
                :keyboard="true"
                :slides-per-view="4"
                :spaceBetween="3"
                :modules="modules"
                class=""
              >
                <swiper-slide v-for="(prox, index) in pro.images" :key="index">
                  <img
                    id="my-galleryimg"
                    height="50px"
                    width="50px"
                    style="z-index: 5"
                    :src="prox"
                  />
                </swiper-slide>
              </swiper>
            </v-card-text>
            <v-card-actions>
              <v-btn
                @click="
                  $router.push({
                    name: 'derilse',
                    params: { idparam: pro.id },
                  })
                "
                rounded
                >show-detilse</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn
                @click="(pro.quantity = 1), this.Additem(pro)"
                rounded
                ripple
                elevation="2"
                style=""
                icon="mdi-cart"
              ></v-btn>
            </v-card-actions>
          </v-card-item>
        </v-card>
      </swiper-slide>
    </swiper>
    <div class="d-flex">
      <img src="@/assets/images/band-right-cover.webp" />
      <v-spacer></v-spacer>
      <img src="@/assets/images/band-left-cover.webp" />
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper/modules";
// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { mystore } from "@/store";
import { mapActions, mapState } from "pinia";
import { ListsStore1 } from "@/store/Lists";
import { CartStore1 } from "@/store/Cart";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  async mounted() {
    await this.getCatigoryProduct1("smartphones");
    await document.querySelectorAll("#my-galleryimg").forEach((el) => {
      el.onclick = () => {
        const sr = el.getAttribute("src");
        document.querySelector("#big-img").src = sr;
      };
    });
  },
  setup() {
    return {
      modules: [Navigation, Mousewheel, Keyboard, Scrollbar],
    };
  },
  methods: {
    ...mapActions(CartStore1, ["Additem"]),
    ...mapActions(ListsStore1, ["AdditemL", "updateL"]),
    ...mapActions(mystore, ["getCatigoryProduct1"]),
    async lovefun(data) {
      await document.querySelectorAll("#lovebtn").forEach((el) => {
        el.onclick = () => {
          el.style.color = "red";
        };
      });
      data.quantity = 1;
      await this.AdditemL(data);
    },
  },
  computed: {
    ...mapState(mystore, ["catigoryProducts1"]),
    ...mapState(ListsStore1, ["list"]),
  },
};
</script>
<style scoped>
#availbel {
  color: rgb(243, 16, 16);
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(236, 216, 216);
  width: fit-content;
  height: 30px;
  z-index: 10;
  position: relative;
  left: -15px;
  top: 10px;
}
#head {
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}
.mySwiper {
  width: 100%;
  position: relative;
  padding-left: 50px;
}
</style>
