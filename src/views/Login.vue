<template>
    <VHeader pageTitle="Login" />

  <v-app>
    <v-main class="login-background">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card>
              <v-card-title class="blue darken-2 white--text">Login</v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field v-model="email" label="Email" required></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Senha"
                    type="password"
                    required
                    :rules="[checkPasswordRules]"
                  ></v-text-field>
                  <span v-if="passwordErrorMessage">{{ passwordErrorMessage }}</span>
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
            <v-text-field
              v-model="registerPassword"
              label="Senha"
              type="password"
              required
              :rules="[checkPasswordRules]"
            ></v-text-field>
            <span v-if="passwordErrorMessage">{{ passwordErrorMessage }}</span>
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

<script lang="ts">
import { mapActions } from 'vuex';
import router from '../router/index';

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
      passwordErrorMessage: '',
    };
  },
  computed: {
    checkPasswordRules() {
      return (value: string) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
        if (!regex.test(value)) {
          this.passwordErrorMessage =
            'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número, um caractere especial e ter entre 6 e 20 caracteres.';
          return false;
        } else {
          this.passwordErrorMessage = '';
          return true;
        }
      };
    },
    canRegister() {
      return (
        this.registerEmail === this.confirmEmail &&
        this.registerEmail !== '' &&
        this.registerPassword !== '' &&
        this.passwordErrorMessage === ''
      );
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
      try {
        const response = await this.$axios.post('usuario/login', {
          senha: this.password,
          usuario: this.email,
        });

        const token = response.data.token;
        this.saveToken(token);

        router.push({ name: 'Home' });
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log('Credenciais inválidas.');
        } else {
          console.error('Erro ao fazer login:', error);
        }
      }
    },
    async register() {
      try {
        const response = await this.$axios.post('usuario/registrar', {
          confirmEmail: this.confirmEmail,
          email: this.registerEmail,
          senha: this.registerPassword,
        });
        this.registrationSuccess = true;
        console.log(response);
      } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        console.log('usuario/registrar', {
          confirmEmail: this.confirmEmail,
          email: this.registerEmail,
          senha: this.registerPassword,
        });
      }
    },
    ...mapActions(['saveToken']),
  },
};
</script>

<style>
@import '../styles/login.scss';
</style>
