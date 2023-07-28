<template>
  <v-app>
    <VHeader pageTitle="Matrícula" />
    <v-main>
      <div>
        <h1>Matrícula</h1>
        <RegistrationForm />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import RegistrationForm from '../components/RegistrationForm.vue';

  export default {
    components: {
      RegistrationForm
    },
  };
</script>

<style>
/* Estilos personalizados aqui, se necessário */
</style>
