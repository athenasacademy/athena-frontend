<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card>
              <v-card-title class="blue darken-2 white--text">Login</v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field v-model="email" label="Email" required></v-text-field>
                  <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Entrar</v-btn>
                <v-btn color="secondary" @click="showRegisterDialog">Registrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-dialog v-model="registerDialog" max-width="500">
      <v-card>
        <v-card-title class="blue darken-2 white--text">Registrar</v-card-title>
        <v-card-text>
          <v-form ref="registerForm">
            <v-text-field v-model="registerEmail" label="Email" required></v-text-field>
            <v-text-field v-model="confirmEmail" label="Confirmar Email" required></v-text-field>
            <v-text-field v-model="registerPassword" label="Senha" type="password" required></v-text-field>
          </v-form>
          <v-alert v-if="registrationSuccess" type="success" icon="mdi-check-circle-outline">Registro feito com sucesso!</v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="!canRegister" @click="register">Registrar</v-btn>
          <v-btn color="secondary" @click="closeRegisterDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      registerDialog: false,
      registerEmail: '',
      confirmEmail: '',
      registerPassword: '',
      registrationSuccess: false,
    };
  },
  computed: {
    canRegister() {
      return this.registerEmail === this.confirmEmail && this.registerEmail !== '' && this.registerPassword !== '';
    },
  },
  methods: {
    showRegisterDialog() {
      this.registerDialog = true;
      this.registrationSuccess = false;
    },
    closeRegisterDialog() {
      this.registerDialog = false;
      this.registrationSuccess = false;
    },
    async login() {
      // Implementar lógica para fazer login
      try {
        const response = await this.$axios.post('{{baseUrl}}/api/v1/usuario/login', {
          senha: this.password,
          usuario: this.email
        });
        // Lógica para armazenar o token e redirecionar para a próxima página após o login
        console.log('Token de login:', response.data.token);
        // Redirecionar para outra página ou exibir mensagem de sucesso
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        // Exibir mensagem de erro ao usuário
      }
    },
    async register() {
      // Implementar lógica para registrar usuário
      try {
        const response = await this.$axios.post('{{baseUrl}}/api/v1/usuario/registrar', {
          confirmEmail: this.registerEmail,
          email: this.registerEmail,
          senha: this.registerPassword
        });
        // Lógica para exibir mensagem de sucesso no modal
        this.registrationSuccess = true;
      } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        // Exibir mensagem de erro ao usuário
      }
    }
  }
};
</script>

<style>
.blue {
  background-color: #1a237e;
}

.golden {
  color: #ffd54f;
}
</style>
