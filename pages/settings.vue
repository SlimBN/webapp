<template>
  <v-container class="fill-height" fluid>
    <v-row>
      <v-col cols="12" sm="3" class="pa-2">
        <v-list nav dense subheader tile>
          <template v-for="(setting, ind) in settings">
            <v-list-group
              :value="true"
              color="green"
              :prepend-icon="setting.icon"
              :key="ind"
            >
              <template v-slot:activator>
                <v-list-item-title class="black--text">{{
                  $t(setting.title)
                }}</v-list-item-title>
              </template>

              <template v-for="(menu, index) in setting.menus">
                <v-list-group
                  :value="true"
                  no-action
                  sub-group
                  :key="menu.title"
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>{{
                        $t(menu.title)
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <template v-for="(sub, i) in menu.submenus">
                    <v-list-item :key="sub.to" :to="sub.to">
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-icon
                            small
                            color="green"
                            v-html="sub.icon"
                          ></v-icon>
                          {{ $t(sub.title) }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider class="ml-12" :key="i"></v-divider>
                  </template>
                </v-list-group>
              </template>
            </v-list-group>
          </template>
        </v-list>
      </v-col>
      <v-col cols="12" sm="9" class="pa-2">
        <nuxt-child :key="this.$router.currentRoute.name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      picture: true,
      dark: false,
      sync: false,
      pagetitle: "Administrator Dashboard",

      admins: [
        [
          "label.titles.usersmanagement",
          "mdi-account-multiples-outline",
          "/settings/users"
        ],
        ["label.titles.settings", "mdi-cog-outline", "/settings/admin"]
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"]
      ],
      settings: [
        {
          title: "label.titles.roleandpermissions",
          icon: "mdi-shield-lock-outline",
          menus: [
            {
              title: "label.titles.administrations",
              submenus: [
                {
                  title: "label.titles.usersmanagement",
                  to: "/settings/users",
                  icon: "mdi-account-settings"
                },
                {
                  title: "label.titles.administrations",
                  to: "/settings/admin",
                  icon: "mdi-account-cog-outline"
                },
                {
                  title: "label.menu.securitycontrol",
                  icon: "mdi-lock",
                  to: "/settings/roles"
                }
              ]
            },
            {
              title: "label.titles.actions",
              submenus: [
                {
                  title: "label.menu.create",
                  icon: "mdi-plus-outline",
                  to: "/create"
                },
                {
                  title: "label.menu.read",
                  icon: "mdi-file-outline",
                  to: "/read"
                },
                {
                  title: "label.menu.update",
                  icon: "mdi-update",
                  to: "/update"
                },
                {
                  title: "label.menu.delete",
                  icon: "mdi-delete",
                  to: "/delete"
                }
              ]
            }
          ]
        },
        {
          title: "label.titles.system",
          icon: "mdi-cog",
          menus: [
            {
              title: "label.titles.configurations",
              submenus: [
                {
                  title: "label.titles.settings",
                  to: "/settings/",
                  icon: "mdi-cogs"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  head() {
    return {
      title: "Home Page"
    };
  },
  beforeMount: function() {
    //const vm = this;
  },
  methods: {
    toggledrawer: function() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
<style>
#app {
  font-family: "Lato", sans-serif;
}
.routeLink {
  text-decoration: none;
}
</style>
