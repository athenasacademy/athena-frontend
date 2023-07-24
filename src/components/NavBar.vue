<template>
  <v-card>
    <v-app-bar app color="primary" dark clipped-left fixed dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My files</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn variant="text" icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>
      <v-menu offset-x>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" variant="text" icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in profileItems" :key="item.title" @click="item.action">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      fixed
      expand-on-hover
      permanent
      dark
      width="300"
    >
      <v-list dense nav>
        <v-list-item-group v-model="group" active-class="primary--text" color="primary">
          <v-list-item v-for="item in items" :key="item.title" :to="item.value">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-card-text>
        <!-- Your content here -->
      </v-card-text>
    </v-main>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
          icon: 'mdi-folder',
        },
        {
          title: 'Bar',
          value: 'bar',
          icon: 'mdi-account-multiple',
        },
        {
          title: 'Fizz',
          value: 'fizz',
          icon: 'mdi-star',
        },
        {
          title: 'Buzz',
          value: 'buzz',
          icon: 'mdi-bell',
        },
      ],
      profileItems: [
        {
          title: 'Profile Option 1',
          action: () => {
            // Action for Profile Option 1
          },
        },
        {
          title: 'Profile Option 2',
          action: () => {
            // Action for Profile Option 2
          },
        },
        {
          title: 'Profile Option 3',
          action: () => {
            // Action for Profile Option 3
          },
        },
      ],
    };
  },
};
</script>
