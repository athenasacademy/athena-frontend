<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="blue darken-2 white--text">Cadastro de Curso</v-card-title>
          <v-card-text>
            <v-form ref="form" @submit.prevent="registerCourse">
              <v-text-field v-model="courseData.nome" label="Nome do Curso" required></v-text-field>
              <v-textarea v-model="courseData.descricao" label="Descrição do Curso" required></v-textarea>
              <v-select
                v-model="selectedDisciplines"
                :items="availableDisciplines"
                label="Disciplinas Disponíveis"
                multiple
                chips
                required
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="registerCourse">Cadastrar Curso</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      courseData: {
        idAreaConhecimento: 1,
        nome: '',
        descricao: '',
      },
      availableDisciplines: [],
      selectedDisciplines: [],
    };
  },
  created() {
    this.fetchAvailableDisciplines();
  },
  methods: {
    async fetchAvailableDisciplines() {
    try {
      let token = this.$store.state.token.token;
      let response = await this.$axios.get('https://back.athena-academy.tech/api/v1/curso/disciplina/todos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.availableDisciplines = response.data;
    } catch (error) {
      console.error('Erro ao obter as disciplinas disponíveis:', error);
    }
  },
    async registerCourse() {
      try {
        const response = await this.$axios.post('https://back.athena-academy.tech/api/v1/curso/registrar', this.courseData, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });

        const idCurso = response.data.id;
        await this.updateDisciplines(idCurso);

        this.courseData.nome = '';
        this.courseData.descricao = '';
        this.selectedDisciplines = [];

        console.log('Curso cadastrado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao cadastrar curso:', error);
      }
    },
    async updateDisciplines(idCurso) {
      try {
        for (const discipline of this.selectedDisciplines) {
          const disciplineData = {
            idCurso: idCurso,
            nome: discipline.nome,
            id: discipline.id,
            descricao: discipline.descricao,
            cargaHoraria: discipline.cargaHoraria,
          };

          await this.$axios.put('https://back.athena-academy.tech/api/v1/curso/disciplina/atualizar', disciplineData, {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          });
        }
        console.log('Disciplinas relacionadas com sucesso!');
      } catch (error) {
        console.error('Erro ao relacionar disciplinas ao curso:', error);
      }
    },
    ...mapActions(['saveToken']),
  },
};
</script>

<style>
  /* Estilos, se houver */
</style>
