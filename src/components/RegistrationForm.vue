<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="blue darken-2 white--text">Formulário de Matrícula</v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field v-model="numeroInscricao" label="Número de Inscrição" required></v-text-field>
              <v-text-field v-model="formData.matricula" label="Matrícula" required></v-text-field>
              <v-text-field v-model="formData.contrato" label="Contrato" required></v-text-field>
              <v-checkbox v-model="formData.boletoPago" label="Boleto Pago"></v-checkbox>
              <v-checkbox v-model="formData.contratoAssinado" label="Contrato Assinado"></v-checkbox>
              <v-textarea v-model="formData.mensagem" label="Mensagem"></v-textarea>
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
      numeroInscricao: '',
      formData: {
        matricula: 0,
        contrato: 0,
        boletoPago: true,
        contratoAssinado: true,
        mensagem: '',
      },
      valid: false,
    };
  },
  methods: {
    async submitForm() {
      if (!this.valid) {
        return;
      }

      try {
        const response = await axios.put(
          `matricula/matricular-aluno/${this.numeroInscricao}`,
          this.formData
        );
        console.log('Resposta da API:', response.data);

        // Reinicializa o formulário após o envio bem-sucedido
        this.numeroInscricao = '';
        this.formData = {
          matricula: 0,
          contrato: 0,
          boletoPago: true,
          contratoAssinado: true,
          mensagem: '',
        };
      } catch (error) {
        console.error('Erro ao enviar o payload para a API:', error);
      }
    },
  },
};
</script>

<style>
/* Estilos personalizados aqui, se necessário */
</style>
