<template>
  <v-app>
    <VHeader pageTitle="Inscrição" />

    <v-main>

      <h1>Incrição</h1>
      <SubscriptionForm />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SubscriptionForm from '../components/SubscriptionForm.vue';

export default defineComponent({
  components: {
    SubscriptionForm,
  },
});
</script>

