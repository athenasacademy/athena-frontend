<template>
  <v-app>
    <VHeader :pageTitle="pageTitle" v-if="showHeader" />

    <default-view />
  </v-app>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import DefaultView from './View.vue';
  import VHeader from '@/components/VHeader.vue';

  const pageTitle = 'Athenas Academy';
  const route = useRoute();
  const showHeader = route.name !== 'Login';
</script>
