<template>
  <div>
    <v-slide-group
      class="mx-auto"
      style="width: 100%"
      id="slide-group"
      prev-icon="mdi-arrow"
      next-icon="mdi-arrow"
    >
      <v-slide-group-item id="item" style="width: 100px">
        <v-card id="item">
          <v-card-item>
            <v-card-title
              ><v-icon
                ><img id="item-img" src="@/assets/SVGS/truck.svg"
              /></v-icon>
              free return
            </v-card-title>
          </v-card-item>
        </v-card>
      </v-slide-group-item>
      <v-slide-group-item>
        <v-card id="item">
          <v-card-item>
            <v-card-title
              ><v-icon
                ><img
                  id="item-img"
                  height="30px"
                  src="@/assets/SVGS/guarantee.svg"
              /></v-icon>
              free return</v-card-title
            >
          </v-card-item>
        </v-card>
      </v-slide-group-item>
      <v-slide-group-item>
        <v-card id="item">
          <v-card-item>
            <v-card-title
              ><v-icon
                ><img id="item-img" src="@/assets/SVGS/trophy.svg"
              /></v-icon>
              free return</v-card-title
            >
          </v-card-item>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
#item {
  width: 350px;
  color: gray;
  border-inline-start: 2px solid rgba(10, 9, 9, 30%);
}
#slide-group {
  position: relative;
  left: px;
  padding-left: 100px;
}
</style>
