<template>
  <v-container fluid>
    <v-card class="mx-auto ">
      <v-card-title class="primary white--text">
        <span class="title">Admission {{ this.$route.params.id }} Visits</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="py-0">
        <v-timeline dense>
          <v-slide-x-reverse-transition group hide-on-leave>
            <v-timeline-item
              v-for="visit in visits"
              :key="visit.id"
              small
              fill-dot
            >
              <v-alert
                :value="true"
                color="success"
                text
                icon="mdi-information"
              >
                <div class="title">
                  {{ visit.dateTime }}
                </div>
                <v-divider></v-divider>

                <p cl>{{ visit.symptoms }}</p>
              </v-alert>
            </v-timeline-item>
          </v-slide-x-reverse-transition>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
const COLORS = ["info", "warning", "error", "success"];
export default {
  data: () => ({
    visits: null
  }),
  methods: {
    async fetchvitits() {
      return await this.$api
        .$get(`admissions/${this.$route.params.id}/visits`)
        .then(response => {
          this.visits = response.reverse();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeCreate() {},
  created() {
    this.fetchvitits();
  },
  computed: {}
};
</script>
