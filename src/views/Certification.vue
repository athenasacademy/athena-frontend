<template>
  <v-app>
    <VHeader pageTitle="Certificados" />
    <v-main>
      <div>
        <h1>Certificados</h1>
        <Certification/>
      </div>
    </v-main>
  </v-app>
</template>
<script lang="ts">
  import Certification from '../components/CertificationForm.vue';

  export default {
    components: {
      Certification
    },
  };
</script>