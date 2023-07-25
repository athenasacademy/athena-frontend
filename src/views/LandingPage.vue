<template>
  <v-app>
    <div class="main">
      <v-main-section />
    </div>
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

<style>
  @import '../styles/landingPage.scss';
</style>
