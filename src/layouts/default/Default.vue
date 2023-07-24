<template>
  <v-app>
    <VHeader :pageTitle="pageTitle" />

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultView from './View.vue'
  import VHeader from '@/components/VHeader.vue'

  const pageTitle = 'Athenas Academy';
</script>
