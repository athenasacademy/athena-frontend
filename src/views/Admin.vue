<script setup lang="ts">
import { ref } from 'vue';
import VFormRegistrationCurse from '../components/Admin/VFormRegistrationCurse.vue'


interface Tab {
  text: string;
  value: number;
}

const tabAdministrador: number = 1;
const tabCadastroCursos: number = 2;

const tab = ref<number>(tabAdministrador);
const tabs = ref<Tab[]>([
  {
    text: "Administrador",
    value: tabAdministrador,
  },
  {
    text: "Cadastro de Cursos",
    value: tabCadastroCursos,
  },
]);
</script>

<template>
  <div class="page-wrapper">
    <v-container>
      <v-row class="color-white rounded-container">
        <v-col class="pa-10">
          <v-tabs fixed-tabs v-model="tab" color="light-blue-darken-3" bg-color="grey-lighten-3" align-tabs="center"
            class="rounded-container mb-10">
            <v-tab v-for="(item, index) in tabs" :key="index" :value="item.value" class="pa-4 pb-5 pt-5 text-h6">
              <span>{{ item.text }}</span>
            </v-tab>
          </v-tabs>
          <v-row v-if="tab === tabAdministrador">
            <!-- colocar os componentes ou view Admin -->
          </v-row>
          <v-row v-if="tab === tabCadastroCursos">
            <VFormRegistrationCurse/>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.v-slide-group-item--active {
  background-color: #AE8F59;
  color: white !important;
}

.color-white {
  background-color: white;
}

.page-wrapper {
  background-color: #eeeeee;
}

.rounded-container {
  border-radius: 5px;
}
</style>

<style>
body {
  background-color: #eeeeee;
}
</style>