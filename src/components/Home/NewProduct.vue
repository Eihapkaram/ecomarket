<template>
  <br />
  <div>
    <v-slide-group>
      <v-slide-group-item v-for="pro1 in this.catigoryProducts" :key="pro1.id">
      </v-slide-group-item>
    </v-slide-group>
  </div>

  <div style="height: 38rem">
    <header id="head">
      <h3 class="ml-10 text-h5">
        NewProduct <img style="width: 30px" src="" />
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
            params: { catigory: 'laptobs' },
          })
        "
      >
        <div class="progress-bar">
          <span class="mr-5" id="ig">Show ALL</span>
        </div>
      </div>
    </header>
    <br />
    <v-row>
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
          v-for="pro1 in this.catigoryProducts"
          :key="pro1.id"
        >
          <v-card width="350px" height="520px">
            <v-row>
              <v-btn
                id="lovebtn"
                @focus="lovefun(pro1)"
                icon="mdi-heart"
              ></v-btn
              ><v-spacer></v-spacer>
              <span id="availbel" class="d-flex">{{
                pro1.availabilityStatus
              }}</span>
            </v-row>
            <img
              id="big-img"
              width="200px"
              style="position: relative; top: -50px; left: -30px"
              :src="pro1.thumbnail"
            />
            <v-card-item style="position: relative; top: -50px; left: -10px">
              <v-card-title>{{ pro1.title }}</v-card-title>
              <v-rating
                v-model="pro1.rating"
                ripple
                readonly
                :length="5"
                :size="20"
                active-color="orange"
                class="d-flex"
              /><br />
              <v-card-subtitle class="d-flex text-h6" style="color: brown"
                >price : {{ pro1.price }} $
              </v-card-subtitle>
              <v-card-subtitle class="d-flex"
                >brand : {{ pro1.brand }}
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
                  <swiper-slide
                    v-for="(prox, index) in pro1.images"
                    :key="index"
                  >
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
                      params: { idparam: pro1.id },
                    })
                  "
                  rounded
                  >show-detilse</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                  @click="(pro1.quantity = 1), this.Additem(pro1)"
                  rounded
                  ripple
                  elevation="2"
                  style="position: relative; left: -25px"
                  icon="mdi-cart"
                ></v-btn>
              </v-card-actions>
            </v-card-item>
          </v-card>
        </swiper-slide>
      </swiper>
      <div>
        <img
          width="440"
          height="auto"
          style="position: relative; left: -15px"
          class="mx-auto"
          src="@/assets/images/vr-banner.webp"
        />
      </div>
    </v-row>
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
    await this.getCatigoryProduct("laptops");
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
    ...mapActions(mystore, ["getCatigoryProduct"]),
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
    ...mapState(mystore, ["catigoryProducts"]),
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
  position: relative;
  left: -70px;
  top: 15px;
}
#head {
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}
.mySwiper {
  width: 900px;
  position: relative;
  padding-left: 0px;
}
</style>
