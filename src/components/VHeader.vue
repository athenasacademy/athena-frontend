<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-toolbar-title @click="navigateToHome">{{ pageTitle }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text @click="navigateTo('resources')">Recursos</v-btn>
    <v-btn text @click="navigateTo('about')">Sobre</v-btn>
    <v-btn v-if="!userLoggedIn" @click="showLoginDialog">Login</v-btn>
    <v-menu v-else>
    </v-menu>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app class="menu-lateral">
    <v-list>
      <v-list-item @click="navigateToHome">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Athenas Academy</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="screen in otherScreens" :key="screen.name" @click="navigateTo(screen.name)">
        <v-list-item-icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ screen.displayName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      drawer: false,
      userLoggedIn: false,
      userLogin: 'Usuário',
      userAvatar: '', // Coloque aqui o caminho para a imagem do avatar do usuário
      otherScreens: [
        { name: 'subscription', displayName: 'Inscrição' },
        { name: 'registration', displayName: 'Matrícula' },
        { name: 'classroom', displayName: 'Curso' },
        { name: 'payment', displayName: 'Pagamentos' },
        { name: 'certification', displayName: 'Certificados' }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    showLoginDialog() {
      // Implemente a lógica para mostrar o diálogo de login
    },
    logout() {
      // Implemente a lógica para realizar o logout do usuário
    },
    navigateToHome() {
      this.$router.push('/');
      this.drawer = false;
    },
    navigateTo(screen) {
      this.$router.push(screen.toLowerCase());
      this.drawer = false;
    }
  }
};
</script>

<style>
.menu-lateral {
  background-color: #f2f2f2;
}
</style>
