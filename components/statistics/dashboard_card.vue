<template>
  <v-col class="pa-1" cols="12" xs="4" sm="6" md="2" xl="1">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="mx-auto " :elevation="hover ? 3 : 1" color="#FFFFFF">
          <v-list-item>
            <v-list-item-avatar
              height="45"
              rounded
              :class="`${item.color} lighten-5`"
            >
              <v-icon
                :color="`${item.color} darken-2`"
                v-text="item.icon"
              ></v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                class="text-h6 font-weight-black my-1"
                v-html="item.value"
              ></v-list-item-title>
              <v-list-item-subtitle
                :class="`${item.color}--text font-weight-normal text-caption `"
                v-html="item.title"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </template>
    </v-hover>
  </v-col>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.outlined {
  color: blue !important;
  border-color: blue !important;
}
</style>
