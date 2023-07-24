<template>
  <v-app>

    <v-main-section />
  </v-app>
</template>

<script>
import VMainSection from '@/components/VMainSection.vue'

export default {
  components: {
    VMainSection
  },
  setup() {
    const pageTitle = 'Athenas Academy - Landing Page';
    return { pageTitle };
  }
}
</script>
