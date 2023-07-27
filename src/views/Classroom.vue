<template>
  <v-app>
    <VHeader pageTitle="Cursos" />

    <v-main>
      <div>
        <h1>Cursos</h1>

        <div v-if="cursosData !== null">
          <ClassroomDetails :cursosData="cursosData" />
        </div>

        <div v-else>
          <p>Carregando...</p>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ClassroomDetails from '../components/ClassroomDetails.vue';
import { Course } from '../models/CourseModels';

const cursosData = ref<Course[] | null>(null);

onMounted(async () => {
  try {
    const response = await axios.get<Course>('curso/1');
    cursosData.value = [response.data]; // Convert to array with single course
  } catch (error) {
    console.error('Erro ao buscar os cursos:', error);
  }
});
</script>
