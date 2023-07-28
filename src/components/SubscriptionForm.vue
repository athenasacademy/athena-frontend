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
                  <v-text-field v-model="formData.nomeCompleto" label="Nome Completo" required></v-text-field>
                  <v-text-field v-model="formData.cpf" label="CPF" required :rules="[validarCPF]"></v-text-field>
                  <v-select v-model="formData.sexo" :items="sexOptions" label="Sexo" required></v-select>
                  <v-menu
                    v-model="dateMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="formData.dataNascimento"
                        label="Data de Nascimento"
                        readonly
                        v-on="on"
                        required
                        :rules="[validateDate]"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="formData.dataNascimento" @input="dateMenu = false"></v-date-picker>
                  </v-menu>
                  <v-text-field v-model="formData.email" label="Email" required :rules="[validateEmail]"></v-text-field>
                  <v-text-field v-model="formData.endereco.logradouro" label="Logradouro" required></v-text-field>
                  <v-text-field v-model="formData.endereco.numero" label="Número" required></v-text-field>
                  <v-text-field v-model="formData.endereco.complemento" label="Complemento"></v-text-field>
                  <v-text-field v-model="formData.endereco.bairro" label="Bairro" required></v-text-field>
                  <v-text-field v-model="formData.endereco.localidade" label="Localidade" required></v-text-field>
                  <v-text-field v-model="formData.endereco.uf" label="UF" required></v-text-field>
                  <v-text-field v-model="formData.endereco.cep" label="CEP" required :rules="[validateCEP]"></v-text-field>
                  <v-text-field
                    v-model="formData.telefone.telefoneResidencial"
                    label="Telefone Residencial"
                    required
                    :rules="[validateTelefone]"
                  ></v-text-field>
                  <v-text-field
                    v-model="formData.telefone.telefoneCelular"
                    label="Telefone Celular"
                    required
                    :rules="[validateTelefone]"
                  ></v-text-field>
                  <v-text-field
                    v-model="formData.telefone.telefoneRecado"
                    label="Telefone Recado"
                    required
                    :rules="[validateTelefone]"
                  ></v-text-field>
                  <v-text-field v-model="formData.curso.nomeCurso" label="Nome do Curso" required></v-text-field>
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

<script>
import { required, email, helpers } from 'vuelidate/lib/validators';
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        nomeCompleto: '',
        cpf: '',
        sexo: '',
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
          telefoneResidencial: '',
          telefoneCelular: '',
          telefoneRecado: '',
        },
        curso: {
          codigoCurso: 1,
          nomeCurso: '',
        },
      },
      valid: false,
      sexOptions: ['M', 'F'],
      dateMenu: false,
    };
  },
  validations: {
    formData: {
      nomeCompleto: { required },
      cpf: {
        required,
        validCPF(value) {
          return helpers.withParams(
            { type: 'validCPF' },
            (cpf) => this.validarCPF(cpf)
          )(value);
        },
      },
      sexo: { required },
      dataNascimento: { required },
      email: { required, email },
      endereco: {
        logradouro: { required },
        numero: { required },
        bairro: { required },
        localidade: { required },
        uf: { required },
        cep: {
          required,
          validCEP(value) {
            return helpers.withParams(
              { type: 'validCEP' },
              (cep) => this.validarCEP(cep)
            )(value);
          },
        },
      },
      telefone: {
        telefoneResidencial: { required },
        telefoneCelular: { required },
        telefoneRecado: { required },
      },
      curso: {
        nomeCurso: { required },
      },
    },
  },
  methods: {
    validarCPF(cpf) {
      const cpfRegex = /^\d{11}$/;
      return !(!cpfRegex.test(cpf));
    },
    validarCEP(cep) {
      const cepRegex = /^\d{8}$/;
      return !(!cepRegex.test(cep));
    },
    confirmar() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log(this.formData);

      axios.post('https://back.athena-academy.tech/api/v1/incricao/cadastrar-candidato', this.formData)
        .then(response => {
          console.log('Resposta da API:', response.data);
          this.formData = {
            nomeCompleto: '',
            cpf: '',
            sexo: '',
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
              telefoneResidencial: '',
              telefoneCelular: '',
              telefoneRecado: '',
            },
            curso: {
              codigoCurso: 1,
              nomeCurso: '',
            },
          };
          this.dateMenu = false;
        })
        .catch(error => {
          console.error('Erro ao enviar o payload para a API:', error);
        });
      this.formData = {
        nomeCompleto: '',
        cpf: '',
        sexo: '',
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
          telefoneResidencial: '',
          telefoneCelular: '',
          telefoneRecado: '',
        },
        curso: {
          codigoCurso: 1,
          nomeCurso: '',
        },
      };
      this.dateMenu = false;
    },
  },
};
</script>

<style>
/* Estilos personalizados aqui, se necessário */
</style>
