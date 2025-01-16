<template>
  <div>
    <v-row
      width="100%"
      justify="center"
      style="position: relative; top: -125px"
    >
      <v-table id="itemCartcon" height="fit-content" fixed-header="true">
        <thead class="bg-black">
          <th style="border: 2px solid black" width="600px">product</th>
          <v-spacer></v-spacer>
          <th width="100px">price</th>
        </thead>
        <br />
        <tr
          style="background-color: aliceblue; width: 100%"
          v-for="item in this.list"
          :key="item.id"
        >
          <td>
            <v-row justify="start">
              <v-divider></v-divider>
              <v-col cols="4">
                <img height="100px" width="100px" :src="item.thumbnail" />
              </v-col>
              <v-col
                cols="7"
                style="position: relative; left: -50px; height: 100%"
                align-self="center"
              >
                <span class="text-h6">{{ item.title }}</span>
                <div class="d-flex flex-row" style="gap: 10px">
                  <span style="opacity: 0.6"
                    >width: {{ item.dimensions.width }}</span
                  >
                  <span style="opacity: 0.6"
                    >height: {{ item.dimensions.height }}</span
                  >
                  <span style="opacity: 0.6"
                    >depth: {{ item.dimensions.depth }}</span
                  >
                </div>
              </v-col>
            </v-row>
          </td>
          <v-spacer></v-spacer>
          <td>{{ Math.ceil(item.price) }}$</td>

          <td>
            <v-btn style="margin-right: 10px" @click="this.delitemL(item.id)"
              >remove</v-btn
            >
            <v-btn
              @click="
                $router.push({ name: 'derilse', params: { idparam: item.id } })
              "
              >show detiles</v-btn
            >
          </td>
        </tr>
      </v-table>
    </v-row>
  </div>
</template>
<script>
import { ListsStore1 } from "@/store/Lists";
import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      shipping: 20,
      item: "",
      nums: [],
      total: [],
      itemurl: ["home", "cartpage", "checkout"],
      cantry: ["Egypt", "afercan", "alex"],
      email: "",
      select: "",
      checkbox: "",
    };
  },
  computed: { ...mapState(ListsStore1, ["list"]) },
  methods: {
    ...mapActions(ListsStore1, ["GetCartL", "delitemL", "updateL"]),
    muns(item) {
      let q = item.quantity;
      if (q == 1) {
        return;
      } else {
        item.quantity--;
      }
    },
  },

  async mounted() {
    window.scroll(0, 0);
    await this.GetCartL();
  },
};
</script>
<style lang="css" scoped></style>
