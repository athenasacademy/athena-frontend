<template>
  <div>
    <template v-if="Array.isArray(cursos)">
      <v-card elevation="6" v-if="cursos.length > 0">
        <v-col>
          <v-card-title>{{ cursos[0].nome }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <div><strong>ID:</strong> {{ cursos[0].id }}</div>
                <div><strong>Descrição:</strong> {{ cursos[0].descricao }}</div>
                <div><strong>Carga Horária:</strong> {{ cursos[0].cargaHoraria }}</div>
                <div>
                  <strong>Disciplinas:</strong>
                  <ul>
                    <li v-for="disciplina in cursos[0].disciplinas" :key="disciplina.id">{{ disciplina.nome }}</li>
                  </ul>
                </div>
              </v-col>
              <v-col cols="4">
                <div><strong>Área de Conhecimento:</strong> {{ cursos[0].areaConhecimento.nome }}</div>
                <div><strong>Data de Cadastro:</strong> {{ cursos[0].dataCadastro }}</div>
                <div><strong>Data de Atualização:</strong> {{ cursos[0].dataAtualizacao || 'N/A' }}</div>
                <div><strong>Status:</strong> {{ cursos[0].ativo ? 'Ativo' : 'Inativo' }}</div>
              </v-col>
              <v-col cols="4">
                <img class="curse-ico" :src="cursoUm" alt="Ico curso 1" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-card>
      <v-card v-else>
        <p>Nenhum curso disponível.</p>
      </v-card>
    </template>
    <template v-else>
      <v-card v-if="cursos">
        <v-card-title>{{ cursos.nome }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <div><strong>ID:</strong> {{ cursos.id }}</div>
              <div><strong>Descrição:</strong> {{ cursos.descricao }}</div>
              <div><strong>Carga Horária:</strong> {{ cursos.cargaHoraria }}</div>
              <div>
                <strong>Disciplinas:</strong>
                <ul>
                  <li v-for="disciplina in cursos.disciplinas" :key="disciplina.id">{{ disciplina.nome }}</li>
                </ul>
              </div>
            </v-col>
            <v-col cols="4">
              <div><strong>Área de Conhecimento:</strong> {{ cursos.areaConhecimento.nome }}</div>
              <div><strong>Data de Cadastro:</strong> {{ cursos.dataCadastro }}</div>
              <div><strong>Data de Atualização:</strong> {{ cursos.dataAtualizacao || 'N/A' }}</div>
              <div><strong>Status:</strong> {{ cursos.ativo ? 'Ativo' : 'Inativo' }}</div>
            </v-col>
            <v-col cols="4">
              <img class="curse-ico" :src="cursoUm" alt="Ico curso 1" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card v-else>
        <p>Nenhum curso disponível.</p>
      </v-card>
    </template>
  </div>
</template>

<script lang="ts">
import { defineProps, PropType } from 'vue';
import { CourseOrArray } from '../models/CourseModels';

export default {
  props: {
    cursosData: {
      type: Object as PropType<CourseOrArray>,
      required: true,
    },
  },
  setup(props) {
    return { cursos: props.cursosData };
  },
  data() {
    return {
      cursoUm: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZK9F9QO0nrHw33phjOHzFw8DLUg4Rg8JchEE37ooG6KqwYXUxvbqqbFPF_xt_TUdOsAs&usqp=CAU',
    };
  }
};
</script>
