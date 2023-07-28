<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card>
              <v-card-title class="blue darken-2 white--text">Formulário de Inscrição</v-card-title>
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field v-model="formData.cpf" label="CPF" required :rules="[validarCPF]"></v-text-field>
                  <v-text-field v-model="formData.curso.nomeCurso" label="Nome do Curso" required></v-text-field>
                  <v-text-field v-model="formData.dataNascimento" label="Data de Nascimento" required></v-text-field>
                  <v-text-field v-model="formData.email" label="Email" required></v-text-field>
                  <v-text-field v-model="formData.endereco.logradouro" label="Logradouro" required></v-text-field>
                  <v-text-field v-model="formData.endereco.numero" label="Número" required></v-text-field>
                  <v-text-field v-model="formData.endereco.complemento" label="Complemento"></v-text-field>
                  <v-text-field v-model="formData.endereco.bairro" label="Bairro" required></v-text-field>
                  <v-text-field v-model="formData.endereco.localidade" label="Localidade" required></v-text-field>
                  <v-text-field v-model="formData.endereco.uf" label="UF" required></v-text-field>
                  <v-text-field v-model="formData.endereco.cep" label="CEP" required :rules="[validarCEP]"></v-text-field>
                  <v-text-field
                    v-model="formData.telefone.telefoneCelular"
                    label="Telefone Celular"
                    required
                    :rules="[validateTelefone]"
                  ></v-text-field>
                  <v-text-field
                    v-model="formData.telefone.telefoneResidencial"
                    label="Telefone Residencial"
                    required
                    :rules="[validateTelefone]"
                  ></v-text-field>
                  <v-text-field
                    v-model="formData.telefone.telefoneRecado"
                    label="Telefone Recado"
                    required
                    :rules="[validateTelefone]"
                  ></v-text-field>
                  <v-select v-model="formData.sexo" :items="sexOptions" label="Sexo" required></v-select>
                  <v-text-field v-model="formData.nomeCompleto" label="Nome Completo" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="confirmar">Confirmar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        cpf: '',
        curso: {
          codigoCurso: 1, //
          nomeCurso: '',
        },
        dataNascimento: '',
        email: '',
        endereco: {
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          localidade: '',
          uf: '',
          cep: '',
        },
        telefone: {
          telefoneCelular: '',
          telefoneResidencial: '',
          telefoneRecado: '',
        },
        sexo: '',
        nomeCompleto: '',
      },
      sexOptions: ['M', 'F'],
      dateMenu: false,
    };
  },
  methods: {
    validarCPF(cpf: string) {
      const cpfRegex = /^\d{11}$/;
      return cpfRegex.test(cpf);
    },
    validarCEP(cep: string) {
      const cepRegex = /^\d{8}$/;
      return cepRegex.test(cep);
    },
    formatarDataNascimento(data: string | number | Date) {
      const date = new Date(data);
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    confirmar() {
      const isValidCPF = this.validarCPF(this.formData.cpf);
      const isValidCEP = this.validarCEP(this.formData.endereco.cep);

      if (!isValidCPF || !isValidCEP || !this.valid) {
        // If form data is invalid, don't proceed with the API call
        return;
      }

      this.formData.dataNascimento = this.formatarDataNascimento(this.formData.dataNascimento);

      // Sending the formatted data to the server
      axios
        .post('https://back.athena-academy.tech/api/v1/incricao/cadastrar-candidato', this.formData)
        .then(response => {
          console.log('Resposta da API:', response.data);
          this.formData = {
            cpf: '',
            curso: {
              codigoCurso: '1',
              nomeCurso: '',
            },
            dataNascimento: '',
            email: '',
            endereco: {
              bairro: '',
              cep: '',
              localidade: '',
              logradouro: '',
              numero: '',
              uf: '',
              complemento: '',
            },
            nomeCompleto: '',
            sexo: '',
            telefone: {
              telefoneCelular: '',
              telefoneResidencial: '',
              telefoneRecado: '',
            },
          };
          this.dateMenu = false;
        })
        .catch(error => {
          console.error('Erro ao enviar o payload para a API:', error);
        });
    },
  },
};
</script>

<style>
/* Estilos personalizados aqui, se necessário */
</style>
