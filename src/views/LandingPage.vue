<template>
    <VHeader pageTitle="Home" />


    <h1>Home</h1>

  <v-app>
    <div class="main">

      <CourseAdd />

    </div>
  </v-app>
</template>

<script lang="ts">
import CourseAdd from '@/components/CourseAdd.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    CourseAdd,
  },
  setup() {
    const pageTitle = 'Athenas Academy - Landing Page';
    return { pageTitle };
  },
});
</script>

<style>
@import '../styles/landingPage.scss';
</style>
