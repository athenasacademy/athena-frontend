<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="blue darken-2 white--text">Formulário para gerar certificado</v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              
              <v-text-field v-model="formData.matricula" label="Matrícula" required></v-text-field>

            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submitForm">Enviar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        matricula: '',
      },
      valid: false,
    };
  },
  methods: {
    async submitForm() {
      if (!this.valid) {
        return;
      }

      axios
        .post('https://back.athena-academy.tech/api/v1/certificado/gerar', this.formData)
        .then(response => {
          console.log('Resposta da API:', response.data);
        // Reinicializa o formulário após o envio bem-sucedido
        this.formData = {
          matricula: '',
        };
      }).catch(error => {
          console.error('Erro ao enviar o payload para a API:', error);
        });
    },
  },
};
</script>

<style>
/* Estilos personalizados aqui, se necessário */
</style>
