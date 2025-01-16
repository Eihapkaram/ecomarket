<template>
  <div class="home">
    <BaaNerCOM />
    <SectionSLide />
    <br />
    <OFeerSection />
    <SlideCards1 :allpro="this.all" />
    <sectionOf />
    <TopCatogery />
    <NewProduct />
    <ServeCards />
    <TopMobil />
    <br />
    <FooterSction />
  </div>
</template>

<script>
import { mystore } from "@/store";
import { mapActions, mapState } from "pinia";
import FooterSction from "@/components/Home/FooterSction.vue";
import TopMobil from "@/components/Home/TopMobil.vue";
import ServeCards from "@/components/Home/ServeCards.vue";
import NewProduct from "@/components/Home/NewProduct.vue";
import sectionOf from "@/components/Home/sectionOf.vue";
import TopCatogery from "@/components/Home/TopCatogery.vue";
import BaaNerCOM from "@/components/Home/BaaNerCOM.vue";
import SectionSLide from "@/components/Home/SectionSLide.vue";
import OFeerSection from "@/components/Home/OFeerSection.vue";
import SlideCards1 from "@/components/Home/SlideCards1.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    BaaNerCOM,
    SectionSLide,
    OFeerSection,
    SlideCards1,
    sectionOf,
    TopCatogery,
    NewProduct,
    ServeCards,
    TopMobil,
    FooterSction,
  },
  computed: {
    ...mapState(mystore, ["all"]),
  },
  methods: {
    ...mapActions(mystore, ["getall", "getcatigories"]),
  },
  async mounted() {
    await this.getall();
    await this.getcatigories();
  },
};
</script>
<style lang="css" scoped></style>
